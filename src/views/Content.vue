<template>
  <div>
    <nav-bar class="nav-bar" :url="this.url" text="back"></nav-bar>
    <br>
    <div v-if="this.errored" :key="this.refresh" style="text-align:center">
      <h3>Internal Error (Content not found)</h3>
    </div>
    <div v-else>
      <header-info :title="currentArticle.title" :date="currentArticle.date" :readingTime="readingTime(this.fileContent)"></header-info>   
      <br>        
      <vue-markdown v-if="isMobile" :key="this.refresh" style="text-align:left!important;">{{this.fileContent}}</vue-markdown>
      <vue-markdown v-else :key="this.refresh" style="text-align: justify!important;text-justify: inter-word;!important">{{this.fileContent}}</vue-markdown>
    </div>    
  </div>
</template>

<script>
  import NavBar from '../components/NavBar.vue'
  import VueMarkdown from 'vue-markdown'
  import Header from '../components/Header.vue'
  import { isMobile } from 'mobile-device-detect';
  import axios from 'axios';
  import router from '../router.js';

  export default {
    name: 'Content',
    components: {
      'nav-bar': NavBar,
      'vue-markdown': VueMarkdown,
      'header-info': Header
    },
    props: {
      id: {
        type: String
      }
    },
    data: function(){
      let url = this.$router.currentRoute.fullPath;
      url = url.substring(0, url.lastIndexOf('/'));
      return {isMobile: isMobile, url: url, currentArticle: [], fileContent: '', refresh: 0, errored: false, router: router, loading: true};
    },
    methods: {
      readingTime(file){
        const wordsPerMinute = 200;
        let noOfWords = file.split(/\s/g).length;
        const minutes = noOfWords / wordsPerMinute;
        const readTime = Math.ceil(minutes);
        return readTime;
      }
    },
    beforeCreate(){
      axios
        .get('https://anasaraid.me/stuff-data/articles.json')
        .then(response => {
          this.currentArticle = response.data.filter(a=>a.id==this.id)[0];
          if (this.currentArticle === undefined || this.currentArticle.length === 0){
            this.errored = true;
          }
          this.refresh += 1;
        })
        .catch(error => {
          console.log(error);
          this.errored = true;
          this.refresh += 1;
        })
        .finally(() => this.loading = false)
    },
    mounted(){
      let markdownUrl = 'https://anasaraid.me/stuff-data/markdowns/'+this.id+'.md';
      axios
        .get(markdownUrl)
        .then(response => {
          this.fileContent = response.data;
          this.refresh += 1;
        })
        .catch(error => {
          console.log(error);
          this.errored = true;
          this.refresh += 1;
        })
        .finally(() => this.loading = false)
    }
  }
</script>
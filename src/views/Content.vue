<template>
    <div>
        <nav-bar class="nav-bar" :url="this.url" text="back"></nav-bar>
        <br>
        <header-info :title="currentArticle[0].title" :date="currentArticle[0].date"></header-info>   
        <br>        
        <vue-markdown v-if="isMobile" style="text-align:left!important;">{{this.fileContent}}</vue-markdown>
        <vue-markdown v-else :key="this.refresh" style="text-align: justify!important;text-justify: inter-word;!important">{{this.fileContent}}</vue-markdown>
        <div v-if="this.errored" :key="this.refresh" style="text-align:center">
          <h3>Internal Error (Content not found)</h3>
        </div>
    </div>
</template>

<script>
    import NavBar from '../components/NavBar.vue'
    import VueMarkdown from 'vue-markdown'
    import Header from '../components/Header.vue'
    import { isMobile } from 'mobile-device-detect';
    import { db } from '../firebase';
    import axios from 'axios';
    //import Vue from 'vue'

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
        return {isMobile: isMobile, url: url, currentArticle: [], fileContent: '', refresh: 0, errored: false};
      },
      firestore(){
        return {
          currentArticle: db.collection('articles')
          .where(
            'id', '==', parseInt(this.id)
          )
        }
      },
      mounted(){
        let markdownUrl = 'https://anasaraid.me/stuff-data/markdowns/'+this.id+'.md';
        console.log(markdownUrl);
        axios
          .get(markdownUrl)
          .then(response => {
              console.log(response.data)
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
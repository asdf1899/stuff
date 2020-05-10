<template>
    <div>
        <nav-bar class="nav-bar" :url="this.url" text="back"></nav-bar>
        <br>
        <header-info :title="this.jsonArticle.title" :date="this.jsonArticle.date"></header-info>   
        <br>        
        <vue-markdown v-if="isMobile" style="text-align:left!important;">{{this.markdownFile}}</vue-markdown>
        <vue-markdown v-else style="text-align: justify!important;text-justify: inter-word;!important">{{this.markdownFile}}</vue-markdown>
    </div>
</template>

<script>
    import NavBar from '../components/NavBar.vue'
    import VueMarkdown from 'vue-markdown'
    import jsonArticles from '@/statics/articles.json'
    import Header from '../components/Header.vue'
    import { isMobile } from 'mobile-device-detect';
    //import file from '@/statics/markdowns/1.md'

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
          console.log(this.$router.currentRoute);
          let url = this.$router.currentRoute.fullPath;
          url = url.substring(0, url.lastIndexOf('/'));
          let jsonArticle = jsonArticles.find(x => x.id === this.id);
          const markdownFile = require('../statics/markdowns/'+jsonArticle.src).default;
          return ({ markdownFile, jsonArticle, isMobile, url });
        }
    }
</script>
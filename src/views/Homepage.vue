<template>
    <div>
        <nav-bar class="nav-bar" url="/anasaraid"></nav-bar>
        <header-info v-if="article==null" title="Stuff"></header-info>
        <header-info v-else-if="article==true" title="Articles"></header-info>
        <div v-if="article==null" style="text-align:center">
            <p>Just some random articles written in order to stay <i>"su co le rece"<sup>1</sup></i> with latest technologies.</p>
        </div>
        <div v-else-if="article==true" style="text-align:center">
            <p>Random articles about personal experiences, self improvement and latest tech stacks.</p>
        </div>
        <br>
        <div v-if="article == null" style="text-align:center">
          <router-link to="/articles" class="style-link" style="font-size: 1.4rem;">Articles</router-link>
          <br>
          <router-link to="/guides" class="style-link" style="font-size: 1.4rem;">Guides</router-link>
        </div>
        <div v-else style="text-align:center">
          <a class="style-link" v-on:click="article = null">Back</a>
        </div>
        <div v-show="article != null">
          <!-- show articles -->
          <articles-list :articles="articleList.slice().reverse()" :isArticle="article" v-if="article"></articles-list>
          <!-- show guides -->         
          <articles-list :articles="guidesList.slice().reverse()" :isArticle="article" v-if="!article"></articles-list>
        </div>
        <footer class="footer">
            <i><sup>1</sup> stay up to date in Trentino dialect</i>
            <br>
            <span>Built using <a href="https://vuejs.org/">Vue.js</a>, <a href="https://edwardtufte.github.io/tufte-css/">tufte.css</a>, open sourced and deployed on <a href="https://github.com/asdf1899/stuff/">Github</a></span>
        </footer>
    </div>
 </template>

<script>
    import Header from '../components/Header.vue'
    import ArticlesList from '../components/ArticlesList.vue'
    import NavBar from '../components/NavBar.vue'
    import jsonArticles from '@/statics/articles.json'

    export default {
        name: 'Homepage',
        components: {
          'articles-list': ArticlesList,
          'nav-bar': NavBar,
          'header-info': Header
        },
        data: function(){
          var articleList = jsonArticles.filter(a=>a.tag=="articles");
          var guidesList = jsonArticles.filter(a=>a.tag=="guides"); 
          return {
              articleList,
              guidesList,
              article: null
          }
        }
    }
</script>
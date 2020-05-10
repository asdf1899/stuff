<template>
  <div>
    <nav-bar class="nav-bar" url="/" text="home"></nav-bar>
    <header-info title="Guides"></header-info>
    <div style="text-align:center">
      <p>Development guides geared towards Computer Science and Web Programming.</p>
    </div>
    <articles-list :articles="guidesList.slice().reverse()" :isArticle="false"></articles-list>
    <footer class="footer">
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
    name: 'Guides',
    components: {
      'articles-list': ArticlesList,
      'nav-bar': NavBar,
      'header-info': Header
    },
    data: function(){
      var guidesList = jsonArticles.filter(a=>a.tag=="guides"); 
      return {
        guidesList
      }
    }
  }
</script>
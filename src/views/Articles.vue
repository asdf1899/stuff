<template>
  <div>
    <nav-bar class="nav-bar" url="/" text="home"></nav-bar>
    <header-info title="Articles"></header-info>
    <div style="text-align:center">
      <p>Random articles about personal experiences, self improvement and latest tech stacks.</p>
    </div>
    <articles-list :articles="articleList.slice().reverse()" :isArticle="false"></articles-list>
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
    name: 'Articles',
    components: {
      'articles-list': ArticlesList,
      'nav-bar': NavBar,
      'header-info': Header
    },
    data: function(){
      var articleList = jsonArticles.filter(a=>a.tag=="articles"); 
      return {
        articleList
      }
    }
  }
</script>
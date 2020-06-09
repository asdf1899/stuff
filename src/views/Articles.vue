<template>
  <div>
    <nav-bar class="nav-bar" url="/" text="home"></nav-bar>
    <header-info title="Articles"></header-info>
    <div style="text-align:center">
      <p>Random articles about personal experiences, self improvement and latest tech stacks.</p>
    </div>
    <articles-list :articles="articles.slice().reverse()" :key="this.refresh"></articles-list>
    <div v-if="this.errored" :key="this.refresh" style="text-align:center">
      <h3>Internal Error (Content not found)</h3>
    </div>
    <footer class="footer">
      <span>Built using <a href="https://vuejs.org/">Vue.js</a>, <a href="https://edwardtufte.github.io/tufte-css/">tufte.css</a>, open sourced and deployed on <a href="https://github.com/asdf1899/stuff/">Github</a></span>
    </footer>
  </div>
</template>

<script>
  import Header from '../components/Header.vue'
  import ArticlesList from '../components/ArticlesList.vue'
  import NavBar from '../components/NavBar.vue'
  import axios from 'axios';

  export default {
    name: 'Articles',
    components: {
      'articles-list': ArticlesList,
      'nav-bar': NavBar,
      'header-info': Header
    },
    data: function(){
      return {
        articles: [],
        refresh: 0,
        errored: false
      }
    },
    mounted(){
      let articlesUrl = 'https://anasaraid.me/stuff-data/articles.json';
      axios
        .get(articlesUrl)
        .then(response => {
            let articlesJSON = response.data;
            let articleList = articlesJSON.filter(a=>a.tag=="articles"); 
            this.articles = articleList;
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
<template>
    <div>
        <nav-bar title="Stuff"></nav-bar>
        <div style="text-align:center">
            <p><i>Just some random articles written by me...</i></p>
        </div>
        <articles-list :articles="jsonArticles"></articles-list>
        <footer class="footer">
            Built using <a href="https://vuejs.org/">Vue.js</a> and <a href="https://edwardtufte.github.io/tufte-css/">tufte.css</a> and obviously hosted on <a href="https://pages.github.com/">github</a>
      </footer>
    </div>
 </template>

<script>
    import NavBar from './NavBar.vue'
    import ArticlesList from './ArticlesList.vue'
    import jsonArticles from '@/statics/articles.json'

    export default {
        name: 'Homepage',
        components: {
        'nav-bar': NavBar,
        'articles-list': ArticlesList
        },
        data: function(){
            return {
                jsonArticles
            }
        }
    }
</script>
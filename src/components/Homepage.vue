<template>
    <div>
        <nav-bar class="nav-bar" url="/anasaraid"></nav-bar>
        <header-info title="Stuff"></header-info>
        <div style="text-align:center">
            <p>Just some random articles written by me in order to stay <i>"su co le rece"<sup>1</sup></i> with latest tech stacks.</p>
        </div>
        <articles-list :articles="jsonArticles.slice().reverse()"></articles-list>
        <footer class="footer">
            <i><sup>1</sup> stay up to date in Trentino dialect</i>
            <br>
            <span>Built using <a href="https://vuejs.org/">Vue.js</a>, <a href="https://edwardtufte.github.io/tufte-css/">tufte.css</a>, open sourced and deployed on <a href="https://github.com/asdf1899/stuff/">Github</a></span>
        </footer>
    </div>
 </template>

<script>
    import Header from './Header.vue'
    import ArticlesList from './ArticlesList.vue'
    import NavBar from './NavBar.vue'
    import jsonArticles from '@/statics/articles.json'

    export default {
        name: 'Homepage',
        components: {
            'articles-list': ArticlesList,
            'nav-bar': NavBar,
            'header-info': Header
        },
        data: function(){
            return {
                jsonArticles
            }
        }
    }
</script>
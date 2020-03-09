<template>
    <div>
        <header-info title="Stuff"></header-info>
        <div style="text-align:center">
            <p><i>Just some random articles written by me...</i></p>
        </div>
        <articles-list :articles="jsonArticles"></articles-list>
        <footer class="footer">
            Built using <a href="https://vuejs.org/">Vue.js</a> and <a href="https://edwardtufte.github.io/tufte-css/">tufte.css</a>
        </footer>
    </div>
 </template>

<script>
    import Header from './Header.vue'
    import ArticlesList from './ArticlesList.vue'
    import jsonArticles from '@/statics/articles.json'

    export default {
        name: 'Homepage',
        components: {
            'articles-list': ArticlesList,
            'header-info': Header
        },
        data: function(){
            return {
                jsonArticles
            }
        }
    }
</script>
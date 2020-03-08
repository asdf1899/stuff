<template>
    <div>
        <nav-bar url="http://anasaraid.me" title="Stuff"></nav-bar>
        <div style="text-align:center">
            <p><i>Just some random articles written by me...</i></p>
        </div>
        <articles-list :articles="jsonArticles"></articles-list>
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
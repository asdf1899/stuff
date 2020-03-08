<template>
    <div>
        <NavBar url="http://anasaraid.me" title="Stuff"></NavBar>
        <div style="text-align:center">
            <p><i>Just some random articles written by me...</i></p>
        </div>
        <ArticlesList :articles="jsonArticles"></ArticlesList>
    </div>
 </template>

<script>
    import NavBar from './NavBar.vue'
    import ArticlesList from './ArticlesList.vue'
    import jsonArticles from '@/statics/articles.json'

    export default {
        name: 'Homepage',
        components: {
        NavBar,
        ArticlesList
        },
        data: function(){
            console.log(jsonArticles);
            return {
                jsonArticles
            }
        }
        /*data: function(){
            return {
                items: [
                    {id:2, title: 'Random'},
                    {id:1, title: 'First'}
                ]
            }
        }*/
    }
</script>
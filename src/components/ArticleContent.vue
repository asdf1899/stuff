<template>
    <div>
        <nav-bar url="/" :title="this.jsonArticle.title" :date="this.jsonArticle.date"></nav-bar>
        <vue-markdown>{{this.markdownFile}}</vue-markdown>
    </div>
</template>

<script>
    import NavBar from './NavBar.vue'
    import VueMarkdown from 'vue-markdown'
    import jsonArticles from '@/statics/articles.json'
    //import file from '@/statics/markdowns/1.md'

    export default {
        name: 'ArticleContent',
        components: {
            'nav-bar': NavBar,
            'vue-markdown': VueMarkdown
        },
        props: {
            id: {
                type: String
            }
        },
        data: function(){
            var body = document.body,
                html = document.documentElement;

            var height = Math.max( body.scrollHeight, body.offsetHeight, 
                            html.clientHeight, html.scrollHeight, html.offsetHeight );
            height = height /2;
            let jsonArticle = jsonArticles.find(x => x.id === this.id);
            
            const markdownFile = require('../statics/markdowns/'+jsonArticle.src).default;
            return ({ markdownFile, jsonArticle, height });
        }
    }
</script>
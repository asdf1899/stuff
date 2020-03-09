<template>
    <div>
        <nav-bar url="/" title="Article"></nav-bar>
        <vue-markdown>{{markdownFile}}</vue-markdown>
        
    </div>
</template>

<script>
    import NavBar from './NavBar.vue'
    import VueMarkdown from 'vue-markdown'
    import file from '@/statics/markdowns/1.md'

    console.log(file);
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
            const markdownFile = require('../statics/markdowns/'+this.id+'.md').default;
            return ({ markdownFile });
        }
    }
</script>
<template>
    <div>
        <nav-bar url="/" title="Article"></nav-bar>
        <p>{{$route.params.id}}</p>
    </div>
</template>

<script>
    import NavBar from './NavBar.vue'

    export default {
        name: 'ArticleContent',
        components: {
            'nav-bar': NavBar
        }
    }
</script>
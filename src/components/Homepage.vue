<template>
    <div>
        <NavBar url="http://anasaraid.me" title="Stuff"></NavBar>
        <ArticlesList :articles="items"></ArticlesList>
    </div>
 </template>

<script>
  import NavBar from './NavBar.vue'
  import ArticlesList from './ArticlesList.vue'

  export default {
    name: 'Homepage',
    components: {
      NavBar,
      ArticlesList
    },
    data: function(){
        return {
            items: [
                {title: 'Random'},
                {title: 'First'}
            ]
        }
    }
  }
</script>
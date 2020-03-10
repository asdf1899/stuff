<template>
    <div style="max-height:500px;overflow:auto">
        <ul style="text-align:center;display:table;margin: 0 auto;margin-top:90px">
            <li v-for="article in articles" :key="article.title" style="list-style: upper-roman;text-align:left">
                <router-link :to="$route.path+article.id">{{article.title}}</router-link>
            </li>
        </ul>
    </div> 
</template>

<script>
   export default {
        name: 'NavBar',
        props: {
            articles: {
                type: Array
            }
        }
    }
</script>
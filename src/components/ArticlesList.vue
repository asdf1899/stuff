<template>
    <div>
        <ul style="text-align:center;display:table;margin: 0 auto;margin-top:90px">
            <li v-for="article in articles" :key="article.title" style="list-style: none;">
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
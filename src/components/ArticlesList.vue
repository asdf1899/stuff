<template>
    
    <ul style="text-align:center;display:table;margin: 0 auto;margin-top:90px">
        <li v-for="article in articles" :key="article.title">
            <a>{{ article.title }}</a> 
        </li>
    </ul>
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
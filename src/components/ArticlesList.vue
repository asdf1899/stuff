<template>
    <ul style="text-align:center">
        <li v-for="article in articles" :key="article.title">
            {{ article.title }} 
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
<template>
    <div>
        <router-link :to="url">back</router-link>
    </div>
</template>

<script>
    export default {
        name: 'NavBar',
        props: ['url']
    }
</script>
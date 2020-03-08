<template>
    <div>
        <div>
            <a v-bind:href="url">back</a>
        </div>
        <div style="text-align:center">
            <h1>{{ title }}</h1>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'NavBar',
        props: ['url', 'title']
    }
</script>
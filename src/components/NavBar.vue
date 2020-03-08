<template>
    <div>
        <div>
            <a v-bind:href="url">back</a>
        </div>
        <div style="text-align:center">
            <h2>Stuff</h2>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'NavBar',
        props: ['url']
    }
</script>
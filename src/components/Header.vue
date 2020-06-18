<template>
    <div style="text-align:center">
        <h1>{{ title }}</h1>
        <h4><i>{{ date }}</i> <span v-if="readingTime">- {{ readingTime }} min read</span></h4>
    </div>
</template>

<script>
    export default {
        name: 'Header',
        props: ['title', 'date', 'readingTime']
    }
</script>
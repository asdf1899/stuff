<template>
    <div>
        <nav-bar class="nav-bar" url="/anasaraid" text="about"></nav-bar>
        <header-info title="Stuff"></header-info>
        <div style="text-align:center">
            <p>Just some random articles written in order to stay <i>"su co le rece"<sup>1</sup></i> with latest technologies.</p>
        </div>
        <br>
        <div style="text-align:center">
          <router-link to="/articles" class="style-link" style="font-size: 1.4rem;">Articles</router-link>
          <br>
          <router-link to="/guides" class="style-link" style="font-size: 1.4rem;">Guides</router-link>
        </div>
        <footer class="footer">
            <i><sup>1</sup> stay up to date in Trentino dialect</i>
            <br>
            <span>Built using <a href="https://vuejs.org/">Vue.js</a>, <a href="https://edwardtufte.github.io/tufte-css/">tufte.css</a>, open sourced and deployed on <a href="https://github.com/asdf1899/stuff/">Github</a></span>
        </footer>
    </div>
 </template>

<script>
    import Header from '../components/Header.vue'
    import NavBar from '../components/NavBar.vue'

    export default {
        name: 'Homepage',
        components: {
          'nav-bar': NavBar,
          'header-info': Header
        }
    }
</script>
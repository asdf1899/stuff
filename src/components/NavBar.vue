<template>
  <div>
    <a v-if="this.isUrl" :href="backUrl">about</a>
    <router-link v-if="this.isUrl == false" :to="backUrl">back</router-link> |
    <a class="style-link" v-on:click="toggle()"> {{this.toggleText}} </a>
  </div>
</template>

<script>
    export default {
        name: 'NavBar',
        props: ['url'],
        data: function(){
          let isUrl = false;
          let backUrl = this.url;
          let toggleText = 'dark mode';
          //====================================================
          // eh oh intanto è cosi finchè non trovo una soluzione
          if (backUrl == "/anasaraid"){
            isUrl = true;
            backUrl = "https://anasaraid.me";
          }else{
            isUrl = false;
          }
          // =======================================
          let darkThemeLinkEl = document.querySelector("#dark-theme-style");
          if (darkThemeLinkEl){
            toggleText = 'light mode';
          }else{
            toggleText = 'dark mode';
          }
          return {
            backUrl,
            isUrl,
            toggleText
          };
        },
        methods: {
          toggle(){
            let darkThemeLinkEl = document.querySelector("#dark-theme-style");
            if (darkThemeLinkEl){
              this.setLight();
            }else{
              this.setDark();
            }
          },
          setDark(){
            let darkThemeLinkEl = document.createElement("link");
            darkThemeLinkEl.setAttribute("rel", "stylesheet");
            darkThemeLinkEl.setAttribute("href", "/stuff/css/darktheme.css");
            darkThemeLinkEl.setAttribute("id", "dark-theme-style");

            let docHead = document.querySelector("head");
            docHead.append(darkThemeLinkEl);
            document.querySelector("#theme-color").content = '#212121';
            this.toggleText = 'light mode';
          },
          setLight(){
            let darkThemeLinkEl = document.querySelector("#dark-theme-style");
            let parentNode = darkThemeLinkEl.parentNode;
            parentNode.removeChild(darkThemeLinkEl);
            document.querySelector("#theme-color").content = '#fffff8';
            this.toggleText = 'dark mode';
          }
        }
    }
</script>
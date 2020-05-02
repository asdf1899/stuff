<template>
  <div>
    <a v-if="this.isUrl" :href="url">back</a>
    <router-link v-if="this.isUrl == false" :to="url">back</router-link> |
    <a class="style-link" v-on:click="toggle()">toggle dark mode</a>
  </div>
</template>

<script>
    export default {
        name: 'NavBar',
        props: ['url'],
        data: function(){
          this.isUrl = false;
          // eh oh intanto è cosi finchè non trovo una soluzione
          if (this.url == "/anasaraid"){
            this.isUrl = true;
            this.url = "https://anasaraid.me";
          }else{
            this.isUrl = false;
          }
          return [this.isUrl];
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
              darkThemeLinkEl.setAttribute("href", "/css/darktheme.css");
              darkThemeLinkEl.setAttribute("id", "dark-theme-style");

              let docHead = document.querySelector("head");
              docHead.append(darkThemeLinkEl);
            },
            setLight(){
              let darkThemeLinkEl = document.querySelector("#dark-theme-style");
              let parentNode = darkThemeLinkEl.parentNode;
              parentNode.removeChild(darkThemeLinkEl);
            }
        }
    }
</script>
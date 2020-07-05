<template>
  <div>
    <a v-if="this.isUrl" :href="backUrl">about</a>
    <router-link v-if="this.isUrl == false" :to="backUrl">{{this.NavbarText}}</router-link> |
    <a class="style-link" v-on:click="toggle()"> {{this.toggleText}} </a>
  </div>
</template>

<script>
  export default {
    name: 'NavBar',
    props: ['url', 'text'],
    data: function(){
      let NavbarText = this.text; 
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
      // codice commentato è obsoleto in quanto ho sostituito questo metodo con le sessioni
      /*let darkThemeLinkEl = document.querySelector("#dark-theme-style");
      if (darkThemeLinkEl){
        toggleText = 'light mode';
      }else{
        toggleText = 'dark mode';
      }*/
      return {
        backUrl,
        isUrl,
        NavbarText,
        toggleText
      };
    },
    created(){
      if (this.$session.exists()){
        // se la chiave darkTheme esiste allora controllo se è impostata a true o a false
        if (this.$session.has('darkTheme')){
          if(this.$session.get('darkTheme')){
            this.setDark();
          }else{
            this.setLight();
          } 
        }else{
          const date = new Date();
          const now = date.getHours();
          // se le ore sono tra le 20 e 7, allora imposta la dark mode
          if (now > 20 && now < 7){
            this.$session.set('darkTheme', true)
            this.setDark();
          }else{
            this.$session.set('darkTheme', false)
            this.setLight();
          }
        }
      }else{
        this.$session.start()
        const date = new Date();
        const now = date.getHours();
        if (now > 20 || now < 7){
          this.$session.set('darkTheme', true)
          this.setDark();
        }else{
          this.$session.set('darkTheme', false)
          this.setLight();
        }
      }
    },
    methods: {
      toggle(){
        if (this.$session.exists()){
        if (this.$session.has('darkTheme')){
          // TOGGLE
          if(this.$session.get('darkTheme')){
            this.setLight();
            this.$session.set('darkTheme', false)
          }else{
            this.setDark();
            this.$session.set('darkTheme', true)
          } 
        }else{
          const date = new Date();
          const now = date.getHours();
          if (now > 20 && now < 7){
            this.$session.set('darkTheme', true)
            this.setDark();
          }else{
            this.$session.set('darkTheme', false)
            this.setLight();
          }
        }
        }else{
          this.$session.start()
          const date = new Date();
          const now = date.getHours();
          if (now > 20 && now < 7){
            this.$session.set('darkTheme', true)
            this.setDark();
          }else{
            this.$session.set('darkTheme', false)
            this.setLight();
          }
        }
       // codice commentato è obsoleto in quanto ho sostituito questo metodo con le sessioni
        /*let darkThemeLinkEl = document.querySelector("#dark-theme-style");
        if (darkThemeLinkEl){
          this.setLight();
        }else{
          this.setDark();
        }*/
      },
      setDark(){
        // Se ci sono più link allora cancello l'ultimo
        // possibile bug futuro
        let darkThemeLinkEl;
        if (document.querySelectorAll("#dark-theme-style").length > 1) {
          darkThemeLinkEl = document.querySelector("#dark-theme-style");
          let parentNode = darkThemeLinkEl.parentNode;
          parentNode.removeChild(darkThemeLinkEl);
          document.querySelector("#theme-color").content = '#212121';
          this.toggleText = 'light mode';
          return;
        }
        darkThemeLinkEl = document.createElement("link");
        darkThemeLinkEl.setAttribute("rel", "stylesheet");
        darkThemeLinkEl.setAttribute("href", "/stuff/css/darktheme.css");
        darkThemeLinkEl.setAttribute("id", "dark-theme-style");

        let docHead = document.querySelector("head");
        docHead.append(darkThemeLinkEl);
        document.querySelector("#theme-color").content = '#212121';
        this.toggleText = 'light mode';
      },
      setLight(){
       // il codice commentato è obsoleto in quanto ho sostituito questo metodo con le sessioni
        /*let darkThemeLinkEl = document.querySelector("#dark-theme-style");
        let parentNode = darkThemeLinkEl.parentNode;
        parentNode.removeChild(darkThemeLinkEl);*/
        
        document.querySelectorAll("#dark-theme-style").forEach(e => e.parentNode.removeChild(e));
        document.querySelector("#theme-color").content = '#fffff8';
        this.toggleText = 'dark mode';
      }
    }
  }
</script>
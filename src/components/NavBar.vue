<template>
    <div>
        <a v-if="this.isUrl" :href="url">back</a>
        <router-link v-if="this.isUrl == false" :to="url">back</router-link>
        <button v-on:click="toggle()">toggle dark mode</button>
    </div>
</template>

<script>
    export default {
        name: 'NavBar',
        props: ['url'],
        data: function(){
            this.darkMode = false;
            this.isUrl = false;
            
            // eh oh intanto è cosi finchè non trovo una soluzione
            if (this.url == "/anasaraid"){
                this.isUrl = true;
                this.url = "https://anasaraid.me";
            }else{
                this.isUrl = false;
            }
            console.log(this.isUrl);
        },
        methods: {
            toggle(){
                if (this.darkMode){
                    this.setLight();
                }else{
                    this.setDark();
                }
            },
            setDark(){
                this.darkMode = true;
                console.log("dark");
                document.querySelector('body').classList.add('style-dark-mode')
            },
            setLight(){
                this.darkMode = false;
                console.log("light");
                document.querySelector('body').classList.remove('style-dark-mode')
            }
        }
    }
</script>
<template>
    <div>
        <a v-if="this.isUrl" :href="url">back</a>
        <router-link v-else :to="url">back</router-link>
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
            toogle(){
                if (this.darkMode){
                    this.setDark();
                }else{
                    this.setLight();
                }
            },
            setDark(){
                console.log("dark");
            },
            setLight(){
                console.log("light");
            }
        }
    }
</script>
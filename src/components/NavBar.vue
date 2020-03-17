<template>
    <div>
        <a v-if="this.isUrl == true" :href="this.url"></a>
        <router-link v-else :to="url">back</router-link>
    </div>
</template>

<script>
    var validUrl = require('valid-url');
    export default {
        name: 'NavBar',
        props: ['url'],
        data: function(){
            this.darkMode = false;
            this.isUrl = false;
            
            console.log(validUrl.isWebUri("https://anasaraid.me"));
            
            if (validUrl.isUri(this.url)){
                this.isUrl = true;
            }else{
                this.isUrl = false;
            }
            return this.isUrl;
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
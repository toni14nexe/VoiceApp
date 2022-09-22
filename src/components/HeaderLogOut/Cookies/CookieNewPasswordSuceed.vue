<template>
</template>

<script>
    import VueCookies from 'vue-cookies'

    export default {
        mounted(){
            VueCookies.set('NewPasswordSuceed' , 'true', "1min");
            window.location = "./"
        }
    }
</script>

<style>
</style>
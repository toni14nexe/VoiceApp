<template>
    <div class="text-center">
        <h3 class="notification">Error...</h3>
        <h3 class="notification">User with that email already exist!</h3>
        <button @click="changeToLogIn" class="my-btn btn btn-outline-light btn-lg px-5" style="margin-top: 2rem;" type="submit">Try to LogIn</button>
    </div>
</template>

<script>
    export default {
        methods:{
            changeToLogIn(){
                this.$emit("changeToLogIn");
            }
        }
    }
</script>

<style>

</style>
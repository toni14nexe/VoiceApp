<template>
    <div class="text-center">
        <h3 class="notification">Your password has been reset...</h3>
        <h3 class="notification">Verification email has been sent to you!</h3>
        <h3 class="notification">Check spam folder!</h3>
        <button @click="changeToLogIn" class="my-btn btn btn-outline-light btn-lg px-5" style="margin-top: 2rem;" type="submit">LogIn</button>
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
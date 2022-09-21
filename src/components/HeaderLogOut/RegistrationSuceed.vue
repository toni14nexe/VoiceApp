<template>
    <div class="text-center">
        <h3 class="notification">Registration suceed...</h3>
        <h3 class="notification">Verification email has been sent to you!</h3>
        <h3 class="notification">Check spam folder!</h3>
        <button @click="changeToHome" class="my-btn btn btn-outline-light btn-lg px-5" style="margin-top: 2rem;" type="submit">Home</button>
    </div>
</template>

<script>
    export default {
        methods:{
            changeToHome(){
                this.$emit("changeToHome");
            }
        }
    }
</script>

<style>

</style>
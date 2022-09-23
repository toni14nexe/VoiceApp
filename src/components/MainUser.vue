<template>
  <div>
    <h1>MainUser</h1>
  </div>
</template>

<script>
    import mainUser from '../assets/mainUser.js'

    export default {
        data(){
            return{
                email: null,
                firstname: null,
                lastname: null
            }
        },
        mounted(){
            mainUser.checkTokenExpiration()
            mainUser.refreshTokenExpiration()

            this.email = mainUser.getEmail()
            this.firstname = mainUser.getFirstname()
            this.lastname = mainUser.getLastname()

            console.log(mainUser.getFirstname())
        }
    }
</script>

<style>

</style>
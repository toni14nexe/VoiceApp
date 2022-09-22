<template>
  <div class="text-center" v-if="currentComponent == null">
    <h1 class="notification">Not found</h1>
    <a href="./"><button class="my-btn btn btn-outline-light btn-lg px-5" style="margin-top: 2rem;" type="submit">Home</button></a>
  </div>

  <component :is="currentComponent"></component>
</template>

<script>
  import NewPassword from './HeaderLogOut/NewPassword.vue'

  export default {
    data(){
      return{
        currentComponent: null
      }
    },
    components:{
      NewPassword
    },
    mounted(){
      if($cookies.get("NewPassword")){
        $cookies.remove('NewPassword')
        this.currentComponent = 'NewPassword'
      }
    }
  }
</script>

<style>

</style>
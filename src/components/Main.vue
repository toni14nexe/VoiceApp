<template>
    <div>
      <nav class="navbar navbar-expand-lg bg-dark d-flex justify-content-between">
        <div class="title-div">
          <img class="favicon" src="../../public/favicon.ico" alt="">
          <a class="navbar-brand title" @click="currentComponent = 'LogIn'" href="#">VoiceApp</a>
        </div>

        <div>
          <button class="navbar-toggler" @click="currentComponent = 'LogIn'" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <i class="fa-solid fa-bars text-white"></i>
          </button>
        
          <form class="form-inline">
            <div class="collapse navbar-collapse my-2 my-lg-0" id="navbarSupportedContent">

              <ul class="navbar-nav mr-auto">
                <li class="nav-item mr-sm-2">
                  <a class="a" @click="currentComponent = 'LogIn'" :class="{active: currentComponent == 'LogIn'}" href="#">LogIn</a>
                </li>
                <div class="vl"></div>
                <li class="nav-item mr-sm-2">
                  <a class="a" @click="currentComponent = 'SignUp'" :class="{active: currentComponent == 'SignUp'}" href="#">SignUp</a>
                </li>
              </ul>
            </div>
          </form>
        </div>
      </nav>

      <div v-if="currentComponent == 'LogIn'" >
        <log-in @signUp="currentComponent = 'SignUp'" @forgotPassword="currentComponent = 'ForgotPassword'"  />
      </div>
  
      <div v-if="currentComponent == 'SignUp'" >
        <sign-up @logIn="currentComponent = 'LogIn'" />
      </div>
  
      <div v-if="currentComponent == 'ForgotPassword'" >
        <forgot-password/>
      </div>
    </div>

  </template>
  
  <script>
    import LogIn from './HeaderLogOut/LogIn.vue'
    import SignUp from './HeaderLogOut/SignUp.vue'
    import ForgotPassword from './HeaderLogOut/ForgotPassword.vue'
  
    export default {
      components:{
        "log-in": LogIn,
        "sign-up": SignUp,
        "forgot-password": ForgotPassword,
      },
      data(){
        return{
          currentComponent: 'LogIn',
        }
      }
    }
  </script>
  
  <style>
  </style>
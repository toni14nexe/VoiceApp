<template>
  <div>
    <nav class="navbar navbar-expand-lg bg-dark d-flex justify-content-between">
        <div class="title-div">
          <img class="favicon" src="../../public/favicon.ico" alt="">
          <a class="navbar-brand title" @click="currentComponent = 'FirstPage'" href="#">VoiceApp</a>
        </div>

        <div>
          <button class="navbar-toggler" @click="currentComponent = 'LogIn'" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <i class="fa-solid fa-list-ul fa-bars text-white"></i>
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

    <KeepAlive>
      <component :is="currentComponent" @forgotPassword="currentComponent = 'ForgotPassword'" @signUp="currentComponent = 'SignUp'" @changeToSignUp="currentComponent = 'SignUp'"
        @logIn="currentComponent = 'LogIn'" @changeToHome="currentComponent = 'FirstPage'" @changeToLogIn="currentComponent = 'LogIn'"
      ></component>
    </KeepAlive>

    </div>
  </template>
  
  <script>
    import LogIn from './HeaderLogOut/LogIn.vue'
    import SignUp from './HeaderLogOut/SignUp.vue'
    import ForgotPassword from './HeaderLogOut/ForgotPassword.vue'
    import FirstPage from './HeaderLogOut/FirstPage.vue'
    import RegisterError from './HeaderLogOut/RegisterError.vue'
    import RegistrationSuceed from './HeaderLogOut/RegistrationSuceed.vue'
    import UserExist from './HeaderLogOut/UserExist.vue'
    import Verified from './HeaderLogOut/Verified.vue'
    import ResetSuceed from './HeaderLogOut/ResetSuceed.vue'
    import WrongEmail from './HeaderLogOut/WrongEmail.vue'
    import NewPasswordSuceed from './HeaderLogOut/NewPasswordSuceed.vue'
    import EmailSent from './HeaderLogOut/EmailSent.vue'
  
    export default {
      components:{
        LogIn,
        SignUp,
        ForgotPassword,
        FirstPage,
        RegisterError,
        RegistrationSuceed,
        UserExist,
        Verified,
        ResetSuceed,
        WrongEmail,
        NewPasswordSuceed,
        EmailSent
      },
      data(){
        return{
          currentComponent: 'FirstPage',
          cookie: null
        }
      },
      mounted(){
        if($cookies.get("RegistrationSuceed")){
          $cookies.remove('RegistrationSuceed')
          this.currentComponent = 'RegistrationSuceed'
        }
        if($cookies.get("RegisterError")){
          $cookies.remove('RegisterError')
          this.currentComponent = 'RegisterError'
        }
        if($cookies.get("UserExist")){
          $cookies.remove('UserExist')
          this.currentComponent = 'UserExist'
        }
        if($cookies.get("Verified")){
          $cookies.remove('Verified')
          this.currentComponent = 'Verified'
        }
        if($cookies.get("ResetSuceed")){
          $cookies.remove('ResetSuceed')
          this.currentComponent = 'ResetSuceed'
        }
        if($cookies.get("WrongEmail")){
          $cookies.remove('WrongEmail')
          this.currentComponent = 'WrongEmail'
        }
        if($cookies.get("NewPasswordSuceed")){
          $cookies.remove('NewPasswordSuceed')
          this.currentComponent = 'NewPasswordSuceed'
        }
        if($cookies.get("EmailSent")){
          $cookies.remove('EmailSent')
          this.currentComponent = 'EmailSent'
        }
      }
    }
  </script>
  
  <style>
  </style>
<template>
  <div>
    <nav class="navbar navbar-expand-lg bg-dark d-flex justify-content-between">
        <a @click="currentComponent = 'FirstPage'" href="#">
          <div class="title-div">
              <img class="favicon" src="../../public/favicon.ico" alt="">
              <a class="navbar-brand title" href="#">The Purple Hat</a>
          </div>
        </a>

        <div>
          <button class="navbar-toggler" @click="currentComponent = 'LogIn'" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <i class="fa-solid fa-list-ul fa-bars text-white"></i>
          </button>
            
          <form class="form-inline">
            <div class="collapse navbar-collapse my-2 my-lg-0" id="navbarSupportedContent">
              <ul class="navbar-nav mr-auto">
                <li class="nav-item mr-sm-2">
                  <a class="a" @click="currentComponent = 'PriceList'" :class="{active: currentComponent == 'PriceList'}" href="#">Price List</a>
                </li>
                <div class="vl"></div>
                <li class="nav-item mr-sm-2">
                <a class="a" @click="currentComponent = 'LogIn'" :class="{active: currentComponent == 'LogIn'}" href="#">LogIn</a>
                </li>
              </ul>
            </div>
          </form>
        </div>
      </nav>

    <KeepAlive>
      <component :is="currentComponent" @forgotPassword="currentComponent = 'ForgotPassword'" @priceList="currentComponent = 'PriceList'"
        @logIn="currentComponent = 'LogIn'" @changeToHome="currentComponent = 'FirstPage'" @changeToLogIn="currentComponent = 'LogIn'" 
      ></component>
    </KeepAlive>

    </div>
  </template>
  
  <script>
    import LogIn from './HeaderLogOut/LogIn.vue'
    import PriceList from './HeaderLogOut/PriceList.vue'
    import ForgotPassword from './HeaderLogOut/ForgotPassword.vue'
    import FirstPage from './HeaderLogOut/FirstPage.vue'
    import Error from './HeaderLogOut/Error.vue'
    import RegistrationSuceed from './admin/RegistrationSuceed.vue'
    import UserExist from './HeaderLogOut/UserExist.vue'
    import Verified from './HeaderLogOut/Verified.vue'
    import ResetSuceed from './HeaderLogOut/ResetSuceed.vue'
    import WrongEmail from './HeaderLogOut/WrongEmail.vue'
    import NewPasswordSuceed from './HeaderLogOut/NewPasswordSuceed.vue'
    import EmailSent from './HeaderLogOut/EmailSent.vue'
    import NewPassword from './HeaderLogOut/NewPassword.vue'
    import SessionExpired from './HeaderLogOut/SessionExpired.vue'
    import sql from "../assets/sql"
  
    export default {
      components:{
        LogIn,
        PriceList,
        ForgotPassword,
        FirstPage,
        Error,
        RegistrationSuceed,
        UserExist,
        Verified,
        ResetSuceed,
        WrongEmail,
        NewPasswordSuceed,
        EmailSent,
        NewPassword,
        SessionExpired,
        PriceListJSON: null
      },
      data(){
        return{
          currentComponent: 'FirstPage',
          /*priceListValues: {
            mainType: {
              drink: {
                name: 'Drinks',
                hot: {
                  exist: false,
                  name: 'Hot drinks',
                  type: 'hot'
                },
                juice: {
                  exist: false,
                  name: 'Juices',
                  type: 'juice'
                },
                beer: {
                  exist: false,
                  name: 'Beers',
                  type: 'beer'
                },
                wine: {
                  exist: false,
                  name: 'Wines',
                  type: 'wine'
                },
                alcohol: {
                  exist: false,
                  name: 'Alcohol drinks',
                  type: 'alcohol'
                },
              },
              food: {
                name: 'Food',
                soup: {
                  exist: false,
                  name: 'Soups',
                  type: 'soup'
                },
                pizza: {
                  exist: false,
                  name: 'Pizza',
                  type: 'pizza'
                },
                grill: {
                  exist: false,
                  name: 'Grill',
                  type: 'grill'
                },
                dish: {
                  exist: false,
                  name: 'Side dish',
                  type: 'dish'
                }
                
                
                //here goes food types
              }
            }
          }*/
        }
      },
      mounted(){
        /*if(window.location.search.substring(0, 10) == '?JSONfile=' && this.PriceListJSON == null){
          this.PriceListJSON = JSON.parse(decodeURI(window.location.search.substring(10)))
        }
        this.getPriceList()*/

        if(window.location.search.substring(0,10) == '?JSONfile='){
          this.setEmptyURL()
        }
        if(window.location.search == '?registrationSuceed'){
          this.currentComponent = 'RegistrationSuceed'
          this.setEmptyURL()
        }
        if(window.location.search == '?error'){
          this.currentComponent = 'Error'
          this.setEmptyURL()
        }
        if(window.location.search == '?userExist'){
          this.currentComponent = 'UserExist'
          this.setEmptyURL()
        }
        if(window.location.search == '?verified'){
          this.currentComponent = 'Verified'
          this.setEmptyURL()
        }
        if(window.location.search == '?resetSuceed'){
          this.currentComponent = 'ResetSuceed'
          this.setEmptyURL()
        }
        if(window.location.search == '?wrongEmail'){
          this.currentComponent = 'WrongEmail'
          this.setEmptyURL()
        }
        if(window.location.search == '?newPasswordSuceed'){
          this.currentComponent = 'NewPasswordSuceed'
          this.setEmptyURL()
        }
        if(window.location.search == '?emailSent'){
          this.currentComponent = 'EmailSent'
          this.setEmptyURL()
        }
        if(window.location.search.substring(0,12) == '?newPassword'){
          this.currentComponent = 'NewPassword'
        }
        if(window.location.search == '?wrongLogIn'){
          this.currentComponent = 'LogIn'
        }
        if(window.location.search == '?sessionExpired'){
          this.currentComponent = 'SessionExpired'
        }

        //this.getPriceListValues()
      },
      methods:{
        setEmptyURL(){
          window.history.pushState({}, document.title, "/");
        },

       /* getPriceList(){
          if(this.PriceListJSON == null){
            window.location = sql.GetPriceList()
          }
        },*/

        /*getPriceListValues(){
          console.log(this.PriceListJSON)
          for(var i=0; i<this.PriceListJSON.length; i++){
            if(this.PriceListJSON[i].mainType == 'drink'){
              if(this.PriceListJSON[i].type == 'hot'){
                if(this.priceListValues.mainType.drink.hot.exist == false){
                  this.priceListValues.mainType.drink.hot.exist = true
                }
                continue
              }
              else if(this.PriceListJSON[i].type == 'juice'){
                if(this.priceListValues.mainType.drink.juice.exist == false){
                  this.priceListValues.mainType.drink.juice.exist = true
                }
                continue
              }
              else if(this.PriceListJSON[i].type == 'beer'){
                if(this.priceListValues.mainType.drink.beer.exist == false){
                  this.priceListValues.mainType.drink.beer.exist = true
                }
                continue
              }
              else if(this.PriceListJSON[i].type == 'wine'){
                if(this.priceListValues.mainType.drink.wine.exist == false){
                  this.priceListValues.mainType.drink.wine.exist = true
                }
                continue
              }
              else if(this.PriceListJSON[i].type == 'alcohol'){
                if(this.priceListValues.mainType.drink.alcohol.exist == false){
                  this.priceListValues.mainType.drink.alcohol.exist = true
                }
                continue
              }
            } else{
              if(this.PriceListJSON[i].type == 'soup'){
                if(this.priceListValues.mainType.food.soup.exist == false){
                  this.priceListValues.mainType.food.soup.exist = true
                }
                continue
              }
              else if(this.PriceListJSON[i].type == 'pizza'){
                if(this.priceListValues.mainType.food.pizza.exist == false){
                  this.priceListValues.mainType.food.pizza.exist = true
                }
                continue
              }
              else if(this.PriceListJSON[i].type == 'grill'){
                if(this.priceListValues.mainType.food.grill.exist == false){
                  this.priceListValues.mainType.food.grill.exist = true
                }
                continue
              }
              else if(this.PriceListJSON[i].type == 'dish'){
                if(this.priceListValues.mainType.food.dish.exist == false){
                  this.priceListValues.mainType.food.dish.exist = true
                }
                continue
              }
            }
          }
          console.log(this.priceListValues)
        }*/
      }
    }
  </script>
  
  <style>
  </style>
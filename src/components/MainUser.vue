<template>
  <div>
    <nav class="navbar navbar-expand-lg bg-dark d-flex justify-content-between">
        <div class="title-div">
          <img class="favicon" src="../../public/favicon.ico" alt="">
          <a class="navbar-brand title" href="./mainUser">VoiceApp</a>
        </div>

        <div>
          <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <i class="fa-solid fa-list-ul fa-bars text-white"></i>
          </button>
            
          <form class="form-inline">
            <div class="collapse navbar-collapse my-2 my-lg-0" id="navbarSupportedContent">
                <div class="input-group" style="margin-right: 20px">
                <div class="form-outline">
                    <input v-model="searchLive" type="search" id="form1" class="my-input form-control" placeholder="Search..."/> 
                </div>
                <button @click="search" type="button" class="btn btn-primary gradient-color" style="border-color: white">
                    <i class="fas fa-search"></i>
                </button>
            </div>
              <ul class="navbar-nav mr-auto">
                <li class="nav-item mr-sm-2">
                  <a class="a" @click="currentComponent = 'accountSettings'" :class="{active: currentComponent == 'accountSettings'}" href="#">{{ firstname + ' ' + lastname }}</a>
                </li>
                <div class="vl"></div>
                  <li class="nav-item mr-sm-2">
                    <a class="a" href="#">LogOut</a>
                  </li>
              </ul>
            </div>
          </form>
        </div>
      </nav>

      <KeepAlive>
        <component :is="currentComponent" :searchText='searchText'
        ></component>
      </KeepAlive>
  </div>
</template>

<script>
    import mainUser from '../assets/mainUser.js'
    import sql from '../assets/sql'
    import VueCookies from 'vue-cookies'
    import Search from './LoggedIn/Search.vue'
    import Messages from './LoggedIn/Messages.vue'
    import EmptySearch from './LoggedIn/EmptySearch.vue'

    export default {

        components:{
            Search,
            Messages,
            EmptySearch
        },
        data(){
            return{
                currentComponent: 'Messages',
                email: null,
                firstname: null,
                lastname: null,
                searchText: null,
                searchLive: null
            }
        },
        mounted(){
            if(!VueCookies.get('email')) mainUser.setCookies()

            this.email = VueCookies.get('email')
            this.firstname = VueCookies.get('firstname')
            this.lastname = VueCookies.get('lastname')

            if(window.location.search.indexOf('?link=1')){
                this.searchText = mainUser.getSearch()
                mainUser.getSearchUsers()
                this.currentComponent = 'Search'
            }

            if(window.location.search.substring(window.location.search.length-11, window.location.search.length) == '?empty=true')
                this.currentComponent = 'EmptySearch' 

            //window.history.pushState({}, document.title, "/");
        },
        methods:{
            search(){
                this.searchText = this.searchLive
                if(this.searchText)
                    window.location = sql.Search() + "?search=" + this.searchText
                else
                    this.currentComponent = 'Messages'
            }
        }
    }
</script>

<style scoped>
</style>
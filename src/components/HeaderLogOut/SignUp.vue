<template>
    <div class="main">
        <section class="vh-100 gradient-custom">
        <div class="container">
            <div class="row d-flex justify-content-center align-items-center h-100">
            <div class="col-12 col-md-8 col-lg-6 col-xl-5">
                <div class="card bg-dark text-white">
                <div class="card-body p-5 text-center">

                    <div class="pb-5">

                    <h2 class="fw-bold mb-2 text-uppercase">Sign up</h2>
                    <p class="text-white-50 mb-5">Please enter your information!</p>

                    <div class="form-outline mb-4">
                        <p class="error-message" v-if="firstnameMessage">{{firstnameMessage}}</p>
                        <input type="text" v-model="firstname" id="firstname" class="my-input form-control form-control-lg" placeholder="Firstname" />
                        <label class="form-label" for="firstname">Firstname</label>
                    </div>

                    <div class="form-outline mb-4">
                        <p class="error-message" v-if="lastnameMessage">{{lastnameMessage}}</p>
                        <input type="text" v-model="lastname" id="lastname" class="my-input form-control form-control-lg" placeholder="Lastname" />
                        <label class="form-label" for="lastname">Lastname</label>
                    </div>

                    <div class="form-outline mb-4">
                        <p class="error-message" v-if="emailMessage">{{emailMessage}}</p>
                        <input type="email" v-model="email" id="typeEmailX" class="my-input form-control form-control-lg" placeholder="Email" />
                        <label class="form-label" for="typeEmailX">Email</label>
                    </div>

                    <div class="form-outline mb-4">
                        <p class="error-message" v-if="passwordMessage">{{passwordMessage}}</p>
                        <input type="password" v-model="password" id="typePasswordX" class="my-input form-control form-control-lg" placeholder="Password" />
                        <label class="form-label" for="typePasswordX">Password</label>
                    </div>

                    <div class="form-outline mb-4">
                        <p class="error-message" v-if="passwordConfirmMessage">{{passwordConfirmMessage}}</p>
                        <input type="password" v-model="passwordConfirm" id="typePasswordXX" class="my-input form-control form-control-lg" placeholder="Password" />
                        <label class="form-label" for="typePasswordXX">Confirm password</label>
                    </div>

                    <button class="my-btn btn btn-outline-light btn-lg px-5" type="submit" @click="SignUp">SignUp</button>

                    </div>

                    <div>
                    <p class="mb-0">Have an account? <a href="#" @click="switchToLogIn" class="link">Log In</a></p>
                    </div>

                </div>
                </div>
            </div>
            </div>
        </div>
        </section>
    </div>
</template>

<script>
    import checkInputs from '../../assets/checkInputs.js'
    import MD5 from "crypto-js/md5";

    export default {
        data(){
            return{
                firstname: null,
                lastname: null,
                email: null,
                password: null,
                passwordMD5: null,
                passwordConfirm: null,
                firstnameMessage: null,
                lastnameMessage: null,
                emailMessage: null,
                passwordMessage: null,
                passwordConfirmMessage: null,
                verificationLink: null
            }
        },
        methods:{
            switchToLogIn(){
                this.$emit("logIn");
            },

            SignUp(){
                this.firstnameMessage = checkInputs.checkFirstname(this.firstname)
                this.lastnameMessage = checkInputs.checkLastname(this.lastname)
                this.emailMessage = checkInputs.checkEmail(this.email)
                this.passwordMessage = checkInputs.checkPassword(this.password)
                this.passwordConfirmMessage = checkInputs.checkPasswordConfirm(this.password, this.passwordConfirm)
                const d = new Date();
                let time = d.getTime();
                this.verificationLink = time + this.email;
                this.passwordMD5 = MD5(this.password).toString()
                
                if(this.firstnameMessage == null && this.lastnameMessage == null && this.emailMessage == null && this.passwordMessage == null && this.passwordConfirmMessage == null)
                    window.location = "https://toni14nexe.000webhostapp.com/VoiceApp/addUser.php?firstname=" + this.firstname + "&lastname=" + this.lastname 
                        + "&email=" + this.email + "&password=" + this.passwordMD5 + "&verificationLink=" + this.verificationLink;
            }
        }
    }
</script>

<style>

</style>
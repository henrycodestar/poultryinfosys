<template>
    <div>
        <form class="form-horizontal new-lg-form" id="loginform" v-on:submit.prevent="authenticate">
            <div class="form-group  m-t-20">
                <div class="col-xs-12">
                    <label for="username">Username</label>
                    <input id="username" v-model="authCredentials.username" class="form-control" type="text" placeholder="Username" required>
                </div>
            </div>
            <div class="form-group">
                <div class="col-xs-12">
                    <label for="password">Password</label>
                    <input id="password" v-model="authCredentials.password" class="form-control" type="password" placeholder="Password" required>
                </div>
            </div>
            <div class="form-group text-center m-t-20">
                <div class="col-xs-12">
                    <button class="btn btn-info btn-lg btn-block btn-rounded text-uppercase waves-effect waves-light" type="submit">Log In <font-awesome-icon icon="lock" class="ml-1"/></button>
                    <p v-if="isLoading" class="my-4 text-center">Authenticating ...</p>
                    <p v-if="authResponse.isAuthenticated" class="text-green my-4 text-center"><span class="font-bold">Login Successful!</span><br>Redirecting to Home...</p>
                    <p v-if="authResponse.hasFailedAuthentication" class="text-red my-4 text-center">
                        Authentication Failed!<br>Check Auth Credentials
                    </p>
                </div>
            </div>
        </form>
    </div>
</template>

<script>
    import  axios from 'axios'

    export default {
        name: 'LoginForm',
        methods: {
            authenticate : function ()
            {
                this.isLoading = true;
                this.authResponse.isAuthenticated = false;
                this.authResponse.hasFailedAuthentication = false;


                let requestConfig = this.prepareAuthRequestData();
                var authCredentialsEncoded = btoa(`${requestConfig.auth.username}:${requestConfig.auth.password}`);

                let dhisAPIEndpoint = `${this.APIHosts.dhis}/${this.BASE_URL}`;

                axios.get(dhisAPIEndpoint, requestConfig)
                    .then((response)=>{
                        this.isLoading = false;
                        this.authResponse.isAuthenticated = true;

                        sessionStorage.setItem('basicAuthToken', authCredentialsEncoded);
                        sessionStorage.setItem('user', JSON.stringify(response.data));

                        setTimeout(()=>{ this.$router.push('/')},2000);
                    })
                    .catch(()=>{
                        this.isLoading = false;
                        this.authResponse.hasFailedAuthentication = true;

                        this.authCredentials.password = "";
                    })

            },

            prepareAuthRequestData : function()
            {
                return {
                    auth : {
                        username: this.authCredentials.username,
                        password: this.authCredentials.password
                    },
                }
            }
        },
        data: () => {
            return {
                BASE_URL : 'me.json',

                isLoading : false,

                authCredentials: {
                    username: "",
                    password: ""
                },

                authResponse : {
                    isAuthenticated: false,
                    hasFailedAuthentication : false
                }
            }
        }
    }
</script>

<template>
    <div>
        <section id="wrapper" class="new-login-register">
            <div class="lg-info-panel" style="background-image: url('/plugins/images/login.jpg') !important;">
                <div class="inner-panel">
                    <a href="javascript:void(0)" class="p-20 di"><img src="/plugins/images/admin-logo.png"></a>
                    <div class="lg-content">
                        <h2>POULTRY INFORMATION SYSTEM</h2>
                    </div>
                </div>
            </div>

            <div class="new-login-box">
                <div class="white-box">
                    <h3 class="box-title m-b-0">Sign In</h3>
                    <small>Enter your details below</small>

                    <LoginForm></LoginForm>
                </div>
            </div>
        </section>
    </div>
</template>

<script>

    import LoginForm from "../components/Authentication/LoginForm";
    export default {
        name: 'LoginPage',

        components : {
            LoginForm

        }
    }
</script>

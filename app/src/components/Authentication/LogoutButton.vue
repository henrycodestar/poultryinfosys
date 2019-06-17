<template>
    <a v-on:click="logout" class="btn btn-danger">
        Logout
    </a>
</template>

<script>
    export default {
        name: 'LogoutButton',
        methods: {
            logout : function ()
            {   
                sessionStorage.removeItem('user')
                sessionStorage.removeItem('basicAuthToken')
                this.$router.push('/login')
            }
        }
    }
</script>

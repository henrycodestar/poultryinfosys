<template>
    <div>
        <nav class="navbar navbar-default navbar-static-top m-b-0">
            <div class="navbar-header">
                <div class="top-left-part">
                    <!-- Logo -->
                    <router-link class="logo" to="/">
                        <!-- Logo icon image, you can use font-icon also -->
                        <b>
                            <i class="icon-energy text-dark"></i>
                        </b>
                        <!-- Logo text image you can use text also -->
                        <span class="hidden-xs font-light text-dark"  style="font-size:35px;">
                            <span class="font-medium">P.I.S</span>
                    </span>
                    </router-link>
                    <!--<a class="logo" href="index.html">
                        &lt;!&ndash; Logo icon image, you can use font-icon also &ndash;&gt;<b>
                        &lt;!&ndash;This is dark logo icon&ndash;&gt;<img src="../plugins/images/admin-logo.png" alt="home" class="dark-logo" />&lt;!&ndash;This is light logo icon&ndash;&gt;<img src="../plugins/images/admin-logo-dark.png" alt="home" class="light-logo" />
                     </b>
                        &lt;!&ndash; Logo text image you can use text also &ndash;&gt;<span class="hidden-xs">
                        <p class="dark-logo">SMAS</p>
                        &lt;!&ndash;This is dark logo text&ndash;&gt;<img src="../plugins/images/admin-text.png" alt="home" class="dark-logo" />&lt;!&ndash;This is light logo text&ndash;&gt;<img src="../plugins/images/admin-text-dark.png" alt="home" class="light-logo" />
                     </span> </a>-->
                </div>
                <!-- /Logo -->
                <!-- Search input and Toggle icon -->
                <ul class="nav navbar-top-links navbar-left">
                    <li><a href="javascript:void(0)" class="open-close waves-effect waves-light"><i class="ti-menu"></i></a></li>
                    <!-- .Megamenu -->

                    <li><h3 class="text-white hidden-xs m-t-15 font-normal">POULTRY INFORMATION SYSTEM </h3> <h3 class="text-white visible-xs m-t-15 font-normal">P.I.S</h3></li>
                    <!-- /.Megamenu -->
                </ul>
                <ul class="nav navbar-top-links navbar-right pull-right">
                    <!--<li>
                        <form role="search" class="app-search hidden-sm hidden-xs m-r-10">
                            <input type="text" placeholder="Search..." class="form-control"> <a href=""><i class="fa fa-search"></i></a> </form>
                    </li>-->
                    <li class="dropdown">
                        <a class="dropdown-toggle profile-pic" data-toggle="dropdown" href="#"> <img src="plugins/images/users/varun.jpg" alt="user-img" width="36" class="img-circle"><b class="hidden-xs">{{this.user.firstName}}</b><span class="caret"></span> </a>
                        <ul class="dropdown-menu dropdown-user animated flipInY">
                            <li>
                                <div class="dw-user-box">
                                    <div class="u-img"><img src="plugins/images/users/varun.jpg" alt="user" /></div>
                                    <div class="u-text"><h4>{{this.user.displayName}}</h4><p class="text-muted"></p></div>
                                </div>
                            </li>
                            <!--<li role="separator" class="divider"></li>-->
                            <!--<li><a href="#"><i class="ti-user"></i> My Information</a></li>-->
                            <li role="separator" class="divider"></li>
                            <li><a v-on:click="logout" role="button"><i class="fa fa-power-off"></i> Logout</a></li>
                        </ul>
                        <!-- /.dropdown-user -->
                    </li>

                    <!-- /.dropdown -->
                </ul>
            </div>
            <!-- /.navbar-header -->
            <!-- /.navbar-top-links -->
            <!-- /.navbar-static-side -->
        </nav>
    </div>
</template>

<script>
    export default {
        name: 'NavBar',
        components: {},
        created() {
            this.getUser();
        },
        methods: {
            logout : function ()
            {
                sessionStorage.removeItem('user');
                sessionStorage.removeItem('basicAuthToken');
                this.$router.push('/login')
            },
            getUser : function () {
                this.user = JSON.parse(sessionStorage.getItem('user'));
            }
        },
        data: () => {
            return {
                user : {}
            }
        }
    }
</script>

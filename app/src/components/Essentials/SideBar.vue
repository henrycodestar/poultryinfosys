<template>
    <div>
        <div class="navbar-default sidebar" role="navigation">
            <div class="sidebar-nav slimscrollsidebar">
                <div class="sidebar-head">
                    <h3><span class="fa-fw open-close"><i class="ti-close ti-menu"></i></span> <span class="hide-menu">Navigation</span></h3> </div>
                <!--<div class="user-profile">
                    <div class="dropdown user-pro-body">
                        <div><img src="../plugins/images/users/varun.jpg" alt="user-img" class="img-circle"></div>
                        <a href="#" class="dropdown-toggle u-dropdown" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Samuel Yute</a>
                    </div>
                </div>-->
                <ul class="nav" id="side-menu">
                    <li class="active"><router-link to="/" class="waves-effect"><i class="mdi mdi-view-dashboard fa-fw"></i> <span class="hide-menu">Dashboard</span></router-link></li>
                    <li class="active"><router-link to="/" class="waves-effect"><i class="mdi mdi-view-dashboard fa-fw"></i> <span class="hide-menu">Dashboard</span></router-link></li>
                    <li><router-link to="/incubator-batches" class="waves-effect"><i class="mdi mdi-book-open-page-variant fa-fw"></i> <span class="hide-menu">Incubator Batches</span></router-link></li>
                    <li><router-link to="/bird-cohorts" class="waves-effect"><i class="mdi mdi-chart-pie fa-fw"></i> <span class="hide-menu">Bird Cohorts</span></router-link></li>
                    <li><router-link to="/bird-housing" class="waves-effect"><i class="mdi mdi-wallet fa-fw"></i> <span class="hide-menu">Bird Housing</span></router-link></li>
                    <li><router-link to="/poultry-sales" class="waves-effect"><i class="mdi mdi-wallet fa-fw"></i> <span class="hide-menu">Poultry Sales</span></router-link></li>
                    <li><router-link href="#" class="waves-effect"><i class="mdi mdi-account-multiple fa-fw"></i> <span class="hide-menu">User Management</span></router-link></li>
                    <li><router-link href="#" class="waves-effect"><i class="mdi mdi-wallet fa-fw"></i> <span class="hide-menu">App Settings</span></router-link></li>
                    <li><router-link href="#" class="waves-effect"><i class="mdi mdi-help-circle fa-fw"></i> <span class="hide-menu">Help</span></router-link></li>
                    <li class="devider"></li>
                    <li><a href="#" class="waves-effect"><i class="fa fa-circle-o text-danger"></i> <span class="hide-menu">User Manuals</span></a></li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'SideBar',
        components: {},
        methods: {


        },
        data: () => {
            return {

            }
        }
    }
</script>

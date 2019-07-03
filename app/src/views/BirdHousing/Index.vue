<template>
    <div>
        <!-- ============================================================== -->
        <!-- Topbar header - style you can find in pages.scss -->
        <!-- ============================================================== -->
        <NavBar></NavBar>
        <!-- End Top Navigation -->
        <!-- ============================================================== -->
        <!-- Left Sidebar - style you can find in sidebar.scss  -->
        <!-- ============================================================== -->
        <SideBar></SideBar>
        <!-- ============================================================== -->
        <!-- End Left Sidebar -->
        <!-- ============================================================== -->
        <!-- ============================================================== -->
        <!-- Page Content -->
        <!-- ============================================================== -->
        <div id="page-wrapper">

            <div class="container-fluid">
                <div class="row bg-title">
                    <div class="col-lg-3 col-md-4 col-sm-4 col-xs-12">
                        <h4 class="page-title"> Bird Housing </h4>
                    </div>
                    <div class="col-lg-9 col-sm-8 col-md-8 col-xs-12">
                        <button class="waves-light btn btn-info btn-circle pull-right m-l-20"><i class="fa fa-info text-white"></i></button>
                        <ol class="breadcrumb">
                            <li><router-link to="/">Dashboard</router-link></li>
                            <li><router-link to="/bird-housing">Bird Housing</router-link></li>
                        </ol>
                    </div>
                    <!-- /.col-lg-12 -->
                </div>

                <div class="container-fluid">
                    <div class="my-0">
                        <div class="row">
                            <div class="container-fluid flex items-center p-0">
                                <div class="col-md-11">
                                    <p class="inline-block p-8 bg-white border-l-2 border-blue-dark">
                                        All Bird Housing are listed below. Pick an Bird Housing to View and Manage.
                                    </p>
                                </div>
                                <div class="col-md-1">
                                    <i class="mdi mdi-book-multiple fa-4x text-blue-darker"></i>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="bg-white my-8 p-3">
                        <div class="row">
                            <div class="container-fluid flex items-center pb-0">
                                <div class="col-md-3 h5 font-medium uppercase">
                                    <i class="fa fa-mouse-pointer"></i> Action Bar
                                </div>
                                <div class="col-md-9 flex justify-end items-center">
                                    <router-link class="btn btn-success m-1" to="/bird-housing/add"><span class="btn-label"><i class="mdi mdi-plus"></i></span> Add New</router-link>
                                </div>
                            </div>
                        </div>
                    </div>

                    <BirdHousingShowAll></BirdHousingShowAll>
                </div>
            </div>
            <!-- /.container-fluid -->
            <footer class="footer text-center"> <i class="fa fa-copyright"></i> Inscriptions 2018 </footer>
        </div>
        <!-- ============================================================== -->
        <!-- End Page Content -->
        <!-- ============================================================== -->

    </div>
</template>

<script>
    import NavBar from "../../components/Essentials/NavBar";
    import SideBar from "../../components/Essentials/SideBar";
    import BirdHousingShowAll from "./ShowAll";
    export default {
        name: 'BirdHousingHome',
        components: {BirdHousingShowAll, SideBar, NavBar},
        methods: {


        },
        data: () => {
            return {

            }
        }
    }
</script>

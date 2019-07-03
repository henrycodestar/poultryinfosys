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
                        <h4 class="page-title"> Dashboard </h4> </div>
                    <div class="col-lg-9 col-sm-8 col-md-8 col-xs-12">
                        <button class="waves-light btn btn-warning btn-outline pull-right m-l-20">Usage Tip <i class="fa icon-arrow-down"></i></button>
                        <ol class="breadcrumb">
                            <li><a href="#">Dashboard</a></li>
                        </ol>
                    </div>
                    <!-- /.col-lg-12 -->
                </div>
                <div class="row">
                    <div class="col-lg-3 col-sm-6 col-xs-12">
                        <div class="white-box analytics-info">
                            <h3 class="box-title">Incubator Batches</h3>
                            <ul class="list-inline two-part">
                                <li>
                                    <i class="fa fa-bell-o text-inverse" style="font-size:30px"></i>
                                </li>
                                <li class="text-right" ><span class="counter text-dark" style="font-size:30px">{{this.trackedEntityInstances.length}}</span></li>
                            </ul>
                        </div>
                    </div>

                    <div class="col-lg-3 col-sm-6 col-xs-12">
                        <div class="white-box analytics-info">
                            <h3 class="box-title">Cohorts</h3>
                            <ul class="list-inline two-part">
                                <li>
                                    <i class="fa fa-bell-o text-inverse" style="font-size:30px"></i>
                                </li>
                                <li class="text-right" ><span class="counter text-dark" style="font-size:30px">N/A</span></li>
                            </ul>
                        </div>
                    </div>

                    <div class="col-lg-3 col-sm-6 col-xs-12">
                        <div class="white-box">
                            <h3 class="box-title">Sales</h3>
                            <div class="text-right"> <span class="text-muted">Weekly Summary</span>
                                <h2 class="text-success">MWK 0.00</h2> </div>
                        </div>
                    </div>

                    <div class="col-lg-3 col-sm-6 col-xs-12">
                        <div class="white-box analytics-info">
                            <h3 class="box-title">Houses</h3
                            <ul class="list-inline two-part">
                                <li>
                                    <i class="fa fa-building-o text-inverse" style="font-size:30px"></i>
                                </li>
                                <li class="text-right" ><span class="counter text-dark" style="font-size:30px">N/A</span></li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div class="row">
                    <div class="col-md-5">
                        <div class="white-box">
                            <h3 class="box-title">Good Morning <span class="font-bold">{{this.user.firstName}}</span></h3>
                            <div class="row">
                                <div class="col-md-3">
                                    <i class="fa fa-sun-o fa-3x text-warning"></i>
                                </div>
                                <div class="col-md-9">
                                    <h4 class="">
                                        How are You doing today?
                                    </h4>
                                    <p>
                                        Don't forget to check the Reminders before you logout ey.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-7">
                        <div class="white-box">
                            <h3 class="box-title">Reminders</h3>
                            <div class="row">
                                <div class="col-md-2 text-center">
                                    <i class="fa fa-bullhorn fa-3x text-inverse"></i>
                                </div>
                                <div class="col-md-10">
                                    <ul class="list-group">
                                        <li class="list-group-item b-none">
                                            <span class="text-uppercase font-medium">Vaccine for Cohort #12ADB</span>
                                            <span class="pull-right"><i class="fa fa-bookmark-o fa-2x text-warning"></i> </span>
                                            <p> 3 Days until Vaccination for Cohort #12ADB, Please prepare all necessary conditions</p>
                                            <span class="small"><i class="fa fa-clock-o"></i> Posted 1 day ago</span>
                                        </li>
                                        <li class="list-group-item b-none">
                                            <span class="text-uppercase font-medium">Clean House #1</span>
                                            <span class="pull-right"><i class="fa fa-bookmark-o fa-2x text-warning"></i> </span>
                                            <p> House #1 is due for cleaning. If you have cleaned, please go record in the house conditions section</p>
                                            <span class="small"><i class="fa fa-clock-o"></i> Posted 1 day ago</span>
                                        </li>
                                    </ul>

                                </div>
                            </div>

                        </div>
                    </div>
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
    import authResource from './../authResource'
    import NavBar from "../components/Essentials/NavBar";
    import SideBar from "../components/Essentials/SideBar";
    export default {
        name: 'Index',
        components: {SideBar, NavBar},
        created() {
            this.getUser();
            this.getIncubatorBatches();
        },
        methods: {
            getUser : function () {
                this.user = JSON.parse(sessionStorage.getItem('user'))
            },
            getIncubatorBatches : function () {
                let URL = this.APIHosts.dhis+'/trackedEntityInstances.json?ou='+this.organisationUnit+'&program'+this.programs.incubatorBatches;

                authResource().get(URL)
                    .then((response)=>{
                        this.trackedEntityInstances.push(..._.filter(response.data.trackedEntityInstances, (item) => {return item.attributes.length > 0}))
                    }).catch((error) => {
                    console.log(error)
                })
            }
        },
        data: () => {
            return {
                user : {},
                trackedEntityInstances : []
            }
        }
    }
</script>

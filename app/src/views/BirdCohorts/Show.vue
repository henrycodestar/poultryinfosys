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
                        <h4 class="page-title"> Bird Cohorts </h4>
                    </div>
                    <div class="col-lg-9 col-sm-8 col-md-8 col-xs-12">
                        <button class="waves-light btn btn-info btn-circle pull-right m-l-20"><i class="fa fa-info text-white"></i></button>
                        <ol class="breadcrumb">
                            <li><router-link to="/">Dashboard</router-link></li>
                            <li><router-link to="/bird-cohorts">Bird Cohorts</router-link></li>
                            <li><a>{{this.name}}</a></li>
                        </ol>
                    </div>
                    <!-- /.col-lg-12 -->
                </div>

                <div class="container-fluid">
                    <div class="my-0">
                        <div class="row">
                            <div class="container-fluid flex items-center p-0">
                                <div class="col-md-11">
                                    <p class="inline-block p-8 bg-white border-l-4 border-grey-dark">
                                        View all Cohort details and Manage it below.
                                    </p>
                                </div>
                                <div class="col-md-1">
                                    <i class="mdi mdi-book-multiple fa-4x text-blue-darker"></i>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="bg-white mt-8 p-3">
                        <div class="row">
                            <div class="container-fluid flex items-center pb-0">
                                <div class="col-md-3 h5 font-medium uppercase">
                                    <i class="fa fa-mouse-pointer"></i> Action Bar
                                </div>
                                <div class="col-md-9 flex justify-end items-center">
                                    <router-link :to="'/bird-cohorts/'+this.birdCohortID+'/edit'" class="btn btn-warning m-1"><span class="btn-label"><i class="mdi mdi-pencil"></i></span> Edit</router-link>
                                    <button v-on:click="deleteInstance" class="btn btn-danger m-1"><span class="btn-label"><i class="mdi mdi-delete"></i></span> Delete</button>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="mt-8">
                        <div class="white-box">
                            <div class="row">
                                <div class="col-md-1 text-center">
                                    <i class="fa fa-info-circle fa-3x"></i>
                                </div>
                                <div class="col-md-11">
                                    <div class="box-title">
                                        Basic Info
                                    </div>
                                    <div class="row">
                                        <div class="container-fluid p-0">
                                            <div class="col-md-2">
                                                <span class="font-medium">Name</span>
                                                <p>{{ getValue(this.trackedEntityInstance, 'G0TYKyOzBpO')}}</p>
                                            </div>
                                            <div class="col-md-2">
                                                <span class="font-medium">Start</span>
                                                <p>{{ getValue(this.trackedEntityInstance, 'ddXNeWjvwp3')}}</p>
                                            </div>
                                            <div class="col-md-2">
                                                <span class="font-medium">Bird Type</span>
                                                <p>{{ getValue(this.trackedEntityInstance, 'd9XZt8odgnS')}}</p>
                                            </div>
                                            <div class="col-md-3">
                                                <span class="font-medium">Updated At</span>
                                                <p>{{ this.trackedEntityInstance.lastUpdated}}</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="mt-8">
                        <div class="row">
                            <div>
                                <div class="col-md-3">
                                    <router-link :to="'/bird-cohorts/'+this.birdCohortID+'/entry'">
                                        <div class="white-box hover:shadow">
                                            <h3 class="box-title">Entry</h3>
                                            <ul class="list-inline m-t-30 p-t-10 two-part">
                                                <li><i class="mdi mdi-book-multiple-variant text-inverse"></i></li>
                                                <!--<li class="text-right"><span class="">1</span></li>-->
                                            </ul>
                                        </div>
                                    </router-link>
                                </div>
                                <div class="col-md-3">
                                    <router-link :to="'/bird-cohorts/'+this.birdCohortID+'/vaccines'">
                                        <div class="white-box">
                                            <h3 class="box-title">Vaccines</h3>
                                            <ul class="list-inline m-t-30 p-t-10 two-part">
                                                <li><i class="mdi mdi-school text-inverse"></i></li>
                                                <!--<li class="text-right"><span class="">5</span></li>-->
                                            </ul>
                                        </div>
                                    </router-link>
                                </div>
                                <div class="col-md-3">
                                    <router-link :to="'/bird-cohorts/'+this.birdCohortID+'/diseases'">
                                        <div class="white-box">
                                            <h3 class="box-title">Diseases</h3>
                                            <ul class="list-inline m-t-30 p-t-10 two-part">
                                                <li><i class="mdi mdi-school text-inverse"></i></li>
                                                <!--<li class="text-right"><span class="">5</span></li>-->
                                            </ul>
                                        </div>
                                    </router-link>
                                </div>
                                <div class="col-md-3">
                                    <router-link :to="'/bird-cohorts/'+this.birdCohortID+'/layings'">
                                        <div class="white-box">
                                            <h3 class="box-title">Layings</h3>
                                            <ul class="list-inline m-t-30 p-t-10 two-part">
                                                <li><i class="mdi mdi-school text-inverse"></i></li>
                                                <!--<li class="text-right"><span class="">5</span></li>-->
                                            </ul>
                                        </div>
                                    </router-link>
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
    import authResource from '../../authResource'
    import NavBar from "../../components/Essentials/NavBar";
    import SideBar from "../../components/Essentials/SideBar";
    import _ from "lodash"

    export default {
        name: 'BirdCohortsShow',
        components: {SideBar, NavBar},
        props : ['birdCohortID'],
        created(){
            this.getTrackedEntityInstance();
        },
        methods: {
            getValue : function (trackedEntityInstance, attributeID) {
                if (trackedEntityInstance.attributes.length > 0)
                    return _.find(trackedEntityInstance.attributes, ['attribute', attributeID]).value;
                else
                    return null
            },
            getTrackedEntityInstance : function () {
                let URL = this.APIHosts.dhis+'/trackedEntityInstances/'+this.birdCohortID+'.json';

                authResource().get(URL)
                    .then((response)=>{
                        this.trackedEntityInstance = response.data
                    }).catch((error) => {
                    console.log(error)
                })
            },
            deleteInstance : function () {
                let URL = this.APIHosts.dhis+'/trackedEntityInstances/'+this.birdCohortID;

                authResource().delete(URL)
                    .then((response)=>{
                        this.$router.push('/bird-cohorts')
                    }).catch((error) => {
                    console.log(error)
                })
            }
        },
        data: () => {
            return {
                trackedEntityInstance : {
                    attributes : []
                }
            }
        },
        computed : {
            name : {
                get : function () {
                    return this.getValue(this.trackedEntityInstance, 'G0TYKyOzBpO')
                }
            }
        }
    }
</script>

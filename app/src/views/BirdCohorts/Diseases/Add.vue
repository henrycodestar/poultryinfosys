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
                            <li><router-link :to="'/bird-cohorts/'+this.birdCohortID">{{ this.birdCohortID }}</router-link></li>
                            <li><router-link :to="'/bird-cohorts/'+this.birdCohortID+'/diseases'">Diseases</router-link></li>
                            <li><a>Add</a></li>
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
                                        Use the Input Form below to Add a New Diseases.
                                    </p>
                                </div>
                                <div class="col-md-1">
                                    <i class="mdi mdi-book-multiple fa-4x text-blue-darker"></i>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="mt-8">
                        <div class="row">
                            <div class="container-fluid p-0">
                                <div class="col-md-9">
                                    <div class="white-box">
                                        <div class="box-title">
                                            Add Status
                                        </div>
                                        <div class="row flex">
                                            <div class="col-md-2 text-center">
                                                <i class="fa fa-plus fa-3x"></i>
                                            </div>
                                            <div class="col-md-8">
                                                <form v-on:submit.prevent="submit">
                                                    <div class="form-group">
                                                        <label class="font-medium" for="1">Name</label>
                                                        <input id="1" v-model="name" class="form-control h-16 border-2 border-grey-dark focus:border-2 focus:border-blue focus:shadow rounded" type="text" required>
                                                    </div>

                                                    <div class="form-group">
                                                        <label class="font-medium" for="2">Type</label>
                                                        <input id="2" v-model="type" class="form-control h-16 border-2 border-grey-dark focus:border-2 focus:border-blue focus:shadow rounded" type="text" required>
                                                    </div>

                                                    <div class="form-group">
                                                        <label class="font-medium" for="3">Number of Birds</label>
                                                        <input id="3" v-model="numberOfBirds" class="form-control h-16 border-2 border-grey-dark focus:border-2 focus:border-blue focus:shadow rounded" type="number" min="0" required>
                                                    </div>

                                                    <div class="form-group">
                                                        <label class="font-medium" for="4">Mitigation</label>
                                                        <input id="4" v-model="mitigation" class="form-control h-16 border-2 border-grey-dark focus:border-2 focus:border-blue focus:shadow rounded" type="text" required>
                                                    </div>

                                                    <div class="form-group">
                                                        <label class="font-medium" for="5">Number of Deaths</label>
                                                        <input id="5" v-model="numberOfDeaths" class="form-control h-16 border-2 border-grey-dark focus:border-2 focus:border-blue focus:shadow rounded" type="number" min="0" required>
                                                    </div>

                                                    <div class="form-group flex justify-end">
                                                        <button class="btn btn-success m-1" type="submit"><span class="btn-label"><i class="fa fa-save"></i></span> Save</button>
                                                        <router-link :to="'/bird-cohorts/'+this.birdCohortID"  class="btn btn-default m-1">Cancel</router-link>
                                                    </div>
                                                </form>
                                            </div>
                                        </div>
                                    </div>
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
    import authResource from './../../../authResource'
    import NavBar from "../../../components/Essentials/NavBar";
    import SideBar from "../../../components/Essentials/SideBar";
    export default {
        name: 'BirdCohortsDiseasesAdd',
        components: {SideBar, NavBar},
        props: ['birdCohortID'],
        created() {

        },
        methods: {
            submit : function () {
                let URL = this.APIHosts.dhis+'/events';

                let dataValues = [
                    {dataElement : "oK4QWeTnY41", value : this.name},
                    {dataElement : "T9L5M80MdwT", value : this.type},
                    {dataElement : "J4B1jMcbDGJ", value : this.numberOfBirds,},
                    {dataElement : "FNGBHWMWwfw", value : this.mitigation,},
                    {dataElement : "z4koX62FmiJ", value : this.numberOfDeaths,},
                ];

                let payload  = {
                    program: this.programs.birdCohorts,
                    programStage: "rXCHyyMQLEg",
                    orgUnit: this.organisationUnit,
                    trackedEntityInstance : this.birdCohortID,
                    status : "ACTIVE",
                    eventDate : this.dateToday(),
                    storedBy : JSON.parse(sessionStorage.getItem('user')).userCredentials.username,
                    dataValues: dataValues,
                };

                authResource().post(URL, payload)
                    .then((response)=>{
                        this.$router.push('/bird-cohorts/'+this.birdCohortID)

                    }).catch((error) => {
                    console.log('Did not work')
                })
            }

        },
        data: () => {
            return {
                name : "",
                type : "",
                numberOfBirds : "",
                mitigation : "",
                numberOfDeaths : "",
                programEvents : [],
            }
        }
    }
</script>

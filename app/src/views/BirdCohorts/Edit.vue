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
                            <li><router-link :to="'/bird-cohorts/'+birdCohortID">{{this.name}}</router-link></li>
                            <li><a href="#">Edit</a></li>
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
                                        Use the Input Form below to Edit a Bird Cohort.
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
                                            Edit Cohort
                                        </div>
                                        <div class="row flex">
                                            <div class="col-md-2 text-center">
                                                <i class="fa fa-plus fa-3x"></i>
                                            </div>
                                            <div class="col-md-8">
                                                <form v-on:submit.prevent="update">
                                                    <div class="form-group">
                                                        <label class="font-medium" for="name">Name</label>
                                                        <input id="name" v-model="attributes.name" class="form-control h-16 border-2 border-grey-dark focus:border-2 focus:border-blue focus:shadow rounded" type="text" required>
                                                    </div>

                                                    <div class="form-group">
                                                        <label class="font-medium" for="start-date">Start Date</label>
                                                        <input id="start-date" v-model="attributes.startDate" class="form-control h-16 border-2 border-grey-dark focus:border-2 focus:border-blue focus:shadow rounded" type="date" required>
                                                    </div>

                                                    <div class="form-group">
                                                        <label class="font-medium" for="bird-types">Bird Type</label>
                                                        <select id="bird-types" v-model="attributes.birdType" class="form-control h-16 border-2 border-grey-dark focus:border-2 focus:border-blue focus:shadow rounded" required>
                                                            <option v-for="(birdType, index) in birdTypes" :key="index" :value="birdType.code">{{ birdType.name}}</option>
                                                        </select>
                                                    </div>

                                                    <div class="form-group flex justify-end">
                                                        <button class="btn btn-success m-1" type="submit"><span class="btn-label"><i class="fa fa-save"></i></span> Save</button>
                                                        <router-link to="/bird-cohorts"  class="btn btn-default m-1">Cancel</router-link>
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
    import authResource from './../../authResource'
    import NavBar from "../../components/Essentials/NavBar";
    import SideBar from "../../components/Essentials/SideBar";
    export default {
        name: 'BirdCohortsEdit',
        components: {SideBar, NavBar},
        props: ['birdCohortID'],
        created() {
            this.getBirdOptions();
            this.getBirds();
            this.getTrackedEntityInstance();
        },
        methods: {
            getValue : function (trackedEntityInstance, attributeID) {
                if (trackedEntityInstance.attributes.length > 0)
                    return _.find(trackedEntityInstance.attributes, ['attribute', attributeID]).value;
                else
                    return null
            },
            getBirdOptions : function () {
                let URL = this.APIHosts.dhis+'/optionSets/'+this.optionSets.birds+'.json?fields=displayName,options[id,name,code]';

                authResource().get(URL)
                    .then((response)=>{
                        this.birdTypes.push(...response.data.options)

                    }).catch((error) => {
                    console.log(error)
                })
            },
            getBirds : function () {
                let URL = this.APIHosts.dhis+'/optionSets/'+this.optionSets.birds+'.json?fields=displayName,options[id,name,code]';

                authResource().get(URL)
                    .then((response)=>{
                        this.birds.push(...response.data.options)
                    }).catch((error) => {
                    console.log(error)
                })
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
            update : function () {
                let URL = this.APIHosts.dhis+'/trackedEntityInstances/'+this.birdCohortID;

                let attributes = [
                    {attribute : "G0TYKyOzBpO", value : this.attributes.name},
                    {attribute : "ddXNeWjvwp3", value : this.attributes.startDate,},
                    {attribute : "d9XZt8odgnS", value : this.attributes.birdType,},
                ];

                // let enrollments = [ {
                //     orgUnit: this.organisationUnit,
                //     program: this.programs.birdCohorts,
                // }];

                let payload  = {
                    trackedEntityType: "qXbcQRORGZc",
                    orgUnit: this.organisationUnit,
                    attributes: attributes,
                    // enrollments: enrollments
                };

                authResource().put(URL, payload)
                    .then((response)=>{
                        this.$router.push('/bird-cohorts/'+this.birdCohortID)

                    }).catch((error) => {
                    console.log('Did not work')
                })
            }

        },
        data: () => {
            return {
                attributes : {
                    name : "",
                    startDate : "",
                    endDate : "",
                    birdType : "",
                    bird : "",
                },
                birdTypes : [],
                birds : [],
                trackedEntityInstance : {
                    attributes : []
                }
            }
        },
        watch : {
            trackedEntityInstance : function (value) {
                this.attributes = {
                    name : this.getValue(value, 'G0TYKyOzBpO'),
                    startDate : this.getValue(value, 'ddXNeWjvwp3'),
                    birdType : this.getValue(value, 'd9XZt8odgnS'),
                };
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

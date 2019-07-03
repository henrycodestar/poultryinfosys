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
                            <li><router-link :to="'/bird-cohorts/'+this.birdCohortID+'/vaccines'">Development Vaccines</router-link></li>
                            <li><a>Edit</a></li>
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
                                        Use the Input Form below to Edit a Vaccines.
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
                                            Edit Status
                                        </div>
                                        <div class="row flex">
                                            <div class="col-md-2 text-center">
                                                <i class="fa fa-plus fa-3x"></i>
                                            </div>
                                            <div class="col-md-8">
                                                <form v-on:submit.prevent="update">
                                                    <div class="form-group">
                                                        <label class="font-medium" for="name">Number of Birds</label>
                                                        <input id="name" v-model="dataValues.numberOfBirds" class="form-control h-16 border-2 border-grey-dark focus:border-2 focus:border-blue focus:shadow rounded" type="number" min="0" required>
                                                    </div>

                                                    <div class="form-group">
                                                        <label class="font-medium" for="start-date">Vaccination Date </label>
                                                        <input id="start-date" v-model="dataValues.vaccinationDate" class="form-control h-16 border-2 border-grey-dark focus:border-2 focus:border-blue focus:shadow rounded" type="date" required>
                                                    </div>

                                                    <div class="form-group">
                                                        <label class="font-medium" for="vaccines">Vaccination Type</label>
                                                        <select id="vaccines" v-model="dataValues.vaccinationType" class="form-control h-16 border-2 border-grey-dark focus:border-2 focus:border-blue focus:shadow rounded" required>
                                                            <option v-for="(vaccine, index) in vaccines" :key="index" :value="vaccine.code">{{ vaccine.name}}</option>
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
    import authResource from './../../../authResource'
    import NavBar from "../../../components/Essentials/NavBar";
    import SideBar from "../../../components/Essentials/SideBar";
    export default {
        name: 'BirdCohortsEdit',
        components: {SideBar, NavBar},
        props: ['birdCohortID','vaccineID'],
        created() {
            this.getVaccinationOptions();
            this.getProgramEvent();
        },
        methods: {
            getVaccinationOptions : function () {
                let URL = this.APIHosts.dhis+'/optionSets/'+this.optionSets.vaccines+'.json?fields=displayName,options[id,name,code]';

                authResource().get(URL)
                    .then((response)=>{
                        this.vaccines.push(...response.data.options)

                    }).catch((error) => {
                    console.log(error)
                })
            },
            getValue : function (event, dataElementID) {
                if (event.dataValues.length > 0)
                    return _.find(event.dataValues, ['dataElement', dataElementID]).value;
                else
                    return null
            },
            getProgramEvent : function () {
                let URL = this.APIHosts.dhis+'/events.json?program='+this.programs.birdCohorts+'&programStage=vy6lvhnoO5s&orgUnit='+this.organisationUnit;

                authResource().get(URL)
                    .then((response)=>{
                        if(response.data.events.length > 0)
                            this.programEvent = _.find(response.data.events,['event',this.vaccineID])
                    }).catch((error) => {
                    console.log(error)
                })
            },
            update : function () {
                let URL = this.APIHosts.dhis+'/events/'+this.programEvent.event;

                let dataValues = [
                    {dataElement : "uHwvTB7ZG7P", value : this.dataValues.numberOfBirds},
                    {dataElement : "YVup3DxLdRI", value : this.dataValues.vaccinationDate},
                    {dataElement : "LPXCbDKz7Bv", value : this.dataValues.vaccinationType,},
                ];

                let payload  = {
                    program: this.programs.birdCohorts,
                    programStage: "vy6lvhnoO5s",
                    orgUnit: this.organisationUnit,
                    trackedEntityInstance : this.birdCohortID,
                    status : "ACTIVE",
                    eventDate : this.dateToday(),
                    storedBy : JSON.parse(sessionStorage.getItem('user')).userCredentials.username,
                    dataValues: dataValues,
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
                programEvent : {
                    dataValues : []
                },
                dataValues : {
                    numberOfBirds : "",
                    vaccinationDate : "",
                    vaccinationType : "",
                },
                vaccines : []
            }
        },
        watch : {
            programEvent : function (value) {
                this.dataValues = {
                    numberOfBirds : this.getValue(value, 'uHwvTB7ZG7P'),
                    vaccinationDate : this.getValue(value, 'YVup3DxLdRI'),
                    vaccinationType : this.getValue(value, 'LPXCbDKz7Bv'),
                };
            }
        }
    }
</script>

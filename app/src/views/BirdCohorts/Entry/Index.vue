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
                            <li><a>Entry</a></li>
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
                                        View the Entry Stage and Manage it below.
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
                                            Update Entry
                                        </div>
                                        <div class="row flex">
                                            <div class="col-md-2 text-center">
                                                <i class="fa fa-plus fa-3x"></i>
                                            </div>
                                            <div class="col-md-8">
                                                <form v-on:submit.prevent="handleSubmit">
                                                    <div class="form-group">
                                                        <label class="font-medium" for="1">Chicks Provider</label>
                                                        <input id="1" v-model="dataValues.chicksProvider" class="form-control h-16 border-2 border-grey-dark focus:border-2 focus:border-blue focus:shadow rounded" type="text" required>
                                                    </div>

                                                    <div class="form-group">
                                                        <label class="font-medium" for="2">Number of Chicks</label>
                                                        <input id="2" v-model="dataValues.numberOfChicks" class="form-control h-16 border-2 border-grey-dark focus:border-2 focus:border-blue focus:shadow rounded" type="number" min="0" required>
                                                    </div>

                                                    <div class="form-group">
                                                        <label class="font-medium" for="3">Vaccination Done</label>
                                                        <select id="3" v-model="dataValues.vaccinationDone" class="form-control h-16 border-2 border-grey-dark focus:border-2 focus:border-blue focus:shadow rounded" required>
                                                            <option  :value="true">Yes</option>
                                                            <option  :value="false">No</option>
                                                        </select>
                                                    </div>

                                                    <div class="form-group" v-show="dataValues.vaccinationDone == true">
                                                        <label class="font-medium" for="vaccines">Vaccination Type</label>
                                                        <select id="vaccines" v-model="dataValues.vaccinationType" class="form-control h-16 border-2 border-grey-dark focus:border-2 focus:border-blue focus:shadow rounded" required>
                                                            <option v-for="(vaccine, index) in vaccines" :key="index" :value="vaccine.code">{{ vaccine.name}}</option>
                                                        </select>
                                                    </div>

                                                    <div class="form-group">
                                                        <label class="font-medium" for="4">Cage Name</label>
                                                        <input id="4" v-model="dataValues.cageID" class="form-control h-16 border-2 border-grey-dark focus:border-2 focus:border-blue focus:shadow rounded" type="number" min="1" required>
                                                    </div>

                                                    <div class="form-group">
                                                        <label class="font-medium" for="5">Incubator Batch Number</label>
                                                        <input id="5" v-model="dataValues.incubatorBatchNumber" class="form-control h-16 border-2 border-grey-dark focus:border-2 focus:border-blue focus:shadow rounded" type="text" required>
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
        name: 'BirdCohortsetterLoading',
        components: {SideBar, NavBar},
        props : ['birdCohortID'],
        created(){
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
                {
                    let val = _.find(event.dataValues, ['dataElement', dataElementID]);
                    return val?val.value:""
                }
                else
                    return null
            },
            getProgramEvent : function () {
                let URL = this.APIHosts.dhis+'/events.json?program='+this.programs.birdCohorts+'&programStage=a0lAmMYrfnV&orgUnit='+this.organisationUnit;

                authResource().get(URL)
                    .then((response)=>{
                        if(response.data.events.length > 0)
                            this.programEvent = response.data.events[0]
                    }).catch((error) => {
                    console.log(error)
                })
            },
            handleSubmit : function () {
                if (!this.programEvent)
                    this.store();
                else
                    this.update();
            },
            store : function () {
                let URL = this.APIHosts.dhis+'/events';

                let dataValues = [
                    {dataElement : "zEONdPID4Ye", value : this.dataValues.numberOfChicks,},
                    {dataElement : "Wuyhpy0ceJn", value : this.dataValues.vaccinationDone,},
                    {dataElement : "LPXCbDKz7Bv", value : this.dataValues.vaccinationType,},
                    {dataElement : "vq9kfxD9yt7", value : this.dataValues.cageID,},
                    {dataElement : "hD5D4dQq9QR", value : this.dataValues.incubatorBatchNumber,},
                    {dataElement : "tB0Xcn3nDf2", value : this.dataValues.chicksProvider},
                ];

                let payload  = {
                    program: this.programs.birdCohorts,
                    programStage: "a0lAmMYrfnV",
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
            },
            update : function () {
                let URL = this.APIHosts.dhis+'/events/'+this.programEvent.event;

                let dataValues = [
                    {dataElement : "zEONdPID4Ye", value : this.dataValues.numberOfChicks,},
                    {dataElement : "Wuyhpy0ceJn", value : this.dataValues.vaccinationDone,},
                    {dataElement : "LPXCbDKz7Bv", value : this.dataValues.vaccinationType,},
                    {dataElement : "vq9kfxD9yt7", value : this.dataValues.cageID,},
                    {dataElement : "hD5D4dQq9QR", value : this.dataValues.incubatorBatchNumber,},
                    {dataElement : "tB0Xcn3nDf2", value : this.dataValues.chicksProvider},
                ];

                let payload  = {
                    program: this.programs.birdCohorts,
                    programStage: "a0lAmMYrfnV",
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
                programEvent : null,
                vaccines : [],
                dataValues : {
                    numberOfChicks  : "",
                    vaccinationDone : "",
                    vaccinationType : "",
                    cageID : "",
                    incubatorBatchNumber : "",
                    chicksProvider : ""
                },
            }
        },
        watch : {
            programEvent : function (value) {
                this.dataValues = {
                    numberOfChicks : this.getValue(value, 'zEONdPID4Ye'),
                    vaccinationDone : this.getValue(value, 'Wuyhpy0ceJn'),
                    vaccinationType : this.getValue(value, 'LPXCbDKz7Bv'),
                    cageID : this.getValue(value, 'vq9kfxD9yt7'),
                    incubatorBatchNumber : this.getValue(value, 'hD5D4dQq9QR'),
                    chicksProvider : this.getValue(value, 'tB0Xcn3nDf2')
                };
            }
        },
    }
</script>

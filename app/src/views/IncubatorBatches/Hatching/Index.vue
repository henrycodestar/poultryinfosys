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
                        <h4 class="page-title"> Incubator Batches </h4>
                    </div>
                    <div class="col-lg-9 col-sm-8 col-md-8 col-xs-12">
                        <button class="waves-light btn btn-info btn-circle pull-right m-l-20"><i class="fa fa-info text-white"></i></button>
                        <ol class="breadcrumb">
                            <li><router-link to="/">Dashboard</router-link></li>
                            <li><router-link to="/incubator-batches">Incubator Batches</router-link></li>
                            <li><router-link :to="'/incubator-batches/'+this.incubatorBatchID">{{ this.incubatorBatchID }}</router-link></li>
                            <li><a>Hatching</a></li>
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
                                        View the Hatching Stage and Manage it below.
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
                                            Update Hatching
                                        </div>
                                        <div class="row flex">
                                            <div class="col-md-2 text-center">
                                                <i class="fa fa-plus fa-3x"></i>
                                            </div>
                                            <div class="col-md-8">
                                                <form v-on:submit.prevent="handleSubmit">
                                                    <div class="form-group">
                                                        <label class="font-medium" for="number-of-chicks">Number of Chicks</label>
                                                        <input id="number-of-chicks" v-model="dataValues.numberOfChicks" class="form-control h-16 border-2 border-grey-dark focus:border-2 focus:border-blue focus:shadow rounded" type="number" min="1" required>
                                                    </div>

                                                    <div class="form-group">
                                                        <label class="font-medium" for="number-of-dead-chicks">Number of Dead Chicks</label>
                                                        <input id="number-of-dead-chicks" v-model="dataValues.numberOfDeadChicks" class="form-control h-16 border-2 border-grey-dark focus:border-2 focus:border-blue focus:shadow rounded" type="number" min="1" required>
                                                    </div>

                                                    <div class="form-group">
                                                        <label class="font-medium" for="number-of-deformed-chicks">Number of Deformed Chicks</label>
                                                        <input id="number-of-deformed-chicks" v-model="dataValues.numberOfDeformedChicks" class="form-control h-16 border-2 border-grey-dark focus:border-2 focus:border-blue focus:shadow rounded" type="number" min="1" required>
                                                    </div>
                                                    <div class="form-group">
                                                        <label class="font-medium" for="number-of-healthy-chicks">Number of Healthy Chicks</label>
                                                        <input id="number-of-healthy-chicks" v-model="dataValues.numberOfHealthyChicks" class="form-control h-16 border-2 border-grey-dark focus:border-2 focus:border-blue focus:shadow rounded" type="number" min="1" required>
                                                    </div>

                                                    <div class="form-group flex justify-end">
                                                        <button class="btn btn-success m-1" type="submit"><span class="btn-label"><i class="fa fa-save"></i></span> Save</button>
                                                        <router-link :to="'/incubator-batches/'+this.incubatorBatchID"  class="btn btn-default m-1">Cancel</router-link>
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
        name: 'IncubatorBatcheHatching',
        components: {SideBar, NavBar},
        props : ['incubatorBatchID'],
        created(){
            this.getProgramEvent();
        },
        methods: {
            getValue : function (event, dataElementID) {
                if (event.dataValues.length > 0)
                    return _.find(event.dataValues, ['dataElement', dataElementID]).value;
                else
                    return null
            },
            getProgramEvent : function () {
                let URL = this.APIHosts.dhis+'/events.json?program='+this.programs.incubatorBatches+'&programStage=bXX05wWUIdS&orgUnit='+this.organisationUnit;

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
                    {dataElement : "bSKlReke0Ga", value : this.dataValues.numberOfChicks},
                    {dataElement : "Qd2E16lhRdY", value : this.dataValues.numberOfDeadChicks,},
                    {dataElement : "OQZzB2xdvy3", value : this.dataValues.numberOfDeformedChicks,},
                    {dataElement : "sVHv9zU5O0s", value : this.dataValues.numberOfHealthyChicks,}
                ];

                let payload  = {
                    program: this.programs.incubatorBatches,
                    programStage: "bXX05wWUIdS",
                    orgUnit: this.organisationUnit,
                    trackedEntityInstance : this.incubatorBatchID,
                    status : "ACTIVE",
                    eventDate : this.dateToday(),
                    storedBy : JSON.parse(sessionStorage.getItem('user')).userCredentials.username,
                    dataValues: dataValues,
                };

                authResource().post(URL, payload)
                    .then((response)=>{
                        this.$router.push('/incubator-batches/'+this.incubatorBatchID)

                    }).catch((error) => {
                    console.log('Did not work')
                })
            },
            update : function () {
                let URL = this.APIHosts.dhis+'/events/'+this.programEvent.event;

                let dataValues = [
                    {dataElement : "bSKlReke0Ga", value : this.dataValues.numberOfChicks},
                    {dataElement : "Qd2E16lhRdY", value : this.dataValues.numberOfDeadChicks,},
                    {dataElement : "OQZzB2xdvy3", value : this.dataValues.numberOfDeformedChicks,},
                    {dataElement : "sVHv9zU5O0s", value : this.dataValues.numberOfHealthyChicks,}
                ];

                let payload  = {
                    program: this.programs.incubatorBatches,
                    programStage: "bXX05wWUIdS",
                    orgUnit: this.organisationUnit,
                    trackedEntityInstance : this.incubatorBatchID,
                    status : "ACTIVE",
                    eventDate : this.dateToday(),
                    storedBy : JSON.parse(sessionStorage.getItem('user')).userCredentials.username,
                    dataValues: dataValues,
                };

                authResource().put(URL, payload)
                    .then((response)=>{
                        this.$router.push('/incubator-batches/'+this.incubatorBatchID)

                    }).catch((error) => {
                    console.log('Did not work')
                })
            }
        },
        data: () => {
            return {
                programEvent : null,
                dataValues : {
                    numberOfChicks : "",
                    numberOfDeadChicks : "",
                    numberOfDeformedChicks : "",
                    numberOfHealthyChicks : ""
                },
            }
        },
        watch : {
            programEvent : function (value) {
                this.dataValues = {
                    numberOfChicks : this.getValue(value, 'bSKlReke0Ga'),
                    numberOfDeadChicks : this.getValue(value, 'Qd2E16lhRdY'),
                    numberOfDeformedChicks : this.getValue(value, 'OQZzB2xdvy3'),
                    numberOfHealthyChicks : this.getValue(value, 'sVHv9zU5O0s')
                };
            }
        },
    }
</script>

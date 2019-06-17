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
                            <li><router-link :to="'/incubator-batches/'+this.incubatorBatchID+'/development-statuses'">Development Status</router-link></li>
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
                                        Use the Input Form below to Add a New Development Status.
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
                                                        <label class="font-medium" for="name">Number of Damaged Eggs</label>
                                                        <input id="name" v-model="numberOfDamagedEggs" class="form-control h-16 border-2 border-grey-dark focus:border-2 focus:border-blue focus:shadow rounded" type="number" min="0" required>
                                                    </div>

                                                    <div class="form-group">
                                                        <label class="font-medium" for="start-date">Number of Undeveloped Eggs </label>
                                                        <input id="start-date" v-model="numberOfUnDevelopedEggs" class="form-control h-16 border-2 border-grey-dark focus:border-2 focus:border-blue focus:shadow rounded" type="number" min="0" required>
                                                    </div>

                                                    <div class="form-group">
                                                        <label class="font-medium" for="end-date">Number of Developed(Fertile) Eggs</label>
                                                        <input id="end-date" v-model="numberOfDevelopedEggs" class="form-control h-16 border-2 border-grey-dark focus:border-2 focus:border-blue focus:shadow rounded" type="number" min="0" required>
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
        name: 'IncubatorBatchesDevelopmentStatusAdd',
        components: {SideBar, NavBar},
        props: ['incubatorBatchID'],
        created() {

        },
        methods: {
            submit : function () {
                let URL = this.APIHosts.dhis+'/events';

                let dataValues = [
                    {dataElement : "MPAfeD6o3ln", value : this.numberOfDamagedEggs},
                    {dataElement : "BdpUL8f1Yow", value : this.numberOfUnDevelopedEggs},
                    {dataElement : "RTRsM9EDDgI", value : this.numberOfDevelopedEggs,},
                ];

                let payload  = {
                    program: this.programs.incubatorBatches,
                    programStage: "qgoGswZXWAS",
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
            }

        },
        data: () => {
            return {
                numberOfDamagedEggs : "",
                numberOfUnDevelopedEggs : "",
                numberOfDevelopedEggs : "",
                programEvents : []
            }
        }
    }
</script>

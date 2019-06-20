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
                            <li><router-link :to="'/incubator-batches/'+stateIncubatorBatch">{{ this.stateIncubatorBatch }}</router-link></li>
                            <li><a>Development Status</a></li>
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
                                        View the Development Statuses and Manage it below.
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
                                    <router-link class="btn btn-success m-1" :to="'/incubator-batches/'+stateIncubatorBatch+'/development-statuses/add'"><span class="btn-label"><i class="mdi mdi-plus"></i></span> Add New</router-link>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="white-box">
                        <div class="box-title">
                            <i class="fa fa-long-arrow-right"></i> All Statuses ({{this.programEvents.length}})
                        </div>
                        <div class="table-responsive">
                        <table class="table">
                        <thead>
                        <tr>
                        <th>#</th>
                        <th># Damaged Eggs</th>
                        <th># Undeveloped Eggs</th>
                        <th># Developed(FTL) Eggs</th>
                        <th>Created</th>
                        <th>Actions</th>
                        </tr>
                        </thead>

                        <tbody>
                        <tr v-for="(programEvent,index) in programEvents" v-bind:key="index">
                        <td>{{index+1}}</td>
                        <td>{{getValue(programEvent,'MPAfeD6o3ln')}}</td>
                        <td>{{getValue(programEvent,'BdpUL8f1Yow')}}</td>
                        <td>{{getValue(programEvent,'RTRsM9EDDgI')}}</td>
                        <!--<td>Active</td>-->
                        <td>{{programEvent.created}}</td>
                        <td>
                        <router-link class="btn btn-info btn-warning" :to="'/incubator-batches/'+stateIncubatorBatch+'/development-statuses/'+programEvent.event+'/edit'"><span class="btn-label"><i class="fa fa-info-circle"></i></span>Edit</router-link>
                        <a role="button" v-on:click="deleteEvent(programEvent.event)" class="btn btn-info btn-sm" ><span class="btn-label"><i class="fa fa-info-circle"></i></span>Delete</a>
                        </td>
                        </tr>
                        </tbody>
                        </table>
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
        name: 'IncubatorBatchesShowAllDevelopmentStatus',
        components: {SideBar, NavBar},
        props: ['incubatorBatchID'],
        created() {
            // this.stateIncubatorBatch = 'HOVwD1JNNF4';
            this.stateIncubatorBatch = this.incubatorBatchID;
            this.getProgramEvents();
        },
        methods: {
            getValue : function (event, dataElementID) {
                if (event.dataValues.length > 0)
                    return _.find(event.dataValues, ['dataElement', dataElementID]).value;
                else
                    return null
            },
            getProgramEvents : function () {
                let URL = this.APIHosts.dhis+'/events.json?program='+this.programs.incubatorBatches+'&programStage=qgoGswZXWAS&orgUnit='+this.organisationUnit;

                authResource().get(URL)
                    .then((response)=>{
                        this.programEvents.push(...response.data.events)
                    }).catch((error) => {
                    console.log(error)
                })
            },
            deleteEvent : function (eventID) {
                let URL = this.APIHosts.dhis+'/events/'+eventID;

                authResource().delete(URL)
                    .then((response)=>{
                        this.$router.push('/incubator-batches')
                    }).catch((error) => {
                    console.log(error)
                })
            }
        },
        data: () => {
            return {
                programEvents : [],
                stateIncubatorBatch : null
            }
        }
    }
</script>

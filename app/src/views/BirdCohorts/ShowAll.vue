<template>
    <div>
        <div class="white-box">
            <div class="box-title">
                <i class="fa fa-long-arrow-right"></i> All Bird Cohorts ({{this.trackedEntityInstances.length}})
            </div>
            <div class="table-responsive">
                <table class="table">
                    <thead>
                    <tr>
                        <th>#</th>
                        <th>Name</th>
                        <th>Start Date</th>
                        <th>Bird Type</th>
                        <!--<th>Status</th>-->
                        <th>Created</th>
                        <th>Updated</th>
                        <th>Actions</th>
                    </tr>
                    </thead>

                    <tbody>
                    <tr v-for="(trackedEntityInstance,index) in trackedEntityInstances" v-bind:key="index">
                        <td>{{index+1}}</td>
                        <td>{{getValue(trackedEntityInstance,'G0TYKyOzBpO')}}</td>
                        <td>{{getValue(trackedEntityInstance,'ddXNeWjvwp3')}}</td>
                        <td>{{getValue(trackedEntityInstance,'d9XZt8odgnS')}}</td>
                        <!--<td>Active</td>-->
                        <td>{{trackedEntityInstance.created}}</td>
                        <td>{{trackedEntityInstance.lastUpdated}}</td>
                        <td>
                            <router-link class="btn btn-info btn-sm" :to="'/bird-cohorts/'+trackedEntityInstance.trackedEntityInstance"><span class="btn-label"><i class="fa fa-info-circle"></i></span>View</router-link>
                        </td>
                    </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </div>
</template>

<script>
    import authResource from './../../authResource'
    import NavBar from "../../components/Essentials/NavBar";
    import SideBar from "../../components/Essentials/SideBar";
    import _ from "lodash"

    export default {
        name: 'BirdCohortsShowAll',
        components: {SideBar, NavBar},
        created() {
            this.getTrackedEntityInstances();
        },
        methods: {
            getValue : function (trackedEntityInstance, attributeID) {
                if (trackedEntityInstance.attributes.length > 0)
                    return _.find(trackedEntityInstance.attributes, ['attribute', attributeID]).value;
                else
                    return null
            },
            getTrackedEntityInstances : function () {
                let URL = this.APIHosts.dhis+'/trackedEntityInstances.json?ou='+this.organisationUnit+'&program='+this.programs.birdCohorts;

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
                trackedEntityInstances : []
            }
        }
    }
</script>

<template>
    <div>
        <div class="white-box">
            <div class="box-title">
                <i class="fa fa-long-arrow-right"></i> All Conditions ({{this.programEvents.length}})
            </div>
            <!--<div class="table-responsive">-->
                <!--<table class="table">-->
                    <!--<thead>-->
                    <!--<tr>-->
                        <!--<th>#</th>-->
                        <!--<th># Damaged Eggs</th>-->
                        <!--<th># Undeveloped Eggs</th>-->
                        <!--<th># Developed(FTL) Eggs</th>-->
                        <!--<th>Created</th>-->
                        <!--<th>Actions</th>-->
                    <!--</tr>-->
                    <!--</thead>-->

                    <!--<tbody>-->
                    <!--<tr v-for="(programEvent,index) in programEvents" v-bind:key="index">-->
                        <!--<td>{{index+1}}</td>-->
                        <!--<td>{{getValue(programEvent,'UHwvTB7ZG7P')}}</td>-->
                        <!--<td>{{getValue(programEvent,'YVup3DxLdRI')}}</td>-->
                        <!--<td>{{getValue(programEvent,'LPXCbDKz7Bv')}}</td>-->
                        <!--&lt;!&ndash;<td>Active</td>&ndash;&gt;-->
                        <!--<td>{{programEvent.created}}</td>-->
                        <!--<td>-->
                            <!--<router-link class="btn btn-info btn-warning" :to="`/bird-housing/${this.birdHousingID}/conditions/${programEvent.event}/edit`"><span class="btn-label"><i class="fa fa-info-circle"></i></span>Edit</router-link>-->
                            <!--<a role="button" v-on:click="deleteEvent(programEvent.event)" class="btn btn-info btn-sm" ><span class="btn-label"><i class="fa fa-info-circle"></i></span>Delete</a>-->
                        <!--</td>-->
                    <!--</tr>-->
                    <!--</tbody>-->
                <!--</table>-->
            <!--</div>-->
        </div>
    </div>
</template>

<script>
    import authResource from './../../../authResource'
    import NavBar from "../../../components/Essentials/NavBar";
    import SideBar from "../../../components/Essentials/SideBar";
    import _ from "lodash"

    export default {
        name: 'BirdHousingConditionsShowAll',
        components: {SideBar, NavBar},
        props: ['birdHousingID'],
        created() {
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
                let URL = this.APIHosts.dhis+'/events.json?program='+this.programs.birdHousing+'&programStage=qgoGswZXWAS&orgUnit='+this.organisationUnit;

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
                        this.$router.push('/bird-housing')
                    }).catch((error) => {
                    console.log(error)
                })
            }
        },
        data: () => {
            return {
                programEvents : []
            }
        }
    }
</script>

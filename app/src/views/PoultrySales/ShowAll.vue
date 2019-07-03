<template>
    <div>
        <div class="white-box">
            <div class="box-title">
                <i class="fa fa-long-arrow-right"></i> All Poultry Sales ({{this.programEvents.length}})
            </div>
            <div class="table-responsive">
                <table class="table">
                    <thead>
                    <tr>
                        <th>#</th>
                        <th>Item</th>
                        <th>Quantity</th>
                        <th>Price</th>
                        <th>Paid</th>
                        <th>Address</th>
                        <th>Customer</th>
                        <th>Date</th>
                        <th>Created</th>
                        <th>Actions</th>
                    </tr>
                    </thead>

                    <tbody>
                    <tr v-for="(programEvent,index) in programEvents" v-bind:key="index">
                        <td>{{index+1}}</td>
                        <td>{{getValue(programEvent,'F7Ah6NJ9oZJ')}}</td>
                        <td>{{getValue(programEvent,'FU116oRxYpu')}}</td>
                        <td>{{getValue(programEvent,'aWimdOs9sQu')}}</td>
                        <td>{{getValue(programEvent,'d3AGzOPCiec')}}</td>
                        <td>{{getValue(programEvent,'gyOoG35OJAu')}}</td>
                        <td>{{getValue(programEvent,'gypBpXv7h99')}}</td>
                        <td>{{getValue(programEvent,'yqRZZUNiVma')}}</td>
                        <td>{{programEvent.created}}</td>
                        <td>
                            <router-link class="btn btn-info btn-warning" :to="'/poultry-sales/'+programEvent.event+'/edit'"><span class="btn-label"><i class="fa fa-info-circle"></i></span>Edit</router-link>
                            <a role="button" v-on:click="deleteEvent(programEvent.event)" class="btn btn-info btn-sm" ><span class="btn-label"><i class="fa fa-info-circle"></i></span>Delete</a>
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
        name: 'PoultrySalesShowAll',
        components: {SideBar, NavBar},
        created() {
            this.getProgramEvents();
        },
        methods: {
            getValue : function (event, dataElementID) {
                if (event.dataValues.length > 0)
                {
                    let val = _.find(event.dataValues, ['dataElement', dataElementID]);
                    return val?val.value:null;
                }
                else
                    return null
            },
            getProgramEvents : function () {
                let URL = this.APIHosts.dhis+'/events.json?program='+this.programs.poultrySales+'&orgUnit='+this.organisationUnit;

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
                        this.$router.push('/poultry-sales')
                    }).catch((error) => {
                    console.log(error)
                })
            }
        },
        data: () => {
            return {
                programEvents : [],
            }
        }
    }
</script>

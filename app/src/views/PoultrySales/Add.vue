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
                        <h4 class="page-title"> Poultry Sales </h4>
                    </div>
                    <div class="col-lg-9 col-sm-8 col-md-8 col-xs-12">
                        <button class="waves-light btn btn-info btn-circle pull-right m-l-20"><i class="fa fa-info text-white"></i></button>
                        <ol class="breadcrumb">
                            <li><router-link to="/">Dashboard</router-link></li>
                            <li><router-link to="/poultry-sales">Poultry Sales</router-link></li>
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
                                        Use the Input Form below to Add a New Sale.
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
                                            Add Transaction
                                        </div>
                                        <div class="row flex">
                                            <div class="col-md-2 text-center">
                                                <i class="fa fa-plus fa-3x"></i>
                                            </div>
                                            <div class="col-md-8">
                                                <form v-on:submit.prevent="submit">
                                                    <div class="form-group">
                                                        <label class="font-medium" for="bird-types">Item</label>
                                                        <select id="bird-types" v-model="item" class="form-control h-16 border-2 border-grey-dark focus:border-2 focus:border-blue focus:shadow rounded" required>
                                                            <option v-for="(product, index) in poultryProducts" :key="index" :value="product.code">{{ product.name}}</option>
                                                        </select>
                                                    </div>

                                                    <div class="form-group">
                                                        <label class="font-medium" for="2">Quantity</label>
                                                        <input id="2" v-model="quantity" class="form-control h-16 border-2 border-grey-dark focus:border-2 focus:border-blue focus:shadow rounded" type="number" min="0" required>
                                                    </div>

                                                    <div class="form-group">
                                                        <label class="font-medium" for="3">Price</label>
                                                        <input id="3" v-model="price" class="form-control h-16 border-2 border-grey-dark focus:border-2 focus:border-blue focus:shadow rounded" type="number" min="0" required>
                                                    </div>

                                                    <div class="form-group">
                                                        <label class="font-medium" for="3.5">Paid</label>
                                                        <select id="3.5" v-model="paid" class="form-control h-16 border-2 border-grey-dark focus:border-2 focus:border-blue focus:shadow rounded" required>
                                                            <option v-for="(val, index) in [{code : true, name : 'Yes'}, {code : false, name : 'No'}]" :key="index" :value="val.code">{{ val.name}}</option>
                                                        </select>
                                                    </div>

                                                    <div class="form-group">
                                                        <label class="font-medium" for="4">Address</label>
                                                        <input id="4" v-model="address" class="form-control h-16 border-2 border-grey-dark focus:border-2 focus:border-blue focus:shadow rounded" type="text" required>
                                                    </div>

                                                    <div class="form-group">
                                                        <label class="font-medium" for="5">Customer</label>
                                                        <input id="5" v-model="customer" class="form-control h-16 border-2 border-grey-dark focus:border-2 focus:border-blue focus:shadow rounded" type="text" required>
                                                    </div>

                                                    <div class="form-group">
                                                        <label class="font-medium" for="6">Transaction Date</label>
                                                        <input id="6" v-model="date" class="form-control h-16 border-2 border-grey-dark focus:border-2 focus:border-blue focus:shadow rounded" type="date" required>
                                                    </div>

                                                    <div class="form-group flex justify-end">
                                                        <button class="btn btn-success m-1" type="submit"><span class="btn-label"><i class="fa fa-save"></i></span> Save</button>
                                                        <router-link :to="'/poultry-sales'"  class="btn btn-default m-1">Cancel</router-link>
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
    import authResource from '../../authResource'
    import NavBar from "../../components/Essentials/NavBar";
    import SideBar from "../../components/Essentials/SideBar";
    export default {
        name: 'PoultrySalesAdd',
        components: {SideBar, NavBar},
        created() {
            this.getPoultryProducts();
        },
        methods: {
            getPoultryProducts : function () {
                let URL = this.APIHosts.dhis+'/optionSets/'+this.optionSets.poultryProducts+'.json?fields=displayName,options[id,name,code]';

                authResource().get(URL)
                    .then((response)=>{
                        this.poultryProducts.push(...response.data.options)

                    }).catch((error) => {
                    console.log(error)
                })
            },
            submit : function () {
                let URL = this.APIHosts.dhis+'/events';

                let dataValues = [
                    {dataElement : "F7Ah6NJ9oZJ", value : this.item},
                    {dataElement : "FU116oRxYpu", value : this.quantity},
                    {dataElement : "aWimdOs9sQu", value : this.price,},
                    {dataElement : "d3AGzOPCiec", value : this.paid,},
                    {dataElement : "gyOoG35OJAu", value : this.address,},
                    {dataElement : "gypBpXv7h99", value : this.customer,},
                    {dataElement : "yqRZZUNiVma", value : this.date,},
                ];

                let payload  = {
                    program: this.programs.poultrySales,
                    orgUnit: this.organisationUnit,
                    status : "ACTIVE",
                    eventDate : this.dateToday(),
                    storedBy : JSON.parse(sessionStorage.getItem('user')).userCredentials.username,
                    dataValues: dataValues,
                };

                authResource().post(URL, payload)
                    .then((response)=>{
                        this.$router.push('/poultry-sales')

                    }).catch((error) => {
                    console.log('Did not work')
                })
            }

        },
        data: () => {
            return {
                item : ""  ,
                quantity : "",
                price : "",
                paid : "",
                address : "",
                customer : "",
                date : "",
                programEvents : [],
                poultryProducts : [],
            }
        }
    }
</script>

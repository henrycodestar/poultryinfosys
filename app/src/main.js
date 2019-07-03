import Vue from 'vue'
import App from './App.vue'

import router from './router'
import VeeValidate from 'vee-validate'

import { library } from '@fortawesome/fontawesome-svg-core'
import { faSpinner, faLock, faCheck, faSearch, faPlus, faSave} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

Vue.config.silent = true
library.add(faSpinner, faLock, faCheck, faSearch, faPlus, faSave)

Vue.component('font-awesome-icon', FontAwesomeIcon)
Vue.use(VeeValidate, {
    classes:true
});
Vue.use(require('vue-moment'))

//Vue.config.productionTip = false

Vue.mixin({
    methods : {
        dateToday : function () {
            var today = new Date();
            var dd = String(today.getDate()).padStart(2, '0');
            var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
            var yyyy = today.getFullYear();

            return yyyy + '-' + mm + '-' + dd
        }
    },
    data : function()
    {
        return {
            APIHosts : {
                dhis : 'http://localhost:8080/api',
            },
            organisationUnit : "NYQMMJZJkmj",
            programs : {
                incubatorBatches : "ieL3KoZa9a3",
                birdCohorts : "j6gDtw5XAzB",
                birdHousing : "v7hAN6QcXgS",
                poultrySales : "SCvoHavteGk"
            },
            optionSets : {
                birds : "pW1TuVBd2xw",
                incubators : "pW1TuVBd2xw",
                vaccines : "yF7KsLs1Ewq",
                poultryProducts : "ZHjnPlLzWmq"
            }
        }
    }
});

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')

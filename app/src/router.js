import Vue from 'vue'
import Router from 'vue-router'
import LoginPage from "./views/LoginPage";
import Index from "./views/Index";
import IncubatorBatchesHome from "./views/IncubatorBatches/Index";
import IncubatorBatchesAdd from "./views/IncubatorBatches/Add";
import IncubatorBatchesShow from "./views/IncubatorBatches/Show";
import IncubatorBatchesEdit from "./views/IncubatorBatches/Edit";
import IncubatorBatchesSetterLoading from "./views/IncubatorBatches/SetterLoading/Index";
import IncubatorBatchesHatching from "./views/IncubatorBatches/Hatching/Index";
import IncubatorBatchesDevelopmentStatus from "./views/IncubatorBatches/DevelopmentStatus/Index";
import IncubatorBatchesDevelopmentStatusAdd from "./views/IncubatorBatches/DevelopmentStatus/Add";
import IncubatorBatchesDevelopmentStatusEdit from "./views/IncubatorBatches/DevelopmentStatus/Edit";
import BirdCohortsHome from "./views/BirdCohorts/Index";
import BirdCohortsAdd from "./views/BirdCohorts/Add";
import BirdCohortsShow from "./views/BirdCohorts/Show";
import BirdCohortsEdit from "./views/BirdCohorts/Edit";
import BirdCohortsEntry from "./views/BirdCohorts/Entry/Index";
import BirdCohortsVaccines from "./views/BirdCohorts/Vaccines/Index";
import BirdCohortsVaccinesAdd from "./views/BirdCohorts/Vaccines/Add";
import BirdCohortsVaccinesEdit from "./views/BirdCohorts/Vaccines/Edit";
import BirdCohortsDiseases from "./views/BirdCohorts/Diseases/Index";
import BirdCohortsDiseasesAdd from "./views/BirdCohorts/Diseases/Add";
import BirdCohortsDiseasesEdit from "./views/BirdCohorts/Diseases/Edit";
import BirdCohortsLayings from "./views/BirdCohorts/Layings/Index";
import BirdCohortsLayingsAdd from "./views/BirdCohorts/Layings/Add";
import BirdCohortsLayingsEdit from "./views/BirdCohorts/Layings/Edit";
import BirdHousingHome from "./views/BirdHousing/Index";
import BirdHousingAdd from "./views/BirdHousing/Add";
import BirdHousingShow from "./views/BirdHousing/Show";
import BirdHousingEdit from "./views/BirdHousing/Edit";
import BirdHousingConditions from "./views/BirdHousing/Conditions/Index";
import BirdHousingConditionsAdd from "./views/BirdHousing/Conditions/Add";
import BirdHousingConditionsEdit from "./views/BirdHousing/Conditions/Edit";

Vue.use(Router);

const router =  new Router({
    mode: 'history',
    routes: [
        {
            path: '/login',
            name: 'login',
            component: LoginPage,
            beforeEnter: (to, from, next) => {
                if (sessionStorage.getItem('user')) {
                    next('/');
                }
                next();
            }
        },
        {
            path: '/',
            name: 'index',
            component: Index,
            meta: {
                requiresAuth: true
            }
        },
        {
            path: '/incubator-batches',
            name: 'incubatorBatchesHome',
            component: IncubatorBatchesHome,
            meta: {
                requiresAuth: true
            }
        },
        {
            path: '/incubator-batches/add',
            name: 'incubatorBatchesAdd',
            component: IncubatorBatchesAdd,
            meta: {
                requiresAuth: true
            }
        },
        {
            path: '/incubator-batches/:incubatorBatchID',
            name: 'incubatorBatchesShow',
            component: IncubatorBatchesShow,
            props : true,
            meta: {
                requiresAuth: true
            }
        },
        {
            path: '/incubator-batches/:incubatorBatchID/edit',
            name: 'incubatorBatchesEdit',
            component: IncubatorBatchesEdit,
            props : true,
            meta: {
                requiresAuth: true
            }
        },
        {
            path: '/incubator-batches/:incubatorBatchID/setter-loading',
            name: 'incubatorBatchesSetterLoading',
            component: IncubatorBatchesSetterLoading,
            props : true,
            meta: {
                requiresAuth: true
            }
        },
        {
            path: '/incubator-batches/:incubatorBatchID/hatching',
            name: 'incubatorBatchesHatching',
            component: IncubatorBatchesHatching,
            props : true,
            meta: {
                requiresAuth: true
            }
        },
        {
            path: '/incubator-batches/:incubatorBatchID/development-statuses',
            name: 'incubatorBatchesDevelopmentStatus',
            component: IncubatorBatchesDevelopmentStatus,
            props : true,
            meta: {
                requiresAuth: true
            }
        },
        {
            path: '/incubator-batches/:incubatorBatchID/development-statuses/add',
            name: 'incubatorBatchesDevelopmentStatusAdd',
            component: IncubatorBatchesDevelopmentStatusAdd,
            props : true,
            meta: {
                requiresAuth: true
            }
        },
        {
            path: '/incubator-batches/:incubatorBatchID/development-statuses/:developmentStatusID/edit',
            name: 'incubatorBatchesDevelopmentStatusEdit',
            component: IncubatorBatchesDevelopmentStatusEdit,
            props : true,
            meta: {
                requiresAuth: true
            }
        }


        ,
        {
            path: '/bird-cohorts',
            name: 'BirdCohortsHome',
            component: BirdCohortsHome,
            meta: {
                requiresAuth: true
            }
        },
        {
            path: '/bird-cohorts/add',
            name: 'BirdCohortsAdd',
            component: BirdCohortsAdd,
            meta: {
                requiresAuth: true
            }
        },
        {
            path: '/bird-cohorts/:birdCohortID',
            name: 'BirdCohortsShow',
            component: BirdCohortsShow,
            props : true,
            meta: {
                requiresAuth: true
            }
        },
        {
            path: '/bird-cohorts/:birdCohortID/edit',
            name: 'BirdCohortsEdit',
            component: BirdCohortsEdit,
            props : true,
            meta: {
                requiresAuth: true
            }
        },
        {
            path: '/bird-cohorts/:birdCohortID/entry',
            name: 'BirdCohortsEntry',
            component: BirdCohortsEntry,
            props : true,
            meta: {
                requiresAuth: true
            }
        },
        {
            path: '/bird-cohorts/:birdCohortID/vaccines',
            name: 'BirdCohortsVaccines',
            component: BirdCohortsVaccines,
            props : true,
            meta: {
                requiresAuth: true
            }
        },
        {
            path: '/bird-cohorts/:birdCohortID/vaccines/add',
            name: 'BirdCohortsVaccinesAdd',
            component: BirdCohortsVaccinesAdd,
            props : true,
            meta: {
                requiresAuth: true
            }
        },
        {
            path: '/bird-cohorts/:birdCohortID/vaccines/:vaccineID/edit',
            name: 'BirdCohortsVaccinesEdit',
            component: BirdCohortsVaccinesEdit,
            props : true,
            meta: {
                requiresAuth: true
            }
        },
        {
            path: '/bird-cohorts/:birdCohortID/diseases',
            name: 'BirdCohortsDiseases',
            component: BirdCohortsDiseases,
            props : true,
            meta: {
                requiresAuth: true
            }
        },
        {
            path: '/bird-cohorts/:birdCohortID/diseases/add',
            name: 'BirdCohortsDiseasesAdd',
            component: BirdCohortsDiseasesAdd,
            props : true,
            meta: {
                requiresAuth: true
            }
        },
        {
            path: '/bird-cohorts/:birdCohortID/diseases/:diseaseID/edit',
            name: 'BirdCohortsDiseasesEdit',
            component: BirdCohortsDiseasesEdit,
            props : true,
            meta: {
                requiresAuth: true
            }
        },
        {
            path: '/bird-cohorts/:birdCohortID/layings',
            name: 'BirdCohortsVLayings',
            component: BirdCohortsLayings,
            props : true,
            meta: {
                requiresAuth: true
            }
        },
        {
            path: '/bird-cohorts/:birdCohortID/layings/add',
            name: 'BirdCohortsLayingsAdd',
            component: BirdCohortsLayingsAdd,
            props : true,
            meta: {
                requiresAuth: true
            }
        },
        {
            path: '/bird-cohorts/:birdCohortID/layings/:layingID/edit',
            name: 'BirdCohortsLayingsEdit',
            component: BirdCohortsLayingsEdit,
            props : true,
            meta: {
                requiresAuth: true
            }
        }


        ,
        {
            path: '/bird-housing',
            name: 'BirdHousingHome',
            component: BirdHousingHome,
            meta: {
                requiresAuth: true
            }
        },
        {
            path: '/bird-housing/add',
            name: 'BirdHousingAdd',
            component: BirdHousingAdd,
            meta: {
                requiresAuth: true
            }
        },
        {
            path: '/bird-housing/:birdHousingID',
            name: 'BirdHousingShow',
            component: BirdHousingShow,
            props : true,
            meta: {
                requiresAuth: true
            }
        },
        {
            path: '/bird-housing/:birdHousingID/edit',
            name: 'BirdHousingEdit',
            component: BirdHousingEdit,
            props : true,
            meta: {
                requiresAuth: true
            }
        },
        {
            path: '/bird-housing/:birdHousingID/conditions',
            name: 'BirdHousingConditions',
            component: BirdHousingConditions,
            props : true,
            meta: {
                requiresAuth: true
            }
        },
        {
            path: '/bird-housing/:birdHousingID/conditions/add',
            name: 'BirdHousingConditionsAdd',
            component: BirdHousingConditionsAdd,
            props : true,
            meta: {
                requiresAuth: true
            }
        },
        {
            path: '/bird-housing/:birdHousingID/conditions/:conditionID/edit',
            name: 'BirdHousingConditionsEdit',
            component: BirdHousingConditionsEdit,
            props : true,
            meta: {
                requiresAuth: true
            }
        },
    ]
});

router.beforeEach((to, from, next)=>{
    if (to.meta.requiresAuth)
    {
        if (sessionStorage.getItem('user'))
            next();
        else
            next({ path : '/login'})
    }else
    {
        next();
    }

});

export default router;

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

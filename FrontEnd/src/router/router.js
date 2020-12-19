// 用于配置路由列表
import Home from '@/views/Home'
import Login from '@/views/Login'


export default [
    {
        path:'/',
        name:'home',
        alias:'/home',
        component:Home
    },
    {
        path: '/login',
        name: 'login',
        component: Login
    },
    // 懒加载,访问页面时加载vue组件
    {
        path: '/register',
        name: 'register',
        component: () => import('@/views/Register.vue')
    },
    {
        path: '/about',
        name: 'about',
        component: () => import('@/views/About.vue'),
       props:route =>({
           food: route.query.food
       })
    },
    // 动态路由匹配
    {
        path:'/user/:name',
        component: () =>import('@/views/User.vue'),
        props:true
    },
    // 嵌套路由
    {
        path:'/parent',
        name:'parent',
        // meta:{requireAuth:true},
        component: () => import('@/views/Parent.vue'),
        children:[
                {
                    path:'child',
                    component: () => import('@/views/child.vue')
                }
        ]
    },
    // 重定向
    {
       path:'/personal' ,
       component: () => import('@/components/Personal.vue'),
       redirect: to => {
           return{
            //    '/parent'
               name:'parent'
           }
       }
    },
    // 嵌套命名视图同级展示
    {
        path:'/settings',
        components: {
            default: () => import('@/components/UserSettings.vue'),
            foot: () => import('@/components/foot.vue')
        },
        children: [{
            path:'emails',
            component: () => import('@/components/UserEmails.vue')
        },{
            path:'profile',
            components:{
                default: () => import('@/components/UserProfile.vue'),
                helper: () => import('@/components/Userhelper.vue')
            }
        }]
    },
    // 404处理,必须放置在最后
    {
        path:'*',
        component: () => import('@/views/error_404.vue')
    }
]

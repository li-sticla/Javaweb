// 用于配置路由列表
import Login from '@/views/Login'
import Nav from '@/components/Nav'
import foot from '@/components/foot'
import Carousel from '@/components/Carousel'
import Home from '@/views/Home'
export default [
    {
        path:'/',
        name:'home',
        alias:'/home',
        components:{
            default: Nav,
            carousel:  Carousel,
            body: Home,
            foot: foot,
        },
    },
    {
        path:'/:pageNo',
        components:{
            default: Nav,
            carousel: Carousel,
            body:Home,
            foot: foot
        }
    },
    {
        path: '/login',
        name: 'login',
        components: {
            default: Login,
            foot: foot
        }
    },
    // 懒加载,访问页面时加载vue组件
    {
        path: '/register',
        name: 'register',
        components: {
            default: () => import('@/views/Register.vue'),
            foot: foot
        }
    },
    {
        path: '/news/:newsId',
        name: 'news',
        components:{
            default: () => import('@/views/News.vue'),
            foot: foot
        } 
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
            foot: foot
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

// 用于创建路由实例
import Vue from 'vue'
import Router from 'vue-router'
import routes from './router'
// 加载router
Vue.use(Router)
// 创建实例
const router= new Router({
  routes,
  mode:'history'
})
// 登录判断
// const HAS_LOGINED=false
// 创建全局导航守卫
// router.beforeEach((to,from,next)=>{
    
//   let flag = sessionStorage.getItem('flag ')

//   if(to.meta.requireAuth == true){ // 需要登录权限进入的路由
//       if(!flag){                   // 获取不到登录信息
//           next({
//               path: '/login'
//           })
//       }else{                       // 获取到登录信息，进行下一步
//           return next();
//       }
//   }else{                           // 不需要登录权限的路由直接进行下一步
//       return next();
//   }
// })
// 暴露路由接口
export default router

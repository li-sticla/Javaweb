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
// 导航守卫
// 使用 router.beforeEach 注册一个全局前置守卫，判断用户是否登陆
router.beforeEach((to, from, next) => {
if (to.path === '/login') {
    next();
} else {
  let token = localStorage.getItem('token');

  if (token === 'null' || token === '') {
    next('/login');
  } else {
    next();
  }
}
});
// 暴露路由
export default router

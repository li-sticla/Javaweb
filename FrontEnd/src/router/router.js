// 用于配置路由列表
import Login from "@/views/Login";
import Nav from "@/components/Nav";
import foot from "@/components/foot";
import Carousel from "@/components/Carousel";
import Home from "@/views/Home";
export default [
  {
    path: "/",
    name: "home",
    alias: "/home",
    components: {
      default: Nav,
      carousel: Carousel,
      body: Home,
      foot: foot,
    },
  },
  {
    path: "/login",
    name: "login",
    components: {
      default: Login,
      foot: foot,
    },
  },
  // 懒加载,访问页面时加载vue组件
  {
    path: "/register",
    name: "register",
    components: {
      default: () => import("@/views/Register.vue"),
      foot: foot,
    },
  },
    // 动态路由匹配
  {
    path: "/news/detail/:newsId",
    name: "news",
    components: {
      default: Nav,
      body: () => import("@/views/News.vue"),
      foot: foot,
    },
  },
  {
    path: "/user",
    components: {
      default: Nav,
      body: () => import("@/views/User.vue"),
      foot: foot,
    },
  },
  // 新闻发布
  {
    path: "/news/publish",
    components: {
      default: Nav,
      body: () => import("@/views/Publish.vue"),
      foot: foot,
    },
  },
  {
    path: "/news/edit/:newsId",
    name: "edit",
    components: {
      default: Nav,
      body: () => import("@/views/Edit.vue"),
      foot: foot,
    },
  },
  // 404处理,必须放置在最后
  {
    path: "*",
    component: () => import("@/views/error_404.vue"),
  },
];

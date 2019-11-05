import Vue from "vue";
import Router from "vue-router";
import { Toast } from "mint-ui";

import store from "@/store/index";

Vue.use(Router);
const Home = () => import("views/home/Home");
const Guide = () => import("views/home/Guide");
const Activity = () => import("views/activity/Activity");
const Market = () => import("views/market/Market");
const Personal = () => import("views/personal/Personal");
const Login = () => import("views/login/Login");
const Register = () => import("views/login/Register");
const ResetPassword = () => import("views/login/ResetPassword");
const MsgLogin = () => import("views/login/MsgLogin");
const Donate = () => import("views/donation/Donate");
const DonateForm = () => import("views/donation/DonateForm");
const MoreDynamic = () => import("views/dynamic/MoreDynamic");
const DynamicDetail = () => import("views/dynamic/DynamicDetail");
const MyAppointment = () => import("views/personal/MyAppointment");
const MyIntegral = () => import("views/personal/MyIntegral");
const GoodDetail = () => import("views/market/GoodDetail");
const CheckIn = () => import("views/checkin/CheckIn");

import { getCookie } from "@/common/utils.js";
let router = new Router({
    mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      redirect: "/login",
      meta: {
        isLogin: false
      }
    },
    {
      path: "/home",
      component: Home,
      meta: {
        isLogin: true
      }
    },
    {
      path: "/activity",
      component: Activity,
      meta: {
        isLogin: true
      }
    },
    {
      path: "/market",
      component: Market,
      meta: {
        isLogin: true
      }
    },
    {
      path: "/personal",
      component: Personal,
      meta: {
        isLogin: true
      }
    },
    {
      path: "/login",
      component: Login,
      meta: {
        isLogin: true
      }
    },
    {
      path: "/register",
      component: Register,
      meta: {
        isLogin: true
      }
    },
    {
      path: "/resetPassword",
      component: ResetPassword,
      meta: {
        isLogin: true
      }
    },
    {
      path: "/msgLogin",
      component: MsgLogin,
      meta: {
        isLogin: true
      }
    },
    {
      path: "/donate",
      component: Donate,
      meta: {
        isLogin: true
      }
    },
    {
      path: "/donateForm",
      component: DonateForm,
      meta: {
        isLogin: true
      }
    },
    {
      path: "/moreDynamic",
      component: MoreDynamic,
      meta: {
        isLogin: true
      }
    },
    {
      path: "/dynamicDetail",
      component: DynamicDetail,
      meta: {
        isLogin: true
      }
    },
    {
      path: "/myAppointment",
      component: MyAppointment,
      meta: {
        isLogin: true
      }
    },
    {
      path: "/myIntegral",
      component: MyIntegral,
      meta: {
        isLogin: true
      }
    },
    {
      path: "/goodDetail",
      component: GoodDetail,
      meta: {
        isLogin: true
      }
    },
    {
      path: "/checkin",
      component: CheckIn,
      meta: {
        isLogin: true
      }
    },
    {
      path: "/guide",
      component: Guide,
      meta: {
        isLogin: true
      }
    }
  ]
});
//全局导航守卫
router.beforeEach((to, from, next) => {
  let getFlag = getCookie(
    "Flag"
  ); /* 这里是判断用户是否登录过，因为在用户登录后会在cookice内存储Flag=isLogin */
  if (getFlag === "isLogin") {
    /* 如果存在Flag并且为isLogin意味着用户登录，这时修改vux内state下isLogin的状态 */
    store.state.isLogin = true;
    next();
  } else {
    if (to.meta.isLogin) {
      /* 如果没有登录状态且要去往需要权限的路径时跳转登录页并进行提示 */
      Toast({
        message: "请先登录",
        position: "bottom",
        duration: 5000
      });
      next({
        path: "/"
      });
    } else {
      next();
    }
  }
});
export default router;

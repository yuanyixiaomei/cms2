import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

//导入组件
import login from "@/pages/login"
import home from "@/pages/home"

export default new Router({
  routes: [{
      path: "/login",
      component: login
    },
    {
      path: "/home",
      component: home
    },
    {
      path: "/",
      component: home
    }
  ]
})

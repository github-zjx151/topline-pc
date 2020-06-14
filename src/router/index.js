// 导入vue
import Vue from 'vue'
// 导入路由
import VueRouter from 'vue-router'
Vue.use(VueRouter)

const routes = [
  // 路由重定向
  { path: '/', redirect: '/login', component: () => import('@/views/login') }, // 以路由懒加载的方式导入组件
  // login的路由
  { path: '/login', component: () => import('@/views/login') },
  // 布局组件的路由
  {
    path: '/layout',
    component: () => import('@/views/layout'),
    // 嵌套路由, 加载子路由时会优先加载出父路由
    children: [
      // home首页路由
      { path: '/home', component: () => import('@/views/home') },
      // 发布文章路由
      { path: '/publish', component: () => import('@/views/publish') },
      // 内容列表路由
      { path: '/contentList', component: () => import('@/views/contentList') },
      // 评论列表路由
      { path: '/commentList', component: () => import('@/views/commentList') },
      // 素材管理路由
      { path: '/material', component: () => import('@/views/material') },
      // 图文数据路由
      { path: '/imageText', component: () => import('@/views/imageText') },
      // 粉丝概况路由
      { path: '/fanProfile', component: () => import('@/views/fanProfile') },
      // 粉丝画像路由
      { path: '/fanImage', component: () => import('@/views/fanImage') },
      // 粉丝列表路由
      { path: '/fanList', component: () => import('@/views/fanList') },
      // 用户信息路由
      { path: '/userInfo', component: () => import('@/views/userInfo') }
    ]
  }
]

const router = new VueRouter({
  routes
})
// 使用路由导航守卫来判断用户是否登录
router.beforeEach((to, from, next) => {
  // to: 跳转到达的路由,from: 发起跳转的路由,next: 一个函数,是否执行后续代码
  if (to.path !== '/login') {
    // 获取本地存储的数据,有数据则表示登录过
    const userinfo = window.localStorage.getItem('userinfo')
    // 判断用户是否登录
    if (!userinfo) {
      Vue.prototype.$message.error('请先登录')
      router.push('/login')
    } else {
      next()
    }
  } else {
    next()
  }
})

export default router

import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Homepage',
      component: () => import('@/views/Homepage'),
      meta: {
        title: 'Stuff - Homepage',
        metaTags: [
          {
            name: 'description',
            content: 'Lightweight personal journal that parse markdown writing into articles.'
          },
          {
            property: 'og:description',
            content: 'Lightweight personal journal that parse markdown writing into articles.'
          }
        ]
      }
    },
    {
      path: '/guides',
      name: 'Guides',
      component: () => import('@/views/Guides'),
    },
    {
      path: '/articles',
      name: 'Article',
      component: () => import('@/views/Articles'),
    },
    {
      path: '/articles/:id',
      name: 'ArticleContent',
      component: () => import('@/views/Content'),
      props: true
    },
    {
      path: '/guides/:id',
      name: 'GuideContent',
      component: () => import('@/views/Content'),
      props: true
    }
  ]
})
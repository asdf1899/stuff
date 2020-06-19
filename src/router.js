import Vue from 'vue'
import Router from 'vue-router'
import Homepage from '@/views/Homepage'
import Content from '@/views/Content'
import Guides from '@/views/Guides'
import Articles from '@/views/Articles'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Homepage',
      component: Homepage,
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
      component: Guides,
    },
    {
      path: '/articles',
      name: 'Article',
      component: Articles,
    },
    {
      path: '/articles/:id',
      name: 'ArticleContent',
      component: Content,
      props: true
    },
    {
      path: '/guides/:id',
      name: 'GuideContent',
      component: Content,
      props: true
    }
  ]
})
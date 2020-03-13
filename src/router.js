import Vue from 'vue'
import Router from 'vue-router'
import Homepage from '@/components/Homepage'
import ArticleContent from '@/components/ArticleContent'
//import ArticleEntries from './statics/articles.json';

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
      path: '/:id',
      name: 'ArticleContent',
      component: ArticleContent,
      props: true
    }
    /*
    ArticleEntries.map(entry => ({
      path: `/${entry}`,
      name: entry,
      component: () => import(`../markdowns/${entry}.md`)
    }))*/
  ]
})
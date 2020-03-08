import Vue from 'vue'
import Router from 'vue-router'
import Homepage from '@/components/Homepage'
//import ArticleEntries from '../statics/articles.json';

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Homepage',
      component: Homepage
    },
    {
      path: '/1',
      name: 'Homepage',
      component: Homepage
    }
    /*ArticleEntries.map( id => ({
        path: '/articles/${id}',
        name: id,
        component: Homepage
    }))
    ArticleEntries.map(entry => ({
      path: `/${entry}`,
      name: entry,
      component: () => import(`../markdowns/${entry}.md`)
    }))*/
  ]
})
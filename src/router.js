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
      component: Homepage
    },
    {
      path: '/stuff/:id',
      name: 'ArticleContent',
      component: ArticleContent
    }
    /*ArticleEntries.map(entry => ({
      path: `/${entry}`,
      name: entry,
      component: () => import(`../markdowns/${entry}.md`)
    }))*/
  ]
})
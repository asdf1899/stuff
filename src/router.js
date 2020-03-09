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
      redirect: '/docs/'
    },
    {
      path: '/docs/:id',
      name: 'ArticleContent',
      component: ArticleContent,
      props: true
    },
    {
      path: '/docs/',
      name: 'Homepage',
      component: Homepage
    }/*
    ArticleEntries.map(entry => ({
      path: `/${entry}`,
      name: entry,
      component: () => import(`../markdowns/${entry}.md`)
    }))*/
  ]
})
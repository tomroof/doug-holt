'use strict'

import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)


const _48b1a7a4 = () => import('/Users/valery/Developer/nuxt-doug-holt/pages/index.vue' /* webpackChunkName: "pages/index" */)

const _23eb8336 = () => import('/Users/valery/Developer/nuxt-doug-holt/pages/Journal/index.vue' /* webpackChunkName: "pages/Journal" */)

const _33617149 = () => import('/Users/valery/Developer/nuxt-doug-holt/pages/About.vue' /* webpackChunkName: "pages/About" */)

const _3d41b24e = () => import('/Users/valery/Developer/nuxt-doug-holt/pages/Admin/index.vue' /* webpackChunkName: "pages/Admin" */)

const _1dabf35e = () => import('/Users/valery/Developer/nuxt-doug-holt/pages/Gallery/gallery.vue' /* webpackChunkName: "pages/Gallery-gallery" */)

const _761c7a28 = () => import('/Users/valery/Developer/nuxt-doug-holt/pages/Gallery/_cat.vue' /* webpackChunkName: "pages/Gallery-cat" */)

const _f2dce53a = () => import('/Users/valery/Developer/nuxt-doug-holt/pages/Journal/_post.vue' /* webpackChunkName: "pages/Journal-post" */)



const scrollBehavior = (to, from, savedPosition) => {
  // savedPosition is only available for popstate navigations.
  if (savedPosition) {
    return savedPosition
  } else {
    let position = {}
    // if no children detected
    if (to.matched.length < 2) {
      // scroll to the top of the page
      position = { x: 0, y: 0 }
    }
    else if (to.matched.some((r) => r.components.default.options.scrollToTop)) {
      // if one of the children has scrollToTop option set to true
      position = { x: 0, y: 0 }
    }
    // if link has anchor,  scroll to anchor by returning the selector
    if (to.hash) {
      position = { selector: to.hash }
    }
    return position
  }
}


export function createRouter () {
  return new Router({
    mode: 'history',
    base: '/',
    linkActiveClass: 'nuxt-link-active',
    linkExactActiveClass: 'nuxt-link-exact-active',
    scrollBehavior,
    routes: [
  		{
			path: "/",
			component: _48b1a7a4,
			name: "index"
		},
		{
			path: "/Journal",
			component: _23eb8336,
			name: "Journal"
		},
		{
			path: "/About",
			component: _33617149,
			name: "About"
		},
		{
			path: "/Admin",
			component: _3d41b24e,
			name: "Admin"
		},
		{
			path: "/Gallery/gallery",
			component: _1dabf35e,
			name: "Gallery-gallery"
		},
		{
			path: "/Gallery/:cat?",
			component: _761c7a28,
			name: "Gallery-cat"
		},
		{
			path: "/Journal/:post",
			component: _f2dce53a,
			name: "Journal-post"
		}
    ]
  })
}

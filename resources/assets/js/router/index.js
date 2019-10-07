import Vue from 'vue'
import Router from 'vue-router'
import Nprogress from 'nprogress'
import Paths from './path';

Vue.use(Router)

const router =  new Router({
  mode: 'history',
	routes: Paths
});

// navigation guards before each
router.beforeEach((to, from, next) => {
	Nprogress.start()
	next();
})

// navigation guard after each
router.afterEach((to, from) => {
	Nprogress.done()
})

export default router

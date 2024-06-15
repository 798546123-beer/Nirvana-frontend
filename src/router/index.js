import Vue from 'vue';
// import VueRouter from 'vue-router';
import Router from 'vue-router';
// const originalPush = Router.prototype.push
// Router.prototype.push = function push(location) {
//     return originalPush.call(this, location).catch(err => err)
// }
Vue.use(Router)
const routes = [
	{
		path: '/',
		name: 'Home',
		component: () =>
			import('../components/Home.vue'),
		meta: {
			allowBack: false
		}
	},
	{
		path: '/login',
		name: 'login',
		component: () =>
			import('../components/Login.vue'),
		meta: {
			allowBack: false
		}
	},
]

// const router = new VueRouter({
//     // mode: 'history',
//     routes
// })

const createRouter = () => new Router({
	scrollBehavior: () => ({
		y: 0
	}),
	routes: routes
})

const router = createRouter()
export function resetRouter() {
	const newRouter = createRouter()
	// router.matcher = newRouter.matcher
	// router.matcher = new VueRouter({
	// mode: 'history',
	//     routes:
	// }).matcher
}
// const VueRouterPush = VueRouter.prototype.push
// VueRouter.prototype.push = function push(to) {
//     return VueRouterPush.call(this, to).catch(err => err)
// }

export default router;
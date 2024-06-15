import Vue from 'vue'
import App from './App.vue'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import './assets/global.css';
import axios from "axios";
import VueRouter from 'vue-router';
import router from './router';
import store from './store';
import Element from 'element-ui';
Vue.prototype.$axios = axios;
axios.defaults.baseURL = '/api'
Vue.prototype.$httpUrl='http://localhost:9513'   //本地调试地址
Vue.config.productionTip = false
Vue.use(VueRouter);
Element.Dialog.props.closeOnClickModal.default = false;
Vue.use(ElementUI, {
	size: 'small'
});
new Vue({
	router,
	store,
	render: h => h(App),
}).$mount('#app')
router.beforeEach((to, from, next) => {
	store.state.curpath = to.path;
	store.state.curpathname = to.name;
	next()
});
// 注册一个全局过滤器(将得到的数据ms转为时间(年月日))
Vue.filter('dataFormat', function(originVal) {
	if (originVal == null) {
		return "--";
	}
	const dt = new Date(originVal);
	// 年
	const year = dt.getFullYear();
	// 转换出来的month默认是从0开始的,设置显示为两位数，不足的就用0来填充
	// 月
	const month = (dt.getMonth() + 1 + '').padStart(2, '0');
	// 日
	const day = (dt.getDate() + '').padStart(2, '0');
	// 时
	// const hour = (dt.getHours() + '').padStart(2, '0');
	// // 分
	// const minutes = (dt.getMinutes() + '').padStart(2, '0');
	// // 秒
	// const seconds = (dt.getSeconds() + '').padStart(2, '0');
	// 拼接时间数据
	return `${year}年${month}月${day}日`;
});
Vue.filter('zeroone', function(originVal) {
	if (originVal === '1' || originVal === 1) {
		return '是';
	} else if (originVal === '0' || originVal === 0) {
		return '否';
	} else {
		return '--';
	}
});
Vue.filter('zeroone1', function(originVal) {
	if (originVal === '1' || originVal === 1) {
		return '启用';
	} else if (originVal === '0' || originVal === 0) {
		return '停用';
	} else {
		return '--';
	}
});
Vue.filter('dataFormatNianYue', function(originVal) {
	if (originVal == null) {
		return "--";
	}
	const dt = new Date(originVal);
	// 年
	const year = dt.getFullYear();
	// 转换出来的month默认是从0开始的,设置显示为两位数，不足的就用0来填充
	// 月
	const month = (dt.getMonth() + 1 + '').padStart(2, '0');
	// 日
	// const day = (dt.getDate() + '').padStart(2, '0');
	// 时
	// const hour = (dt.getHours() + '').padStart(2, '0');
	// // 分
	// const minutes = (dt.getMinutes() + '').padStart(2, '0');
	// // 秒
	// const seconds = (dt.getSeconds() + '').padStart(2, '0');
	// 拼接时间数据
	return `${year}年${month}月`;
});

Vue.filter('dataFormatNian', function(originVal) {
	if (originVal == null) {
		return "--";
	}
	const dt = new Date(originVal);
	// 年
	const year = dt.getFullYear();
	return `${year}年`;
});


Vue.filter('dataFormatShort', function(originVal) {
	if (originVal == null) {
		return "--";
	}
	const dt = new Date(originVal);
	// 年
	const year = dt.getFullYear();
	// 转换出来的month默认是从0开始的,设置显示为两位数，不足的就用0来填充
	// 月
	const month = (dt.getMonth() + 1 + '').padStart(2, '0');
	// 日
	const day = (dt.getDate() + '').padStart(2, '0');
	// 拼接时间数据
	return `${year}-${month}-${day}`;
});

Vue.prototype.getNowFormatDate = function() {
	var date = new Date();
	var seperator1 = "-";
	var year = date.getFullYear();
	var month = date.getMonth() + 1;
	var strDate = date.getDate();
	if (month >= 1 && month <= 9) {
		month = "0" + month;
	}
	if (strDate >= 0 && strDate <= 9) {
		strDate = "0" + strDate;
	}
	var currentdate = year + seperator1 + month + seperator1 + strDate;
	return currentdate;
};
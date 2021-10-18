import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

//安装qiankun   npm install qiankun
//引入qiankun
import {registerMicroApps,start} from 'qiankun'

//注册应用，定义列表
const apps = [
  {
    name:'vueApp',  //应用名称
    entry:'//localhost:8081', //默认会加载这个html，解析页面内的js，动态的执行，（因为涉及到访问子应用的资源，所以需要解决子应用的跨域），fetch
    container:'#vue', //页面内的加载子应用的容器
    activeRule:'/vue',  //激活的路径，当路径地址访问/vue时，激活访问entry中的地址
  }
]

//开始注册应用列表
registerMicroApps(apps);
//启动基座
start();
// start(
//   prefetch:false //取消预加载
// );


Vue.config.productionTip = false
Vue.use(ElementUI);
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

import Vue from 'vue'
// TODO 第一步：安装并引入 vue-i18n
import VueI18n from 'vue-i18n'
import App from './App.vue'

// TODO 第二步：注册 vue-i18n
Vue.use(VueI18n)

Vue.config.productionTip = false

// TODO 第三步：创建实例
const i18n = new VueI18n({
  locale: 'en', // set locale
  messages: {
    'zh': require('./assets/lang/zh'),
    'en': require('./assets/lang/en')
  }
})

new Vue({
  render: h => h(App),
  i18n
}).$mount('#app')

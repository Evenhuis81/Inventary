 import Vue from 'vue'
 import Axios from 'axios'
 //  import * as Moment from 'moment'
 Axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest'
 Vue.prototype.$http = Axios
 //  Vue.prototype.$moment = Moment
 Vue.config.productionTip = false

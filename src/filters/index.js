// import Vue from 'vue'
// import moment from 'moment'
//
// Vue.filter('date-format',function(value,formatStr='YYYY-MM-DD HH:mm:ss'){
//     return moment(value).format(formatStr)
// })
//

import format from 'date-fns/format'
import Vue from 'vue'
Vue.filter('date-format', function (value, formatStr='YYYY-MM-DD HH:mm:ss') {
// return moment(value).format(format || 'YYYY-MM-DD HH:mm:ss')
  return format(value, formatStr )
})

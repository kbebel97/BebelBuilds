import { createApp } from 'vue'
import App from './App.vue'
import router from './router'


const app = createApp(App)
app.use(router)

// router.beforeEach(function(to, from, next) {
//     console.log(to)
//     console.log(from)
//     next()
// })
app.mount('#app')

import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)

const Home = ()=> import('../view/home/Home')
const About = ()=> import('../view/about/About')
const Cars = ()=> import('../view/cars/Cars')
const Me = ()=> import('../view/me/Me')

const routes = [
  { path: '/', redirect: '/home'},
{ 
  path: '/home', 
  component: Home 
},
{ 
  path: '/about',
 component: About
 },
 { 
   path: '/cars',
    component: Cars
   },
   {
      path: '/me', 
      component: Me
     }
]
 const router = new Router({
  routes,
  mode : 'history'
})
export default router

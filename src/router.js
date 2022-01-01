import Vue from 'vue'
import VueRouter from 'vue-router'
// import Home from "./views/Home"
// import About from "./views/About"
// import Audio from "./views/Audio"

Vue.use(VueRouter);

const router = new VueRouter({
    mode:"history",
    routes:[
        {path:"/", redirect:'/home'},
        {path:"/home", component:()=> import('@/views/Home.vue')},
        {path:"/audio", component:()=> import('@/views/Audio.vue')},
        {path:"/about", component:()=> import('@/views/About.vue')}
    ]
});

export default router;
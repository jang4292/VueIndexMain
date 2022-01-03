import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from "./views/Home"
import Audio from "./views/Audio"
import About from "./views/About"
import Login from "./views/Login"

Vue.use(VueRouter);

const router = new VueRouter({
    mode:"history",
    routes:[
        {path:"/", redirect:"/home"},
        {path:"/home", component:Home},
        {path:"/audio", component:Audio},
        {path:"/about", component:About},
        {path:"/login", component:Login},
    ]
});

export default router;
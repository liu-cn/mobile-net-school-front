import Vue from 'vue'
import VueRouter from 'vue-router'
import layout from "@/components/layout/layout";

Vue.use(VueRouter)

const routes = [

    {
        path: '/',
        name: 'layout',
        component: layout,
        redirect: "/home",
        children:[
            {
                path:"home",
                name:"home",
                component:()=>import("@/views/home/home")
            },
            {
                path: "friends",
                name:"friends",
                component:()=>import("@/views/friends/friends")
            },
            {
              path: "more",
              name:"more",
              component:()=>import("@/views/more/more")
            },
            {
              path: "profile",
              name: "profile",
              component:()=>import("@/views/profile/profile")
            }

        ]
    },
    {
        path: "/login" ,
        name: "login",
        component:()=> import("@/views/login/login")
    },
    {
        path: "/register" ,
        name: "register",
        component:()=> import("@/views/register/register")
    },
    {
        path: '/test',
        name:"test",
        component: ()=>import("@/test/test")
    }

]


const router = new VueRouter({
    mode: "history",
    base: process.env.BASE_URL,
    routes
})


router.beforeEach((to,from,next)=>{
    if (to.name==="login" || to.name==="register"){
        next()
        return
    }else {
        let token = localStorage.getItem("token")
        console.log(token)
        if (token == null) {
            next("/login")
        } else {
            next()
        }
    }
})

export default router

import Vue from "vue";
import VueRouter from "vue-router";
import Home from "@/views/Home/Home";
import Contents from "@/views/Contents/Contents";
import PageNotFound from "@/components/PageNotFound";
import Test from "@/views/Test/Test";

Vue.use(VueRouter);

const routes = [
    {
        path: "/",
        name: "Home",
        component: Home
    },
    {
        path: "/contents",
        name: "Contents",
        component: Contents
    },
    {
        path: "/test",
        name: "Test",
        component: Test
    },
    {
        path: "/:pathMatch(.*)*",
        name: "PageNotFound",
        component: PageNotFound
    },
];

const router = new VueRouter({
    mode: "history",
    base: process.env.BASE_URL,
    routes
});

export default router;
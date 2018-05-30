import Vue from 'vue'
import Router from 'vue-router'
import index from '@/components/index/index.vue'
import about from '@/components/about/about.vue'
import products from '@/components/products/products.vue'
import recruitment from '@/components/recruitment/recruitment.vue'
import contact from '@/components/contact/contact.vue'

Vue.use(Router)

export default new Router({
    routes: [{
            path: '/',
            redirect: '/index'
        },
        {
            path: '/index',
            name: 'index',
            component: index
        },
        {
            path: '/about',
            name: 'about',
            component: about
        }, {
            path: '/products',
            name: 'products',
            component: products
        }, {
            path: '/recruitment',
            name: 'recruitment',
            component: recruitment
        },
        {
            path: '/contact',
            name: 'contact',
            component: contact
        }
    ]
})

import Vue from 'vue'
import vuex from 'vuex'
import about from './about'
import contact from './contact'

Vue.use(vuex)

export default new vuex.Store({
    state: {
        products: [],
        page: 0,
        menu: [
            { text: '首页', router: 'index' },
            { text: '关于我们', router: 'about' },
            { text: '产品展示', router: 'products' },
            { text: '人才招聘', router: 'recruitment' },
            { text: '联系我们', router: 'contact' }
        ]
    },
    mutations: {
        changeRouter(state, index) {
            state.page = state.menu[0].router
            state.routerName = state.menu[0].text
        }
    },
    modules: {
        about: about,
        contact: contact
    }
})

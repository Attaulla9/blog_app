import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        posts: [],
        getPost: []
    },
    mutations: {
        SET_POSTS(state, posts) {
            state.posts = posts
        },
        GET_POSTS(state, post) {
            state.getPost = post
        }
    },
    actions: {
        getPosts({ commit }, payload) {
            axios.get(`https://jsonplaceholder.typicode.com/posts?_limit=${payload}`)
                .then(response => {
                    commit('SET_POSTS', response.data)
                })
        },

        singlePost({ commit }, payload) {
            axios.get(`https://jsonplaceholder.typicode.com/posts/${payload}`)
                .then(response => {
                    commit('GET_POSTS', response.data)
                })
        }
    },
    getters:{
        getPost:state=>{
            return state.posts;
        }
    }
   
})
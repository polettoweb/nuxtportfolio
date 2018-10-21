import Vuex from 'vuex'
import axios from 'axios'

const createStore = () => {
    return new Vuex.Store({
        state: () => ({
            loading: true,
            articles: [],
            article: '',
            year: new Date().getFullYear()
        }),
        actions: {
            retrieveList(vuexContext) {
                vuexContext.commit('setPosts', posts)
            },
            nuxtServerInit() {
                return axios("https://marcopolettouk.firebaseio.com/articles/.json")
                    .then(res => {
                        this.state.articles = res.data;
                    })
                    .finally(() => {
                        this.state.loading = false;
                    });
            }
        }
    })
}

export default createStore
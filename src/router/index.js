import Vue from 'vue';
import Router from 'vue-router';
import HelloWord from '../components/HelloWord.vue';

Vue.use(Router);

export default new Router({
    mode: 'history',
    routes: [
        {
            path: '/',
            name: 'Home',
            component: {
                HelloWord,
            },
        },
    ],
});
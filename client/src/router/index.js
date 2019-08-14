import Vue from 'vue';
import Router from 'vue-router';
import HelloWorld from '@/components/HelloWorld';
import Cats from '../pages/Cats';
import NewCat from '../pages/NewCat';

// import * as catApi from '../services/catApi';

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/cats',
      name: 'Cats',
      component: Cats,
      exact: true,
    },
    {
      path: '/cats/new',
      name: 'create cat',
      component: NewCat,
      exact: true,
    },
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld,
      exact: true,
    },
  ],
});

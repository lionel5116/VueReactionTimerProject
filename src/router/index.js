import { createWebHistory, createRouter } from 'vue-router';
import HelloWorld from '../components/HelloWorld.vue';
import MyGame from '../components/MyGame.vue';
import ReduxVue from '../components/ReduxVue.vue';

const routes = [
  {
    path: '/',
    name: 'ReduxVue',
    component: ReduxVue,
  },
  {
    path: '/HelloWorld',
    name: 'HelloWorld',
    component: HelloWorld,
  },
  {
    path: '/MyGame',
    name: 'MyGame',
    component: MyGame,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;

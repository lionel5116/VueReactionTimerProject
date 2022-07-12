import { createWebHistory, createRouter } from 'vue-router';
import HelloWorld from '../components/HelloWorld.vue';
import MyGame from '../components/MyGame.vue';
import ReduxVue from '../components/ReduxVue.vue';
import FooUnit from '../components/FooUnit.vue';
import DetailForm from '../components/Forms/DetailForm.vue';

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
  {
    path: '/FooUnit',
    name: 'FooUnit',
    component: FooUnit,
  },
  {
    path: '/DetailForm',
    name: 'DetailForm',
    component: DetailForm,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;

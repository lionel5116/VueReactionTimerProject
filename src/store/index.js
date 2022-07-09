import { createStore } from 'vuex'
import axios from 'axios';

export default createStore({
state: {
    counter:0
  },
mutations: {
  //alters the data in the state
  increaseCounter(state,randomNumber) {
    state.counter+=randomNumber;
  },
  decreaseCounter(state) {
    state.counter--;
  }
},
actions: {
    //you can trigger asynchronous code here (api) - dispatch actions
    increaseCounter({commit}){
     //https://www.random.org/integers/?num=10&min=1&max=6&col=1&base=10&format=plain&rnd=new
     axios('https://www.random.org/integers/?num=1&min=1&max=6&col=1&base=10&format=plain&rnd=new').then(response => {
        //console.log('response',response)
        commit('increaseCounter',response.data)
     })
    }
},
getters: {
  //you can change or filter some data in your state
},
modules: {
    //alows you break up your vuex store
}
})
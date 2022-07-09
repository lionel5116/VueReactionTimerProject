<template>
  <div>
    <img src="../assets/logo.png" alt="Vue Logo">
    <div class="counter">
        {{$store.state.counter}}
    </div>
  </div>
  <div class="buttons">
    <button @click="$store.dispatch('increaseCounter')">+</button>
    <button @click="$store.commit('decreaseCounter')">-</button>
  </div>
</template>

<script>
export default {
 name:'ReduxVue'
}
</script>

<style>
div {
    margin-bottom: 10px;
}
.counter {
    font-size: 80px;
}
.buttons button {
    font-size: 40px;
    width: 100px;
    margin: 0 10px;
}
</style>
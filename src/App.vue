<template>
 <MyNav />
</template>

<script>
import MyNav from './components/nav/MyNav.vue';

export default {
  name: 'App',
  components: {
    MyNav
  },
  
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #444;

}
/*
 button {
  background: #0faf87;
  color:white;
  border:none;
  padding: 8px 16px;
  border-radius: 4px;
  font-size: 16px;
  letter-spacing: 1px;
  cursor: pointer;
  margin:10px;
 }
 
 button[disabled] {
    opacity: 0.2;
    cursor: not-allowed
 }
 */
</style>

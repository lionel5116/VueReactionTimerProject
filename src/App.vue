<template>
 <h1>Ninga Reaction Timer</h1>
 <button 
    @click="start"
    :disabled="isPlaying"
   >Play</button>

   <MyBlock 
     v-if="isPlaying"
     :delay="delay"
     @end="endGame"/>
    
    <MyResults 
      v-if="showResults"
      :score="score"
    />

     <!--<p v-if="showResults">Reaction Time: {{score }} ms</p>-->

</template>

<script>

import MyBlock from './components/MyBlock.vue';
import MyResults from './components/MyResults.vue';

export default {
  name: 'App',
  components: {
    MyBlock,
    MyResults
  },
  data() {
    return {
       isPlaying: false,
       delay:null,
       score:null,
       showResults: false
    }
  },
  methods: {
    start(){
      this.delay = 2000 + Math.random() * 5000
      //the component will 'mount' when it becomes visible in the DOM
      this.isPlaying = true;
      this.showResults = false;
    },
    endGame(reactionTime){
      this.score = reactionTime;
      this.isPlaying = false;
      this.showResults = true;
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #444;
  margin-top: 60px;
}
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
</style>

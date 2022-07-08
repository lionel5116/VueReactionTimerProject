<template>
  <h1>Ninga Reaction Timer</h1>
 <button 
    class="btn btn-outline-info"
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
</template>

<script>
import MyBlock from './MyBlock.vue';
import MyResults from './MyResults.vue';
export default {
  name:'MyGame',
   components: {
    MyBlock,
    MyResults,
  },data() {
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
button[disabled] {
    opacity: 0.2;
    cursor: not-allowed
 }
</style>
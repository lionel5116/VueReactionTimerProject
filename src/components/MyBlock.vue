<template>
  <div class="block" 
      v-if="showBlock"
      @click="stopTimer">
    click me
  </div>
</template>

<script>
export default {
  name:'MyBlock',
  props:['delay'],
  data(){
    return {
      showBlock:false,
      timer: null,
      reactionTime: 0,
    }
  },
  //lifecycle method(s) (like component did mount in react)
  mounted(){
    //console.log('component mounted')
    setTimeout(() => {
      this.showBlock = true;
      this.startTimer();
      console.log(this.delay)
    }, this.delay)
  },
  updated() {
    //console.log('component updated')
  },
  unmounted(){
    //console.log('component unmounted')
  },
  methods: {
    startTimer(){
      //increment reaction time by 10ms with set interval
      this.timer = setInterval(() =>{
        this.reactionTime += 10
      }, 10);
    },
    stopTimer(){
       clearInterval(this.timer)
       //console.log(this.reactionTime)
       this.$emit('end',this.reactionTime)
    },
  }
}
</script>

<style >
  .block {
    width: 400px;
    border-radius: 20px;
    background: #0faf87;
    color:white;
    text-align: center;
    padding: 100px 0;
    margin: 40px auto;
  }
  
</style>
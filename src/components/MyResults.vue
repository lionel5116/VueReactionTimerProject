<template>
  <div>
    <p >Reaction Time: {{score }} ms</p>
    <p class="rank">{{rank }}</p>
  </div>
</template>

<script>
export default {
  name:'MyResults',
  props:['score'],
  data() {
    return {
      rank:null
    }
  },
  mounted(){
    if(this.score < 385)
    {
       this.rank = "You are QUICK!!!!" 
    }
    else{
        this.rank = "Too Slow .. lol"
    }
  }
}
</script>

<style>
  .rank {
    font-size: 1.4em;
    color: #0faf87;
    font-weight: bold;
  }
</style>
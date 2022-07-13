<template>
   <div class="container text-center  mt-5 mb-5">
    <h1 class="mt-5 fw-bolder text-success "> Student's Database </h1>
     <div class="table-responsive my-5">
      <!-- The table component -->
       <BSTable 
          :fields='fields' 
          :clientData = this.clientData></BSTable>
     </div>

</div>
</template>

<script>
import BSTable from './BSTable.vue';
import axios from 'axios';

export default {
  name:'BSTableTester',
   data(){
    return {
      clientData:[],
    }
  },
  components: {
    BSTable
  },
  mounted() {
    axios('http://localhost:62952/api/Client/FetchAllClientsForBTTable/').then(response => {
       this.clientData = response.data;
     })

  },
  setup() {
     /*
    const studentData = [
      {ID:"01", Name: "Abiola Esther", Course:"Computer Science", Gender:"Female", Age:"17"},
     {ID:"02", Name: "Robert V. Kratz", Course:"Philosophy", Gender:"Male", Age:'19'},
      {ID:"03", Name: "Kristen Anderson", Course:"Economics", Gender:"Female", Age:'20'},
     {ID:"04", Name: "Adam Simon", Course:"Food science", Gender:"Male", Age:'21'},
      {ID:"05", Name: "Daisy Katherine", Course:"Business studies", Gender:"Female", Age:'22'},  
    ]
    const fields = [
      'ID','Name','Course','Gender','Age'
    ]
    */
    //return{studentData,fields}
    const fields = [
      'id','ClientCode','Email','LastName','FirstName','Address','City','State','Cell'];

    return{fields}
  },
}
</script>

<style>

</style>
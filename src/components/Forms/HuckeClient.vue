<template>
  <div class="container formElements">
    <h1>Client Management Screen</h1>
    <form class="row g-3">
      <div class="col-6">
        <label for="LastName" class="form-label">LastName</label>
        <input
          type="text"
          class="form-control"
          id="LastName"
          v-model="LastName"
        />
      </div>
      <div class="col-6">
        <label for="FirstName" class="form-label">FirstName</label>
        <input
          type="text"
          class="form-control"
          id="FirstName"
          v-model="FirstName"
        />
      </div>

      <div class="col-6">
        <label for="ClientCode" class="form-label">ClientCode</label>
        <input
          type="text"
          class="form-control"
          id="ClientCode"
          v-model="ClientCode"
        />
      </div>
      <div class="col-6">
        <label for="Email" class="form-label">Email</label>
        <input type="text" class="form-control" id="Email" v-model="Email" />
      </div>

      <div class="col-12">
        <label for="Address" class="form-label">Address</label>
        <input
          type="text"
          class="form-control"
          id="Address"
          v-model="Address"
        />
      </div>

      <div class="col-4">
        <label for="City" class="form-label">City</label>
        <input type="text" class="form-control" id="City" v-model="City" />
      </div>

      <div class="col-4">
        <label for="State" class="form-label">State</label>
        <input type="text" class="form-control" id="State" v-model="State" />
      </div>

      <div class="col-4">
        <label for="Zip" class="form-label">Zip</label>
        <input type="text" class="form-control" id="Zip" v-model="Zip" />
      </div>

      <div class="col-4">
        <label for="Phone" class="form-label">Phone</label>
        <input type="text" class="form-control" id="Phone" v-model="Phone" />
      </div>

      <div class="col-4">
        <label for="Phone2" class="form-label">Phone2</label>
        <input type="text" class="form-control" id="Phone2" v-model="Phone2" />
      </div>

      <div class="col-4">
        <label for="Cell" class="form-label">Cell</label>
        <input type="text" class="form-control" id="Cell" v-model="Cell" />
      </div>

      <div class="col-12">
        <label for="Notes" class="form-label">Notes</label>
        <textarea
          type="text"
          class="form-control"
          id="Notes"
          name="Notes"
          rows="5"
          v-model="Notes"
        >
        </textarea>
      </div>

      <div class="col-12">
        <button
          type="button"
          class="btn btn-primary"
          @click="createClientRecord"
        >
          Create Client Record
        </button>
      </div>
    </form>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "HuckeClient",
  components: {},
  data() {
    return {
      ClientCode: "",
      LastName: "",
      FirstName: "",
      Address: "",
      City: "",
      State: "",
      Zip: "",
      Phone: "",
      Phone2: "",
      Cell: "",
      Notes: "",
      Email: "",
    };
  },
  methods: {
    
    async createClientRecord() {
      const newClientRecord = {
        ClientCode: this.ClientCode,
        LastName: this.LastName,
        FirstName: this.FirstName,
        Address: this.Address,
        City: this.City,
        State: this.State,
        Zip: this.Zip,
        Phone: this.Phone,
        Phone2: this.Phone2,
        Cell: this.Cell,
        Notes: this.Notes,
        Email: this.Email,
      };

      console.log(newClientRecord);

      let serviceUrl = "http://localhost:5000/api/clients/createClientRecord";
      
      try {
        const config = {
          headers: {
            "Content-Type": "application/json",
          },
        };

        await axios
          .post(serviceUrl, newClientRecord, config)
          .then((response) => {
            console.log(response.data);
            window.alert("Record Created for " +  this.FirstName);
          });
      } catch (err) {
        console.log(err);
      }
      
    },  //async createClientRecord() {
   
  },
};
</script>

<style scoped>
 .formElements {
     text-align: left;
 }
</style>
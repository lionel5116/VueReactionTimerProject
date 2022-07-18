<template>
  <div class="container">
    <form @submit.prevent="handleSubmit()">
      <label>Email:</label>
      <input type="email" required v-model="email" />

      <label>Password:</label>
      <input type="password" required v-model="password" />
      <div v-if="passwordError" class="error">{{ passwordError }}</div>

      <label>Role:</label>
      <select v-model="role">
       <option value="Developer">Web Developer</option>
       <option value="Designer">Web Designer</option>
      </select>

      <label>Skills:</label>
      <input type="text" v-model="tempSkill" @keyup.alt="addSkill">
      <div v-for="skill in skills" :key="skill" class="pill">
        <span
         @click="deleteSkill(skill)">{{skill}}</span>
      </div>

      <div class="terms" >
        <input type="checkbox" required v-model="terms">
        <label>Accept terms and conditions</label>
      </div>

      <div class="submit">
        <button>Create an Account</button>
      </div>

       <div>
        <input type="checkbox" value="Lionel" v-model="names">
        <label>Lionel</label>
       </div>

       <div>
        <input type="checkbox" value="Rick" v-model="names">
        <label>Rick</label>
       </div>

       <div>
        <input type="checkbox" value="Sharron" v-model="names">
        <label>Sharron</label>
       </div>

        <br>
      <p>Email: {{ email }}</p>
      <p>Password: {{ password }}</p>
      <p>Role: {{ role }}</p>
      <p>Terms: {{ terms }}</p>
      <p>Names: {{ names }}</p>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      email: "",
      password: "",
      role:'',
      terms: false,
      names:[],
      tempSkill:'',
      skills: [],
      passwordError: ''
    };
  },
  methods: {
    addSkill(e) {
       if(e.key === ',' && this.tempSkill){
        if(!this.skills.includes(this.tempSkill)){
             this.skills.push(this.tempSkill); 
        }
        this.tempSkill = ''
       }
    },
    deleteSkill(skill){
      if(this.skills.includes(skill))
      {
        this.skills = this.skills.filter( (item) => {
            return skill !== item
        })
      }
    },
    handleSubmit(){
       console.log('Form Submitted')
       this.passwordError = this.password.length > 5 ? '' : 'Password must be at least 6 chars long';
       if(!this.passwordError){
        console.log('user: '+ this.email + ' is registered')
       }

    }
  }
};
</script>

<style SignupForm scoped>
.all {
  text-align: center;
}

body {
  margin: 0;
  background: #eee;
}

form {
  max-width: 420px;
  margin: 30px;
  background: white;
  text-align: left;
  padding: 40px;
  border-radius: 10px;
}
label {
  color: #aaa;
  display: inline-block;
  margin: 25px 0 15px;
  font-size: 0.6em;
  text-transform: uppercase;
  letter-spacing: 1px;
  font-weight: bold;
}
input, select {
  display: block;
  padding: 10px 6px;
  width: 100%;
  box-sizing: border-box;
  border: none;
  border-bottom: 1px solid #ddd;
  color: #555;
}
input[type="checkbox"]{
    display: inline-block;
    width: 16px;
    margin: 0 10px 0 0;
    position: relative;
    top: 2px;
}
.pill {
    display: inline-block;
    margin: 20px 10px 0 0;
    padding: 6px 12px;
    background: #eee;
    border-radius: 20px;
    font-size: 12px;
    letter-spacing: 1px;
    font-weight: bold;
    color: #777;
    cursor: pointer;
}
button {
    background: #0b6dff;
    border:0;
    padding: 10px 20px;
    margin-top: 20px;
    color: white;
    border-radius: 20px;
}
.submit {
    text-align: center;
}
.error {
    color: red;
    font-weight: bold;
}
</style>

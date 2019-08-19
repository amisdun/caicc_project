<template>
  <div class="formData" v-if="defaultShow">
        <button @click="showAdmin" class="w3-btn w3-purple w3-margin-bottom w3-display-topright" v-show="adminPortal" style="right: 12vh; top: 2vh;outline: none"><icon name="user"></icon> Admin</span></button>
        <form class="w3-card w3-animate-top" v-show="Admin">
            <p style="font-family: 'Comic Sans MS', cursive, sans-serif;font-weight: bold" class="w3-text-purple">Please provide your details for authentication</p>
            <p class="w3-margin">
              <input class="w3-input w3-border" type="text" placeholder="Username" required>
            </p>
            <p class="w3-margin">
              <input class="w3-input w3-border" type="password" placeholder="password" required>
            </p>
            <button class="w3-btn w3-purple w3-margin-bottom">Login</button>
        </form>
        <div class="w3-container">
        <img class="card-img-top w3-padding w3-animate-zoom" src="@/assets/cropped-caicc-logo-long.jpg" alt="CAICC logo">
        
        <div class="w3-card-4">
          <div class="w3-container w3-purple w3-animate-left " style="height:10vh; font-size:0.9vw">
            <h2 style="font-size:2.8vh;">CAICC ONLINE MEMBERSHIP FORM</h2>
          </div>
          <div class="w3-container">
            <h2 style="font-size:3vh">Fill in the form below,<p><b> NB: all fields are required</b></p></h2>
          </div>

          <form class="w3-container">
            <p>
            <input class="w3-input w3-border" type="text" placeholder="Firstname" v-model="firsname" required>
            </p>
            <p>     
            <input class="w3-input w3-border" type="text" placeholder="Lastname" v-model="lastname" required>
            </p>
            <p>     
            <input class="w3-input w3-border" type="Number" placeholder="age" min="1" v-model="age" required>
            </p>
            <p>     
            <input class="w3-input w3-border" type="text" placeholder="occupation" v-model="occupation" required>
            </p>
            <p>     
            <input class="w3-input w3-border" type="number" placeholder="phone Number" v-model="phone_number" required>
            </p>
            <p>     
            <input class="w3-input w3-border" type="email" placeholder="email Address" v-model="email" required>
            </p>
            <p>     
            <input class="w3-input w3-border" type="text" placeholder="house Address" v-model="house_addres" required>
            </p>
            <select class="w3-select w3-border" name="option" v-model="selectedGender" @change="change($event)">
              <option value="" disabled selected>Choose your gender</option>
              <option v-for="gend in genderData" :value="gend.gender">{{gend.gender}}</option>
            </select>
            <button class="w3-btn w3-purple w3-margin-top">Submit</button>
          </form>
          <div class="w3-container w3-purple w3-margin-top">
            <h2 style="font-family: cursive, sans-serif;font-size:3vh">&copy; 2019 CAICC, All rights reserved</h2>
          </div>
        </div>
      </div>
  
  </div>
  <div v-else class="memberData w3-card">
    <button class="w3-btn w3-purple w3-margin-bottom w3-display-topright" style="right: 12vh; top: 2vh;outline: none">Logout</button>
    <form>
    <p class="w3-margin" style="padding-top: 10px">
      <input class="w3-input w3-border" type="text" v-model="search" placeholder="Search member by name">
    </p>
    </form>
    <div class="w3-margin">
      <table class="w3-table">
        <tr class="w3-purple">
          <th>Firstname</th>
          <th>Lastname</th>
          <th>age</th>
          <th>occupation</th>
          <th>phone Number</th>
          <th>email</th>
          <th>house Address</th>
          <th>gender</th>
        </tr>
        <tr>
          <td></td>
        </tr>
      </table>
    </div>
  </div>
</template>
<script>
export default {
  name: 'membersForm',
  data() {
    return {
      genderData: [
        {gender: "male"},
        {gender: "female"}
      ],
      search: "",
      defaultShow: false,
      selectedGender: "",
      Admin: false,
      adminPortal: true,
      firsname: "",
      lastname: "",
      age: "",
      occupation: "",
      email: "",
      house_addres: "",
      phone_number: ""

    }
  },
  created() {
    if(window.innerWidth <= 800){
      this.adminPortal = false
    }
  },
  methods: {
    change: function($event){
      this.selectedGender = $event.target.value;
    },
    showAdmin: function(){
      if(this.Admin === false){
        this.Admin = true
      }
      else{
        this.Admin = false
      }
    }
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  img{
  width: 57vh
}
  div.w3-card-4{
    height: auto
  }
  div.formData{
    margin-left: 5vw;
     margin-right: 5vw;
  }
  div.memberData{
    margin-left: 5vw;
     margin-right: 5vw;
  }
</style>

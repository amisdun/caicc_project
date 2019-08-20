<template>
  <div class="formData" v-if="defaultShow">
        <button @click="showAdmin" class="w3-btn w3-purple w3-margin-bottom w3-display-topright" id="admin" style="right: 12vh; top: 2vh;outline: none"><icon name="user"></icon> Admin</span></button>
        <form class="w3-card w3-animate-top" v-show="Admin" id="adminform">
            <p style="font-family: 'Comic Sans MS', cursive, sans-serif;font-weight: bold;text-align:center" class="w3-text-purple">Please provide your details for authentication</p>
            <p class="w3-margin">
              <icon name="user"></icon>
              <input class="w3-input w3-border" type="text" placeholder="Username" v-model="Username" required>
              <span v-show="userAlert" class="w3-text-red w3-animate-bottom">Please enter your username</span>
            </p>
            <p class="w3-margin">
              <icon name="lock"></icon>
              <input class="w3-input w3-border" type="password" placeholder="password" v-model="password" required>
              <span v-show="passAlert" class="w3-text-red w3-animate-bottom">Please enter your password</span>
            </p>
            <div style="text-align: center">
              <button class="w3-btn w3-purple w3-margin-bottom" style="outline: none" @click.prevent="adminLogin">Login</button>
            </div>
        </form>
        <div class="w3-container">
        <div style="text-align: center">
          <img class="card-img-top w3-padding w3-animate-zoom" src="@/assets/cropped-caicc-logo-long.jpg" alt="CAICC logo">
        </div>
        
        <div class="w3-card-4">
          <div class="w3-container w3-purple w3-animate-left " style="height:10vh; font-size:0.9vw">
            <h2 style="font-size:2.8vh;text-align: center;font-family:Cambria">CAICC ONLINE MEMBERSHIP FORM</h2>
          </div>
          <div class="w3-container">
            <h2 style="font-size:3vh;text-align: center">Fill in the form below,<p><b> NB: all fields are required</b></p></h2>
          </div>

          <form class="w3-container">
            <p>
            <icon name="user"></icon><input class="w3-input w3-border" type="text" placeholder="Firstname" v-model="firsname" required>
            </p>
            <p>
            <icon name="user"></icon>     
            <input class="w3-input w3-border" type="text" placeholder="Lastname" v-model="lastname" required>
            </p>
            <p>
            <icon name="user-edit"></icon>     
            <input class="w3-input w3-border" type="Number" placeholder="age" min="1" v-model="age" required>
            </p>
            <p>
            <icon name="passport"></icon>     
            <input class="w3-input w3-border" type="text" placeholder="occupation" v-model="occupation" required>
            </p>
            <p>
            <icon name="phone-volume"></icon>     
            <input class="w3-input w3-border" type="number" placeholder="phone Number" v-model="phone_number" required>
            </p>
            <p>
            <icon name="envelope-open"></icon>     
            <input class="w3-input w3-border" type="email" placeholder="email Address" v-model="email" required>
            </p>
            <p>
            <icon name="address-card"></icon>     
            <input class="w3-input w3-border" type="text" placeholder="house Address" v-model="house_addres" required>
            </p>
            <icon name="restroom"></icon>
            <select class="w3-select w3-border" name="option" v-model="selectedGender" @change="change($event)">
              <option value="" disabled selected>select your gender</option>
              <option v-for="gend in genderData" :value="gend.gender">{{gend.gender}}</option>
            </select>
            <div style="text-align: center">
              <span v-show="alert" class="w3-text-red w3-animate-bottom">Please select your gender</span><br>
              <button class="w3-btn w3-purple w3-margin-top" style="outline: none" @click.prevent="submitMembersDeatails">Submit</button>
            </div>
          </form>
          <div class="w3-container w3-purple w3-margin-top">
            <div style="text-align: left">
              <h2 style="font-family: cursive, sans-serif;font-size:3vh">&copy; 2019 CAICC, All rights reserved</h2>
            </div>
            <div style="text-align: right;">
              <icon name="brands/facebook" style="margin-right: 10px"></icon>
              <icon name="brands/whatsapp" style="margin-right: 10px"></icon>
              <icon name="brands/twitter" style="margin-right: 10px"></icon>
          </div>
          </div>
        </div>
      </div>
  
  </div>
  <div v-else class="memberData w3-card">
    <div style="padding-top: 50px">
      <button class="w3-btn w3-purple w3-margin-bottom w3-display-topright" style="right: 7vw; top: 8vh;outline: none" @click="closeAdmin"><icon name="times"></icon></button>
    <form>
    <p class="w3-margin">
      <input class="w3-input w3-border" type="text" v-model="search" placeholder="Search member by name">
    </p>
    </form>
    </div>
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
      userAlert: false,
      passAlert: false,
      Username: "",
      password: "",
      alert: false,
      search: "",
      defaultShow: true,
      selectedGender: "",
      Admin: false,
      firstname: "",
      lastname: "",
      age: "",
      occupation: "",
      email: "",
      house_addres: "",
      phone_number: ""

    }
  },
  methods: {
    change: function($event){
      this.selectedGender = $event.target.value;
    },
    submitMembersDeatails: function(){
      if(!this.selectedGender){
        this.alert = true;
        return false
      }
      else{
        this.alert = false;
        this.axion({
          url: "/members/membersData",
          method: "post",
          dataType: "json",
          data: {gender: this.selectedGender,
                firstname: this.firstname,
                lastname: this.lastname,
                age: this.age,
                occupation: this.occupation,
                phoneNum: this.phone_number,
                email: this.email,
                houseaddress: this.house_addres
          }
        })
        .then(response=>{
          if(response.msg == "success"){

          }
        })
        .catch(err=>{
          console.log(err)
        })
        return true
      }
    },

    adminLogin: function(){
      if(this.Username.length < 1){
        this.userAlert = true
      }
      if(this.password.length < 1){
          this.passAlert = true
      }
      if(this.Username.trim() != "" && this.password.trim() != ""){
         this.defaultShow = false;
        this.userAlert = false;
        this.passAlert  = false;
        // making the ajax call
        this.axion({
          url: "",
          method: "post",
          dataType: "json",
          data: {
            username: this.Username,
            password: this.password
          }
        })
        .then(res=>{

        })
        .catch(err=>{
          console.log(err)
        })
      }
    },
    closeAdmin: function(){
      this.defaultShow = true
      this.Admin = false;
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
  width: 57vh;
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
     margin-right: 7vw;
  }
  input{
    margin-left:4vh;
    margin-top: -5.2vh;
    max-width: 90%;
  }
  select{
    margin-left:1.4vh;
    margin-top: -5vh;
    max-width: 90%;
  }
  p{
    margin-bottom: 20px;
  }
</style>

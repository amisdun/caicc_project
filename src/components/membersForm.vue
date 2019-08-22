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
            <div style="text-align:center" v-show="msgAlert">
            <span class="w3-text-red w3-animate-bottom">{{msg}}</span>
            </div>
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
          <div v-show="showAlert" style="text-align: center" class="w3-margin">
            <span class=" w3-red w3-padding w3-small">Please check and fill all fields correctly !</span>
          </div>
          <form class="w3-container">
            <p>
            <icon name="user"></icon><input class="w3-input w3-border" type="text" placeholder="Firstname" v-model="firstname" required>
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
              <span v-show="register" class="w3-text-green w3-animate-bottom w3-small"><icon name="check"></icon> {{reg}}</span><br>
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
    <div style="text-align: center">
      <span class="w3-text-purple w3-animate-zoom w3-margin w3-large">{{regs}}</span>
    </div>
    <div class="w3-margin w3-responsive" style="height: 500px">
      <table class="w3-table-all w3-centered w3-small">
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
        <tr v-for="member in members" class="w3-hover-light-grey">
          <td>{{member.firstName}}</td>
          <td>{{member.lastName}}</td>
          <td>{{member.age}}</td>
          <td>{{member.occupation}}</td>
          <td>{{member.contactDetails.phoneNumber}}</td>
          <td>{{member.contactDetails.emailAddress}}</td>
          <td>{{member.houseAddress}}</td>
          <td>{{member.gender}}</td>
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
      regs: [],
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
      phone_number: "",
      msg: "",
      msgAlert: false,
      register: false,
      reg: "",
      members: [],
      showAlert: false

    }
  },
  methods: {
    change: function($event){
      this.selectedGender = $event.target.value;
    },
    submitMembersDeatails: function(){
      if(!this.selectedGender){
        this.showAlert = true;
        this.register = false;
      }
      if(this.firstname == ""){
        this.showAlert = true;
        this.register = false;
      }
      if(this.lastname == ""){
        this.showAlert = true;
        this.register = false;
      }
      if(this.age == ""){
        this.showAlert = true
        this.register = false;
      }
      if(isNaN(this.age) == true){
        this.showAlert = true;
        this.register = false;
      }
      if(this.occupation == ""){
        this.showAlert = true;
        this.register = false;
      }
      if(this.phone_number == ""){
        this.showAlert = true;
        this.register = false;
      }
      if(isNaN(this.phone_number) == true){
        this.showAlert = true;
        this.register = false;
      }
      if(this.house_addres == ""){
        this.showAlert = true;
        this.register = false;
      }
      else{
        this.alert = false;
        this.showAlert = false;
        this.axios({
          url: "http://localhost:3000/members/membersData",
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
          console.log(response);
          if(response.data.msg == "success"){
              this.register = true;
              this.reg = response.data.message;
          }
          else if(response.data.msg == "registered"){
            this.register = true;
            this.reg = response.data.message
          }
        })
        .catch(err=>{
          console.log("an error occured" + err)
        })
        return true
      }
    },

    adminLogin: function(){
      if(this.Username.length < 1){
        this.userAlert = true;
        this.msgAlert = false
      }
      if(this.password.length < 1){
          this.passAlert = true;
          this.msgAlert = false
      }
      if(this.Username.trim().length >= 1 && this.password.trim().length >= 1){
        this.userAlert = false;
        this.passAlert  = false;
        // making the ajax call
        this.axios({
          url: "http://localhost:3000/members/login",
          method: "post",
          dataType: "json",
          data: {
            username: this.Username,
            password: this.password
          }
        })
        .then(res=>{
          console.log(res);
            if(res.data.message == "success"){
              var newtoken = res.data.token
              this.defaultShow = false;
              this.msgAlert = false;
              this.axios({
                url: `http://localhost:3000/members/admin?token=${newtoken}`,
                method: "get",
                dataType: "json",
              })
              .then(res=>{
                if(res.data.msg == "success"){
                  this.regs = res.data.message;
                  this.members = res.data.caicc_members;
                  console.log(this.members);
                }
                
              }).catch(err=>{
                console.log("an error occured " + err);
              })
            }
            else if(res.data.msg == "error"){
                this.msg = res.data.message;
                this.msgAlert = true;
            }
            else if(res.data.msg == "Authentication failed"){
                this.msg = res.data.message;
                this.msgAlert = true
            }
        })
        .catch(err=>{
          console.log("an error has occured" + err.msg)
        })
      }
    },
    closeAdmin: function(){
      this.defaultShow = true
      this.Admin = false;
      this.Username = "";
      this.password = "";
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

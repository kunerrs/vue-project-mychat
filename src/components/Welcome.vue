<template>
  <div class="welcome container">
    <div class="card">
      <div class="card-content center-align">
        <div class="icon">
          <img :src="Img" alt="Emoji Icon">
        </div>
        <h2 class="center">Welcome</h2>

        <form @submit.prevent="enterChat">
          <label for="name">Please Enter Your Name:</label>
          <input type="text" v-model="name" name="name">
          <p v-if="feedback" class="feedback"> {{ feedback }}</p>
          <button class="btn center">Let's Chat!</button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import Img from '@/assets/hi.png'
export default {
  name: 'Welcome',
  data () {
    return {
      Img,
      name: null,
      feedback: null
    }
  },
  methods: {
    enterChat(){
      if(this.name){
        this.$router.push({ name: 'Chat', params: { name: this.name } })
      }else{
        this.feedback = 'You Must Enter a Name'
      }
    }
  }
}
</script>


<style>

.welcome {
  max-width: 500px;
  margin-top: 160px;
}

.welcome .card {
  padding: 16px;
}

.welcome .card h2 {
  font-family: 'Rowdies', cursive;
  font-weight: 700;
  color: rgb(39, 39, 39);
}

.welcome .card button {
  margin: 20px auto;
}

.welcome .card .icon img {
  height: 100px;
  width: 100px;
}

.welcome .btn {
  font-family: 'Rowdies', cursive;
  background: #febf63;
  border: 1px solid rgb(114, 113, 113);
}

.welcome form input[type="text"]{
  border-bottom: 2px solid;
  font-family: 'Roboto', sans-serif;
  font-weight: bold;
  text-align: center;
}

.welcome .card .feedback {
  margin: 8px auto;
  font-family: 'Roboto', sans-serif;
  color: #ffaf97;
  background: rgb(53, 53, 53);
  border-radius: 12px;
  padding: 3px;
}

.welcome .btn:hover{
  background: #fff;
  color: #febf63;;
}


</style>

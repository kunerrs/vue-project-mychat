<template>
  <div class="new-message">
      <form @submit.prevent="addMessage">
          <label for="new-message center-align"> Compose a Message</label>
          <input type="text" v-model="newMessage" name="new-message">
          <p v-if="feedback" class="feedback"> {{ feedback }} </p>
      </form>
  </div>
</template>

<script>
import db from '@/firebase/init'

export default {
    name:'NewMessage',
    props: ['name'],
    data() {
        return{
            feedback: null,
            newMessage: null
        }
    },
    methods: {
        addMessage(){
            if(this.addMessage){
                db.collection('my-chat-messages').add({
                    content: this.newMessage,
                    name: this.name,
                    time: Date.now()
                }).catch(err => {
                    console.log(err)
                })
                this.feedback = null,
                this.newMessage = null
            }else{
                this.feedback = 'Enter a Message First! '
            }
        }
    }
}
</script>

<style>
.new-message {
    text-align: center;
}

.new-message form input[type="text"]{
    padding-left: 12px;
    font-family: 'Roboto', sans-serif;
    border-bottom: 2px solid;
}

</style>
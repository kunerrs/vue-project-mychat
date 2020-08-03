<template>
  <div class="chat container">
      <h2 class="center">Hi, {{ this.name}}. </h2>
      <div class="card">
          <div class="card-content">
              <ul class="messages" v-chat-scroll>
                <li v-for="message in messages" :key="message.id">
                    <span class="pink-text"> {{message.name}}: </span>
                    <span class="grey-text text-darken-3"> {{message.content}} </span>
                    <span class="grey-text time"> {{message.timestamp}} </span>
                </li>
              </ul>
          </div>
          <div class="card-action">
              <NewMessage :name="name" />
          </div>
      </div>
      <div class="exit-icon center-align">
          <router-link :to="{ name:'Welcome' }">
              <i class="material-icons">exit_to_app</i>
          </router-link>
          
      </div>    
  </div>
</template>

<script>
import NewMessage from '@/components/NewMessage'
import db from '@/firebase/init'
import moment from 'moment'

export default {
    name: 'Chat',
    props: ['name'],
    components: {
        NewMessage
    },
    data() {
        return{
            messages: []
        }
    },
    created() {
        let ref = db.collection('my-chat-messages').orderBy('time')
        ref.onSnapshot( snapshot => {
            snapshot.docChanges().forEach( change => {
                if(change.type == 'added'){
                    let doc = change.doc
                    this.messages.push({ 
                        id: doc.id,
                        name: doc.data().name,
                        content: doc.data().content,
                        timestamp: moment(doc.data().time).calendar()
                    })
                }
            })
        })
    }
  
}
</script>

<style>

.chat h2 {
    font-size: 4em;
    font-family: 'Rowdies', cursive;
    color: rgb(53, 53, 53);
}

.chat .card span {
    font-size: 1.4em;
}

.chat .card .time{
    display: block;
    color: #aaa;
    font-size: .8em;
}

.messages {
    max-height: 350px;
    overflow: auto;
    font-family: 'Roboto', sans-serif;
}

.messages::-webkit-scrollbar{
    width: 3px;
}

.messages::-webkit-scrollbar-track{
    background: #ddd;
}

.messages::-webkit-scrollbar-thumb{
    background: #aaa;
}

.chat .exit-icon i{
    margin-top: 60px;
    font-size: 42px;
    color:rgb(53, 53, 53);
}

.chat .exit-icon i:hover{
    color: rgb(99, 98, 98);
}

</style>
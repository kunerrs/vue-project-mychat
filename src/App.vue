<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
/* body {
  background: #abf0e9;
} */

body {
    /* background: linear-gradient(-45deg, #ee7752, #e73c7e, #23a6d5, #23d5ab); */
    background: linear-gradient(-45deg, #7fdbda, #ade498, #ede682, #febf63);
    background-size: 400% 400%;
    animation: gradient 15s ease infinite;
    
}

@keyframes gradient {
    0% {
        background-position: 0% 50%;
    }
    50% {
        background-position: 100% 50%;
    }
    100% {
        background-position: 0% 50%;
    }
}
</style>

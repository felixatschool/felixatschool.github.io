<script setup>
  import { useRouter } from 'vue-router';

  const router = useRouter();

  const goto = (page) => {
    router.push( { name: page });
  };

</script>
<template>
  <div class="view">
    <div class="container">
      <h5 @click="goto('recipe')"> recipe </h5>
      <h5 @click="goto('calendar')"> calendar </h5>
      <h5 @click="goto('list')"> list </h5>
    </div>
    <!--<h4> khdr. </h4>-->
  </div>
</template>

<style scoped>

  .view {
    display:block;
    height:5vh;
    width:100vw;
    position:absolute;
    bottom:35px;
  }

  .container {
    width:70%;
    margin:0 auto;
    display:flex;
    justify-content: space-evenly;
    padding: 4px;
    border: 2px solid #ccc;
    border-radius: 16px;
    text-align:center;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  }

  h4 {
    color: #333;
    font-family: 'Quicksand', sans-serif; /* Default weight (300) */
    font-weight: 700; /* Bold weight (700) */
    font-size:2rem;
    position:sticky;
    bottom:0;
  }

</style>

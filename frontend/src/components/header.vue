<script setup>
  const props = defineProps({
    title: String
  });
</script>
<template>
  <h2> {{ title }} </h2>
</template>

<style scoped>
  h2 {
    font-family:'Quicksand', sans-serif;
    font-weight:700;
    width:100vw;
    font-size:2.2rem;
    padding-top:3vh;
    padding-left:10vw;
  }
</style>

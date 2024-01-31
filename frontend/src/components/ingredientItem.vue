<script setup>
  const props = defineProps({
    ingredient: Object
  });

  const name = props.ingredient.id;
  const required = props.ingredient.required;
  const order = props.ingredient.order;
  const note = props.ingredient.note;
</script>

<template>
  <li>
    <div class="card">
      <h3 class="title">{{ name }}</h3>
      <p class="quantity">Required: {{ required }}</p>
    </div>
  </li>
</template>


<style scoped>
  li {
    list-style: none;
    margin-bottom: 4px;
  }

  .card {
    border: 1px solid #ccc;
    padding-top:6px;
    padding-left:16px;
    padding-bottom: 6px;
    border-radius: 8px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  }

  .title {
    font-size: 1.5rem;
  }

  .quantity {
    font-style: italic;
    font-size: .9rem;
    color: #666;
  }
</style>

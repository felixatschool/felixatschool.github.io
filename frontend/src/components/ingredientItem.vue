<script setup>
  import { defineProps } from 'vue';

  const props = defineProps({
    ingredient: Object
  });

  const name = props.ingredient.name;
  const quantity = props.ingredient.quantity;
</script>

<template>
  <li>
    <div class="card">
      <h3 class="title">{{ name }}</h3>
      <p class="quantity">Quantity: {{ quantity }}</p>
    </div>
  </li>
</template>


<style scoped>
  li {
    list-style: none;
    margin-bottom: 6px;
  }

  .card {
    border: 1px solid #ccc;
    padding: 16px;
    border-radius: 8px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  }

  .title {
    font-size: 1.5rem;
  }

  .quantity {
    font-style: italic;
    color: #666;
  }
</style>

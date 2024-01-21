<script setup>
  import { defineProps } from 'vue';

  const props = defineProps({
    recipe: Object
  });

  const title = props.recipe.id;
  const ingredients = props.recipe.data.ingredients || [];
  const prepTime = props.recipe.data.prepTime || 'N/A';
  const servings = props.recipe.data.servings || 'N/A';
</script>

<template>
  <li>
    <div class="card">
      <h3 class="title">{{ title }}</h3>
      <p class="prep-time">Preparation Time: {{ prepTime }} minutes</p>
      <p class="servings">Servings: {{ servings }}</p>
    </div>
  </li>
</template>

<style scoped>
li {
  list-style: none;
  margin-bottom: 16px;
}

.card {
  border: 1px solid #ccc;
  padding: 16px;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.title {
  font-size: 1.5rem;
  margin-bottom: 8px;
}

.ingredient-list {
  margin-bottom: 8px;
}

.prep-time,
.servings {
  font-style: italic;
  margin-top: 8px;
  color: #666;
}
</style>

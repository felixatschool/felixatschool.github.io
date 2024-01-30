<script setup>
  import { ref, onMounted } from 'vue';
  import * as Backend from '../composables/backend.js';
  import Header from '../components/header.vue';
  import Footer from '../components/footer.vue';
  import RecipeItem from '../components/recipeItem.vue';

  const props = defineProps({
    data: Object,
    recipes: Object
  });


  const title = props.data.id;
  const day = title.slice(1);
  const recipe = ref(props.data.data.recipe);
  const cook = ref(props.data.data.cook);
  const selectedRecipe = ref(props.recipes.documents[0].id);
  const editMode = ref(false);
  const loading = ref(false);

  const save = async () => {
    loading.value = true;
    let success = await Backend.saveCalendar(title, selectedRecipe.value, cook.value);
    recipe.value = selectedRecipe.value;
    cook.value = "you";
    loading.value = false;
    editMode.value = !editMode.value;
    if(success) {
      recipe.value = selectedRecipe.value;
      cook.value = "you";
    }
  };
</script>

<template>

  <div class="card">
    <h3 class="title">{{ day }}</h3>
    <div class="Recipe">
      <p class="prep-time">Recipe : </p>
      <select v-if="!editMode">
	<option selected disabled>{{ recipe }}</option>
      </select>
      <select v-else v-model="selectedRecipe">
	<option v-for="recipe in recipes.documents" :key="recipe.id" :value="recipe.id" @change="recipeChange">{{ recipe.id }}</option>
      </select>
      <button v-if="loading"> 
	    <font-awesome-icon icon="fa-solid fa-spinner" spin />
      </button > 
      <button v-else-if="!editMode" @click="editMode = !editMode">Edit</button>
      <button v-else @click="save">Save</button>
    </div>
    <p class="servings">Cook : {{ cook }} </p>
  </div>

</template>

<style scoped>
  li {
    list-style: none;
    margin-bottom: 16px;
  }

  .card {
    border: 1px solid #ccc;
    padding: 16px;
    padding-top:8px;
    border-radius: 8px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  }

  .title {
    font-size: 1.5rem;
    margin-bottom: 4px;
  }

  p {
    display:inline;
  }

  .ingredient-list {
    margin-bottom: 8px;
  }

  .prep-time,
  .servings {
    font-style: italic;
    font-size:.89rem;
    color: #666;
  }
</style>

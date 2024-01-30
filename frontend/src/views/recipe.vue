<script setup>
  import { ref, reactive, watch } from 'vue';
  import { useRouter } from 'vue-router';
  import * as Backend from '../composables/backend.js';
  import Header from '../components/header.vue'
  import Footer from '../components/footer.vue'

  const props = defineProps({
    data: Object,
  });

  const router = useRouter();
  const loading = ref(false);
  const user = props.data.user;
  const recipes = props.data.recipes;

  const recipe = reactive({
    title: '',
    tags: '',
    ingredients: [{ name: '', quantity: 1, tag: 'none' }],
    servings: null,
    prepTime: null,
  });

  const ingredient = ref('');
  const ingredientTag = ref('');
  const showCreateRecipeForm = ref(false);

  const addIngredient = () => {
    let emptyLabel = false;
    recipe.ingredients.forEach( ingredient => {
      if(ingredient.name.trim() == "") {
	emptyLabel = true;
      }
    });
    if (!emptyLabel && recipe.ingredients.length < 20) {
      recipe.ingredients.push({ name: '', quantity: 1, tag: 'none' });
    }
  };

  const removeIngredient = (index) => {
    if (recipe.ingredients.length > 1) {
      recipe.ingredients.splice(index, 1);
    } else {
      recipe.ingredients.splice(index, 1);
      recipe.ingredients.push({ name: '', quantity: 1, tag: 'none' });
    }
  };

  const incrementQuantity = (index) => {
    recipe.ingredients[index].quantity++;
  };

  const decrementQuantity = (index) => {
    console.log(recipe.ingredients[index].quantity);
    if (recipe.ingredients[index].quantity > 1) {
      recipe.ingredients[index].quantity--;
    }
  };

  const saveRecipe = async () => {
    loading.value = true;
    await Backend.saveRecipe(recipe);
    toggleCreateRecipeForm();
    loading.value = false;
  };

  const toggleCreateRecipeForm = () => {
    showCreateRecipeForm.value = !showCreateRecipeForm.value;
  };

  const handleValue = (val) => {
    if(val < 0) {
      if(recipe.prepTime == val) recipe.prepTime = 0;
      if(recipe.servings == val) recipe.servings = 0;
    }
  }
</script>

<template>
  <div>
    <Header title="recipes"/>
    <div class="wrapper">
      <div class="recipes">
	<button v-if="!showCreateRecipeForm" class="submit-button" @click="toggleCreateRecipeForm">Create Recipe</button>
	<div v-if="showCreateRecipeForm">
	  <form @submit.prevent="saveRecipe">
	  <label for="title">Title:</label>
	  <input v-model="recipe.title" type="text" id="title" required />
	  <label for="ingredients">Ingredients:</label>
	  <div v-for="(ingredient, index) in recipe.ingredients" :key="index" class="ingredients-input">
	    <input class="input-ing" v-model="ingredient.name" type="text" placeholder="new ingredient" required />
	    <div class="counter">
	      <button type="button" @click="incrementQuantity(index)">+</button>
	      <span>{{ ingredient.quantity }}</span>
	      <button type="button" @click="decrementQuantity(index)">-</button>
	    </div>
	    <button type="button" @click="removeIngredient(index)" class="remove-button">&#10006;</button>
	  </div>
	  <button class="submit-button" @click.prevent="addIngredient">Add Ingredient</button>
	  <label for="prepTime">Preparation Time (minutes):</label>
	  <input v-model="recipe.prepTime" type="number" id="prepTime" required placeholder="0" @change="handleValue(recipe.prepTime)"/>

	  <label for="servings">Servings:</label>
	  <input v-model="recipe.servings" type="number" id="servings" required placeholder="0" @change="handleValue(recipe.servings)"/>

	  <button v-if="!loading" class="submit-button" type="submit">Save Recipe</button>
	  <button v-else class="submit-button"> 
	    <font-awesome-icon icon="fa-solid fa-spinner" spin />
	  </button > 
	  <button class="submit-button" @click="toggleCreateRecipeForm">Cancel</button>
	  </form>
	</div>

	<div v-else-if="recipes.length === 0">No recipes yet. Create one now!</div>

	<div v-else>
	  <div v-for="(recipe, index) in recipes.documents" :key="index" class="recipe-card" @click="viewRecipeDetails(index)">
	    <h4 class="title">{{ recipe.id }}</h4>
	    <p>Prep Time: {{ recipe.data.prepTime }} minutes</p>
	    <p>Servings: {{ recipe.data.servings }}</p>
	  </div>
	</div>

      </div>
    </div>
    <Footer />
  </div>
</template>

<style scoped>

  .wrapper {
    width:100vw;
    display:flex;
    justify-content:center;
    max-height:75vh;
    overflow:auto;height:75vh;
  }

  .recipes {
    width:80vw;
    margin:0 auto;
    border-radius: 8px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    background-color: #fff;
    padding: 20px;
  }

  .recipe-card  {
    width:100%;
    margin:0 auto;
    border-bottom:2px solid #eee;
    padding:8px;
  }

  label {
    display: block;
    margin-top: 10px;
    color: #555;
  }

  input {
    width: 100%;
    padding: 8px;
    margin-top: 4px;
    margin-bottom: 16px;
    box-sizing: border-box;
    border: 1px solid #ccc;
    border-radius: 4px;
    font-size: 16px;
  }

  h4 {
    font-size: 1.3rem;
  }

  .ingredients-input {
    display: flex;
    align-items: center;
    border: none;
    border-bottom: 1px solid #ccc;
    margin-top: 4px;
    margin-bottom: 16px;
    box-sizing: border-box;
  }

  .ingredients-input input {
    flex: 1;
    border: none;
    box-sizing: border-box;
    font-size: 16px;
    margin-bottom:0;
  }

 .ingredients-input button {
    background-color: transparent;
    border: none;
    outline: none;
    cursor: pointer;
    padding: 8px;
    color: #555;
    font-size:18px;
  }

  .counter {
    display: flex;
    align-items: center;
  }

  .counter button {
    background-color: transparent;
    border: none;
    outline: none;
    cursor: pointer;
    font-size: 18px;
    margin: 0 4px;
  }

  .counter span {
    font-size: 16px;
  }

  .submit-button {
    width: 100%;
    padding: 10px;
    background-color: #3498db;
    color: #fff;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    font-size: 18px;
    transition: background-color 0.3s;
    margin-top:10px;
  }

  p {
    font-style: italic;
    font-size: .9rem;
    color: #666;
  }

</style>

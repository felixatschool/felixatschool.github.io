<script setup>
  import { ref, reactive, onMounted } from 'vue';
  import { useRouter } from 'vue-router';
  import * as Backend from '../composables/backend.js';
  import Header from '../components/header.vue'
  import Footer from '../components/footer.vue'

  const router = useRouter();
  const loading = ref(false);

  const signout = () => {
    Backend.removeAccessToken();
    router.push( { name: 'login' });
  }

  const recipe = reactive({
    title: '',
    tags: '',
    ingredients: [{ name: '', quantity: 1, tag: 'none' }],
    servings: 0,
    prepTime: 0,
  });

  const ingredient = ref('');
  const ingredientTag = ref('');

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
    if (recipe.ingredients[index].quantity > 1) {
      recipe.ingredients[index].quantity--;
    }
  };

  const saveRecipe = async () => {
    await Backend.saveRecipe(recipe);
  };
</script>

<template>
  <div class="container">
    <Header />
    <div class="wrapper">
      <h1>Create Recipe</h1>
      <form @submit.prevent="saveRecipe">
	<label for="title">Title:</label>
	<input v-model="recipe.title" type="text" id="title" required />

	<!--
	<label for="tags">Tags:</label>
	<input v-model="recipe.tags" type="text" id="tags" />
	-->

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
	<input v-model="recipe.prepTime" type="number" id="prepTime" required />

	<label for="servings">Servings:</label>
	<input v-model="recipe.servings" type="number" id="servings" required />

	<button class="submit-button" type="submit">Save Recipe</button>
      </form>
    </div>
  <Footer />
  </div>
</template>

<style scoped>

  .container {
    width:100vw;
    display:flex;
    justify-content:center;
    padding-top:50px;
  }

  form {
    max-width: 400px;
    width: 100%;
    padding: 20px;
    background-color: #fff;
    border-radius: 8px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  }

  h1 {
    text-align: center;
    color: #333;
    padding-bottom:10px;
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
    outline: none;
    padding: 8px;
    box-sizing: border-box;
    font-size: 16px;
  }

 .ingredients-input button {
    background-color: transparent;
    border: none;
    outline: none;
    cursor: pointer;
    padding: 8px;
    margin-left: 8px;
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
  }

</style>

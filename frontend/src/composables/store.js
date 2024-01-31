import { ref, reactive } from 'vue';
import Cookies from 'js-cookie';

const user_obj = reactive({
  token: null,
  name: null,
  email: null
});

const recipes_obj = reactive({
  documents: [
    {
      id: 'pasta',
      data: {
	prepTime: 20,
	servings: 4
      }
    },
    {
      id: 'lasagna',
      data: {
	prepTime: 40,
	servings: 6
      }
    }
  ]
});

const calendar_obj = reactive({
  documents: [
    {
      id: "0monday",
      data: {
	cook: "Felix Lefebvre",
	recipe: "pasta",
      }
    },
    {
      id: "1tuesday",
      data: {
	cook: "Felix Lefebvre",
	recipe: "lasagna",
      }
    },
  ]
});

const list_obj = reactive({
  documents: [
    {
      id: "tomato",
      note: null,
      order: null,
      owned: 0,
      required: 2
    }
  ]
});

const data = reactive({
  user: user_obj,
  recipes: recipes_obj,
  calendar: calendar_obj,
  list: list_obj
});


export const getData = () => {
  return data;
};

export const setData = (token, data) => {
  recipes_obj.documents = data.recipes;
  calendar_obj.documents = data.calendar;
  list_obj.documents = data.list;
  setUser(token, data.user);
}

export const setCalendar = (data) => {
  calendar_obj.documents = data;
}

export const setList = (data) => {
  list_obj.documents = data;
}

export const setRecipes = (data) => {
  recipes_obj.documents = data;
}

export const setUser = (token, data) => {
  user_obj.token = token;
  user_obj.name = data.name;
  user_obj.email = data.email;
}

export const removeUser = () => {
  Cookies.remove('accessToken');
  user_obj.token = null;
  user_obj.name = null;
  user_obj.email = null;
}

export const setAccessToken = (token) => {
  Cookies.set('accessToken', token);
};

export const getAccessToken = () => {
  return Cookies.get('accessToken');
};

import axios from 'axios';
import * as Store from './store.js';

export const login = async (email, password, action) => {
    try {
      const apiUrl = 'https://northamerica-northeast1-upbeat-aspect-410421.cloudfunctions.net/proxyFunction';
      const req = await axios.post(apiUrl, {
	  email: email,
	  password: password,
	  action: action,
      });
      Store.setAccessToken(req.data.user.user.stsTokenManager.accessToken);
      await fetchData();
    } catch (e) {
      Store.removeUser();
      throw e;
    }
};

export const isAuth = async () => {
  try {
    const token = Store.getAccessToken();
    if(token) {
      const resp = await axios.post(
	'https://northamerica-northeast1-upbeat-aspect-410421.cloudfunctions.net/hello', {},
	{
	  headers: { Authorization: `${token}`}
	}
      );
      
      if(resp.status == 200) {
	await fetchData();
      } else {
	throw 'token has expired';
      }
    } else {
      throw 'User is not authenticated';
    }
  } catch (e) {
    Store.removeUser();
  }
}

export const fetchUser = async () => {
  try {
    const token = Store.getAccessToken();
    if(token) {
      const resp = await axios.get(
	'https://northamerica-northeast1-upbeat-aspect-410421.cloudfunctions.net/getUser',
	{
	  headers: { Authorization: `${token}`}
	}
      );
      
      if(resp.status == 200) {
	Store.setUser(token, resp.data.resp);
      } else {
	throw 'error';
      }
    } else {
      throw 'User is not authenticated';
    }
  } catch (e) {
    Store.removeUser();
    return false;
  }
}

export const fetchData = async () => {
  try {
    const token = Store.getAccessToken();
    if(token) {
      const resp = await axios.get(
	'https://northamerica-northeast1-upbeat-aspect-410421.cloudfunctions.net/getData',
	{
	  headers: { Authorization: `${token}`}
	}
      );
      if(resp.status == 200) {
	Store.setData(token, resp.data.data);
      } else {
	throw 'error';
      }
    } else {
      throw 'User is not authenticated';
    }
  } catch (e) {
    Store.removeUser();
    console.log(e);
    return false;
  }
}


export const saveRecipe = async (recipe) => {
  try {
    const token = Store.getAccessToken();
    if(token) {
      const resp = await axios.post(
	'https://northamerica-northeast1-upbeat-aspect-410421.cloudfunctions.net/write', {recipe: recipe},
	{
	  headers: { Authorization: `${token}`}
	}
      );
      
      if(resp.status == 200) {
	await fetchRecipes();
	return true;
      } else {
	throw 'error';
      }
    } else {
      throw 'User is not authenticated';
    }
  } catch (e) {
    Store.removeUser();
    console.log(e);
    return false;
  }
}

export const fetchRecipes = async () => {
  try {
    const token = Store.getAccessToken();
    if(token) {
      const resp = await axios.get(
	'https://northamerica-northeast1-upbeat-aspect-410421.cloudfunctions.net/getUserRecipe',
	{
	  headers: { Authorization: `${token}`}
	}
      );
      
      if(resp.status == 200) {
	Store.setRecipes(resp.data.documents);
      } else {
	throw 'error';
      }
    } else {
      throw 'User is not authenticated';
    }
  } catch (e) {
    Store.removeUser();
    console.log(e);
    return false;
  }
}

export const fetchTheList = async () => {
  try {
    const token = Store.getAccessToken();
    if(token) {
      const resp = await axios.get(
	'https://northamerica-northeast1-upbeat-aspect-410421.cloudfunctions.net/updateList',
	{
	  headers: { Authorization: `${token}`}
	}
      );
      
      if(resp.status == 200) {
	Store.setList(resp.data.updatedList);
      } else {
	throw 'error';
      }
    } else {
      throw 'User is not authenticated';
    }
  } catch (e) {
    Store.removeUser();
    console.log(e);
    return false;
  }
}

export const fetchCalendar = async () => {
  try {
    const token = Store.getAccessToken();
    if(token) {
      const resp = await axios.get(
	'https://northamerica-northeast1-upbeat-aspect-410421.cloudfunctions.net/getCalendar',
	{
	  headers: { Authorization: `${token}`}
	}
      );
      
      if(resp.status == 200) {
	Store.setCalendar(resp.data.documents);
      } else {
	throw 'error';
      }
    } else {
      throw 'User is not authenticated';
    }
  } catch (e) {
    Store.removeUser();
    console.log(e);
    return false;
  }
}

export const saveCalendar = async (title, recipe, cook) => {
  try {
    const token = Store.getAccessToken();
    if(token) {
      const data = {
	id: title,
	recipe: recipe,
	cook: cook
      }
      const resp = await axios.post(
	'https://northamerica-northeast1-upbeat-aspect-410421.cloudfunctions.net/saveCalendar', data,
	{
	  headers: { Authorization: `${token}`}
	}
      );
      
      if(resp.status == 200) {
	await fetchCalendar();
	await fetchTheList();
	return true;
      } else {
	throw 'error';
      }
    } else {
      throw 'User is not authenticated';
    }
  } catch (e) {
    Store.removeUser();
    console.log(e);
    return false;
  }
}

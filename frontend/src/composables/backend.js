import axios from 'axios';
import Cookies from 'js-cookie';

export const login = async (email, password, action) => {
    try {
      const apiUrl = 'https://northamerica-northeast1-upbeat-aspect-410421.cloudfunctions.net/proxyFunction';
      const req = await axios.post(apiUrl, {
	  email: email,
	  password: password,
	  action: action,
      });

      const user = req.data;
      const token = user.user.user.stsTokenManager.accessToken;
      setAccessToken(token);
    } catch (e) {
      throw e;
    }
};

export const isAuth = async () => {
  try {
    const token = getAccessToken();
    if(token) {
      const resp = await axios.post(
	'https://northamerica-northeast1-upbeat-aspect-410421.cloudfunctions.net/hello', {},
	{
	  headers: { Authorization: `${token}`}
	}
      );
      
      if(resp.status == 200) {
	console.log('token is valid');
	return true;
      } else {
	throw 'token is not valid';
      }
    } else {
      throw 'User is not authenticated';
    }
  } catch (e) {
    removeAccessToken();
    console.log(e);
    return false;
  }
}

export const saveRecipe = async (recipe) => {
  try {
    const token = getAccessToken();
    if(token) {
      const resp = await axios.post(
	'https://northamerica-northeast1-upbeat-aspect-410421.cloudfunctions.net/write', {recipe: recipe},
	{
	  headers: { Authorization: `${token}`}
	}
      );
      
      if(resp.status == 200) {
	console.log(resp);
	return true;
      } else {
	throw 'error';
      }
    } else {
      throw 'User is not authenticated';
    }
  } catch (e) {
    removeAccessToken();
    console.log(e);
    return false;
  }
}

export const fetchRecipes = async () => {
  console.log('fetchRecipes');
  try {
    const token = getAccessToken();
    console.log(token);
    if(token) {
      const resp = await axios.get(
	'https://northamerica-northeast1-upbeat-aspect-410421.cloudfunctions.net/read',
	{
	  headers: { Authorization: `${token}`}
	}
      );
      
      if(resp.status == 200) {
	return resp.data.documents;
      } else {
	throw 'error';
      }
    } else {
      throw 'User is not authenticated';
    }
  } catch (e) {
    removeAccessToken();
    console.log(e);
    return false;
  }
}



export const setAccessToken = (token) => {
  Cookies.set('accessToken', token);
};

const getAccessToken = () => {
  return Cookies.get('accessToken');
};

export const removeAccessToken = () => {
  Cookies.remove('accessToken');
};

<script>
import { ref, onMounted } from 'vue';
import { initializeApp } from 'firebase/app';
import {
  onAuthStateChanged,
  signInWithEmailAndPassword,
  getAuth
} from 'firebase/auth';

const firebaseConfig = {
  apiKey: import.meta.env.VITE_APIKEY,
  authDomain: import.meta.env.VITE_AUTHDOMAIN
};

export default {
  setup() {
    const message = ref('');
    console.log(firebaseConfig);

    const app = initializeApp(firebaseConfig);
    const auth = getAuth(app, {/* extra options */ });

    onMounted(() => {
      onAuthStateChanged(auth, (user) => {
        if (user) {
	  console.log(user);
          message.value = "Welcome, " + user.email;
        } else {
          message.value = "No user signed in.";
        }
      });

      signIn();
    });

    function signIn() {
      const email = "felix@app.com";
      const password = "admin123";

      signInWithEmailAndPassword(auth, email, password)
        .catch((error) => {
          message.value = error.message;
        });
    }

    return {
      message
    };
  }
};
</script>

<template>
  <div>
    <p id="message">{{ message }}</p>
  </div>
</template>


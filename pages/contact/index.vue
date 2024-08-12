<template>
  <div>
    <h1>Contact Us</h1>
    <form @submit.prevent="submitForm">
      <div>
        <label for="name">Name:</label>
        <input type="text" v-model="name" id="name" required />
      </div>
      <div>
        <label for="email">Email:</label>
        <input type="email" v-model="email" id="email" required />
      </div>
      <div>
        <label for="message">Message:</label>
        <textarea v-model="message" id="message" required></textarea>
      </div>
      <button type="submit">Submit</button>
    </form>
    <div v-if="submitted">
      <p>Submit successful. Data:</p>
      <p>{{ name }}, {{ email }}, {{ message }}</p>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref } from "vue";

const name = ref<string>("");
const email = ref<string>("");
const message = ref<string>("");
const submitted = ref<boolean>(false);

function submitForm() {
  // Spoof form submission
  submitted.value = true;
}
</script>

<style scoped>
form {
  max-width: 400px;
  margin: auto;
  display: flex;
  flex-direction: column;
  gap: 10px;
}

button {
  padding: 10px;
  background-color: #333;
  color: white;
  border: none;
  cursor: pointer;
}

button:hover {
  background-color: #555;
}
</style>

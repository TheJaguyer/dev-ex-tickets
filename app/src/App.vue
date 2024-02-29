<script setup>
import { ref } from "vue";

import NavBar from "./components/NavBar.vue";
import Admin from "./components/Admin.vue";
import User from "./components/User.vue";

const mode = ref("Admin");

function changeMode(newMode) {
  mode.value = newMode;
}

const tickets = ref([
  {
    category: "Hardware",
    type: "Laptop",
    subject: "Utter catastrophe",
    description: "My laptop is literally on fire!",
    docs: "nameoffileattached.ext",
    time: new Date().getTime(),
    user: "Doe",
  },
]);
</script>

<template>
  <NavBar @change-mode="changeMode" :mode="mode" />
  <Admin v-if="mode == 'Admin'" />
  <User v-if="mode == 'User'" :tickets="tickets" />
</template>

<style scoped></style>

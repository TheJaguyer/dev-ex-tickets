<script setup>
import { user } from "./components/store.js";

import NavBar from "./components/NavBar.vue";
import Admin from "./components/Admin.vue";
import User from "./components/User.vue";
</script>

<template>
  <NavBar />
  <Admin v-if="user.userMode == 'admin'" />
  <User v-if="user.userMode == 'user'" />
</template>

<style scoped></style>

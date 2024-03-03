<script setup>
import { user } from "./components/store.js";

import NavBar from "./components/NavBar.vue";
import Admin from "./components/Admin.vue";
import User from "./components/User.vue";
</script>

<template>
  <NavBar />
  <div class="container-fluid p-4">
    <Admin v-if="user.userMode == 'admin'" />
    <User v-if="user.userMode == 'user'" />
  </div>
</template>

<style scoped></style>

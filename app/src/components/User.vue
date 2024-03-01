<script setup>
import TicketForm from "./TicketForm.vue";
import { user } from "./store.js";
</script>

<template>
  <div class="container">Welcome, {{ user.userName }}</div>
  <TicketForm />
</template>

<style scoped></style>

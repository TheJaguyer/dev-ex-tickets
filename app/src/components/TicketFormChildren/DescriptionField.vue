<script setup>
import { ticket } from "../store.js";
</script>

<template>
  <!-- Description -->
  <label for="description" class="form-label">Description</label>
  <input
    required
    type="text"
    class="form-control mb-3"
    id="description"
    aria-describedby="description field"
    v-model="ticket.data.description"
  />
</template>

<style scoped></style>

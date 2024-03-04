<script setup>
import { categories, ticket } from "../store.js";

// The Category dropdown. The options are filled from the categories object in the store, so that adding or changing categories
// is as simple as edting that object.
</script>

<template>
  <label for="category" class="form-label">Category</label>
  <select
    required
    class="form-select mb-3"
    aria-label="category select"
    id="category"
    v-model="ticket.data.category"
    @change="ticket.data.type = ''"
  >
    <option selected disabled hidden :value="''">Select a category</option>
    <option v-for="category in Object.keys(categories)" :value="category">
      {{ category }}
    </option>
  </select>
  <div class="invalid-feedback">Please select a category</div>
</template>

<style scoped></style>

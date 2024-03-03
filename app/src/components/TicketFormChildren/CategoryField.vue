<script setup>
import { categories, ticket } from "../store.js";
</script>

<template>
  <!-- Category -->
  <!-- Note: I have decided to use v-for in the case that new catagories are added later. 
        It is much easier to simply modify the obejct in the store above than to ensure the options are hardcoded to match
        The @change line is there to clear the type selector whenever the category changes-->
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

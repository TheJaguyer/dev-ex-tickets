<script setup>
import { categories, ticket } from "../store.js";
</script>

<template>
  <!-- Type -->
  <label for="type" class="form-label">Type</label>
  <!-- If no category is selected, render a nearly empty and disabled dropdown -->
  <!-- If a category IS selected, render an enabled version with the relevant options included -->
  <select
    required
    class="form-select mb-3"
    aria-label="type select"
    id="type"
    v-model="ticket.data.type"
    :disabled="ticket.data.category == ''"
  >
    <option selected disabled hidden :value="''">Select a type</option>
    <option v-for="subCat in categories[ticket.data.category]" :value="subCat">
      {{ subCat }}
    </option>
  </select>
</template>

<style scoped></style>

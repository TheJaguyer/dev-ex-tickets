<script setup>
import { categories, ticket } from "../store.js";

function addType(event) {
  if (!ticket.data.types.includes(event.target.value)) {
    ticket.addType(event.target.value);
  }
}

function deleteType(index) {
  ticket.deleteType(index);
}
</script>

<template>
  <!-- Type -->
  <div class="container px-0">
    <label for="type" class="form-label">Type</label>
    <!-- If no category is selected, render a nearly empty and disabled dropdown -->
    <!-- If a category IS selected, render an enabled version with the relevant options included -->
    <select
      required
      class="form-select"
      aria-label="type select"
      id="type"
      @change="addType"
      :disabled="ticket.data.category == ''"
    >
      <option selected disabled hidden :value="''">Select a type</option>
      <option
        v-for="subCat in categories[ticket.data.category]"
        :value="subCat"
      >
        {{ subCat }}
      </option>
    </select>
    <div class="row my-1"></div>
    <button
      v-for="(singleType, index) in ticket.data.types"
      class="mb-3 me-1 btn btn-secondary col-sm-4 p-0"
      type="button"
      @click="deleteType(index)"
    >
      {{ singleType }}
    </button>
  </div>
</template>

<style scoped></style>

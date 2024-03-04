<script setup>
import { categories, ticket } from "../store.js";

function addType(event) {
  ticket.addType(event.target.value);
}

function deleteType(index) {
  ticket.deleteType(index);
}

// The 'type' dropdown. I did not like the look of bootstrap's multi-dropdown,
// so I used a regular dropdown that adds a type to the type array on change.
// The type options are filled from the categories object in the store,
// using the selected category to grab the correct array. If no category is
// selected, the type dropdown will be disabled.
</script>

<template>
  <div class="container px-0">
    <label for="type" class="form-label">Type</label>
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

<script setup>
import { ref } from "vue";
import { categories, blankTicket } from "./store.js";

const newTicket = ref({ ...blankTicket });
</script>

<template>
  <form class="container">
    <h3>Ticket Details</h3>
    <div class="mb-3">
      <!-- Category -->
      <!-- Note: I have decided to use v-for in the case that new catagories are added later. 
        It is much easier to simply modify the obejct in the store above than to ensure the options are hardcoded to match
        The @change line is there to clear the type selector whenever the category changes-->
      <label for="category" class="form-label">Category</label>
      <select
        class="form-select"
        aria-label="category select"
        id="category"
        v-model="newTicket.category"
        @change="newTicket.type = ''"
      >
        <option selected disabled hidden :value="''">Select a category</option>
        <option v-for="category in Object.keys(categories)" :value="category">
          {{ category }}
        </option>
      </select>
      <!-- Type -->
      <label for="type" class="form-label">Type</label>
      <!-- If no category is selected, render a nearly empty and disabled dropdown -->
      <!-- If a category IS selected, render an enabled version with the relevant options included -->
      <select
        class="form-select"
        aria-label="type select"
        id="type"
        v-model="newTicket.type"
        :disabled="newTicket.category == ''"
      >
        <option selected disabled hidden :value="newTicket.type">
          Select a type
        </option>
        <option
          v-for="subCat in categories[newTicket.category]"
          :value="subCat"
        >
          {{ subCat }}
        </option>
      </select>
      <!-- Subject -->
      <label for="subject" class="form-label">Subject</label>
      <input
        type="text"
        class="form-control"
        id="subject"
        aria-describedby="subject field"
        v-model="newTicket.subject"
      />
      <!-- Description -->
      <label for="description" class="form-label">Description</label>
      <input
        type="text"
        class="form-control"
        id="description"
        aria-describedby="description field"
        v-model="newTicket.description"
      />
      <!-- Ticket Files & Documents -->
      <label for="docs" class="form-label">Ticket Files & Documents</label>
      <div>
        <!-- The div here is used just to render the button as a block instead of an inline element-->
        <button type="attach" class="btn btn-primary text-bg-light">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="26"
            height="26"
            fill="currentColor"
            class="bi bi-plus"
            viewBox="0 0 16 16"
          >
            <path
              d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4"
            />
          </svg>
          Attach File
        </button>
      </div>
    </div>
    <div class="container">
      <button type="cancel" class="btn btn-primary">Cancel</button>

      <button
        type="submit"
        class="btn btn-primary"
        @click="console.log(newTicket)"
        disabled
      >
        Submit
      </button>
    </div>
  </form>
</template>

<style scoped></style>

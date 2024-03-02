<script setup>
import { ref } from "vue";
import { categories, blankTicket } from "./store.js";
import AttachedFile from "./TicketFormChildren/AttachedFile.vue";

//  The 'docs' property needs to be set separately, or just the reference to the empty array will be used.
// This leads to the original 'blankTicket' object to begin storing the files arr, which of course is bad.
const newTicket = ref({ ...blankTicket, docs: [] });
function resetTicket() {
  newTicket.value = { ...blankTicket, docs: [] };
  fileCount.value = 0;
}

const fileCount = ref(0);
function addFile() {
  newTicket.value.docs.push(
    "nameoffileattached" +
      (fileCount.value == 0 ? "" : fileCount.value) +
      ".ext"
  );
  fileCount.value++;
}
// Note: You may notice file-count does not go down. This is just to provide visual clarity
// that you are in fact deleting specific files, and not just removing the most recent.
function deleteFile(index) {
  newTicket.value.docs.splice(index, 1);
}
</script>

<template>
  <form
    class="container-md position-absolute top-50 start-50 translate-middle bg-light border border-3 border-color-light rounded p-3"
    style="max-width: 740px"
  >
    <h3 mb-3>Ticket Details</h3>

    <!-- Category -->
    <!-- Note: I have decided to use v-for in the case that new catagories are added later. 
        It is much easier to simply modify the obejct in the store above than to ensure the options are hardcoded to match
        The @change line is there to clear the type selector whenever the category changes-->
    <label for="category" class="form-label">Category</label>
    <select
      class="form-select mb-3"
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
      class="form-select mb-3"
      aria-label="type select"
      id="type"
      v-model="newTicket.type"
      :disabled="newTicket.category == ''"
    >
      <option selected disabled hidden :value="newTicket.type">
        Select a type
      </option>
      <option v-for="subCat in categories[newTicket.category]" :value="subCat">
        {{ subCat }}
      </option>
    </select>
    <!-- Subject -->
    <label for="subject" class="form-label">Subject</label>
    <input
      type="text"
      class="form-control mb-3"
      id="subject"
      aria-describedby="subject field"
      v-model="newTicket.subject"
    />
    <!-- Description -->
    <label for="description" class="form-label">Description</label>
    <input
      type="text"
      class="form-control mb-3"
      id="description"
      aria-describedby="description field"
      v-model="newTicket.description"
    />
    <!-- Ticket Files & Documents -->
    <label for="docs" class="form-label">Ticket Files & Documents</label>
    <div class="row mb-3">
      <div class="text-muted" v-if="newTicket.docs.length == 0">
        Currently no attached files
      </div>
      <AttachedFile
        v-for="(file, index) in newTicket.docs"
        @deleteSelf="deleteFile"
        :index="index"
        :key="index"
        >{{ file }}</AttachedFile
      >
    </div>
    <div class="mb-3">
      <!-- The div here is used just to render the button as a block instead of an inline element-->
      <button
        type="attach"
        class="btn btn-primary text-bg-light"
        @click="addFile"
      >
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

    <div>
      <button type="cancel" class="btn btn-primary" @click="resetTicket">
        Cancel
      </button>

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

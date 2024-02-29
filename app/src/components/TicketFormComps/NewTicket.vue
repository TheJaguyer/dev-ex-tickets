<script setup>
import { ref } from "vue";

const newTicket = ref({
  category: "Select a category",
  type: "Select a type",
  subject: "",
  description: "",
  docs: "",
  time: 0,
  user: "Doe",
});

// An object of lists, to help present only relevant 'types' in the form.
// Note: I have added 'Other' to the final list for the sake of consistency.
const subCats = ref({
  Hardware: [
    "Laptop",
    "Mobile",
    "Peripherals",
    "Desk Phone",
    "Printers",
    "Other",
  ],
  Software: [
    "Teams/Zoom",
    "Mobile Blackberry",
    "Adobe",
    "Outlook",
    "Microsoft Office",
    "Other",
  ],
  Network: ["Network Access", "Connectivity", "VPN", "Drivers", "Other"],
  "In-Processing": [
    "Access Badge",
    "Common Access Card (CAC)",
    "SIPR",
    "Trello",
    "Other",
  ],
});
</script>

<template>
  <form class="container">
    <h3>Ticket Details</h3>
    <div class="mb-3">
      <!-- Category -->
      <!-- Note: I have decided to use v-for in the case that new catagories are added later. 
        It is much easier to simply modify the obejct above than to ensure the options are hardcoded to match-->
      <label for="category" class="form-label">Category</label>
      <select
        class="form-select"
        aria-label="category select"
        id="category"
        v-model="newTicket.category"
        @change="newTicket.type = 'Select a type'"
      >
        <option selected disabled>Select a category</option>
        <option v-for="cat in Object.keys(subCats)" :value="cat">
          {{ cat }}
        </option>
      </select>
      <!-- Type -->
      <label for="type" class="form-label">Type</label>
      <!-- If no category is selected, render a nearly empty and disabled dropdown -->
      <select
        v-if="newTicket.category == 'Select a category'"
        class="form-select"
        aria-label="type select"
        id="type"
        disabled
      >
        <option selected disabled>Select a type</option>
      </select>
      <!-- If a category IS selected, render an enabled version with the relevant options included -->
      <select
        v-else
        class="form-select"
        aria-label="type select"
        id="type"
        v-model="newTicket.type"
      >
        <option selected disabled>Select a type</option>
        <option v-for="subCat in subCats[newTicket.category]" :value="subCat">
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
      <input
        type="text"
        class="form-control"
        id="docs"
        aria-describedby="docs field"
        v-model="newTicket.docs"
      />
    </div>

    <button
      type="submit"
      class="btn btn-primary"
      @click="console.log(newTicket)"
      disabled
    >
      Submit
    </button>
  </form>
</template>

<style scoped></style>

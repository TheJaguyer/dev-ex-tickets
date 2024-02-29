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
      >
        <option selected disabled>Select a category</option>
        <option v-for="cat in Object.keys(subCats)" :value="cat">
          {{ cat }}
        </option>
      </select>
      <!-- Type -->
      <label for="type" class="form-label">Type</label>
      <select
        v-if="newTicket.category == 'Select a category'"
        class="form-select"
        aria-label="category select"
        id="type"
        v-model="newTicket.type"
        disabled
      >
        <option selected disabled>Select a type</option>
      </select>
      <select
        v-else
        class="form-select"
        aria-label="category select"
        id="type"
        v-model="newTicket.type"
      >
        <option selected disabled>Select a type</option>
        <option v-for="subCat in subCats[newTicket.category]" :value="subCat">
          {{ subCat }}
        </option>
      </select>
      <label for="exampleInputEmail1" class="form-label">Email address</label>
      <input
        type="email"
        class="form-control"
        id="exampleInputEmail1"
        aria-describedby="emailHelp"
      />
      <div id="emailHelp" class="form-text">
        We'll never share your email with anyone else.
      </div>
    </div>
    <div class="mb-3">
      <label for="exampleInputPassword1" class="form-label">Password</label>
      <input type="password" class="form-control" id="exampleInputPassword1" />
    </div>
    <div class="mb-3 form-check">
      <input type="checkbox" class="form-check-input" id="exampleCheck1" />
      <label class="form-check-label" for="exampleCheck1">Check me out</label>
    </div>
    <button type="submit" class="btn btn-primary">Submit</button>
  </form>
</template>

<style scoped></style>

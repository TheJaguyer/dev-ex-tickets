<script setup>
import { ticket } from "../store.js";
import AttachedFile from "./AttachedFile.vue";

// The attach documents piece of the form. When files are attached, the file names are given to the AttachedFile component.
// When no files are attached, a 'No files Attached' message is displayed.
</script>

<template>
  <div class="form-label">Ticket Files & Documents</div>
  <div class="row mb-3">
    <div class="text-muted" v-if="ticket.data.docs.length == 0">
      No files attached
    </div>
    <AttachedFile
      v-for="(file, index) in ticket.data.docs"
      :key="index"
      :index="index"
      >{{ file }}</AttachedFile
    >
  </div>
  <div class="mb-3">
    <!-- The div here is used just to render the button as a block instead of an inline element-->
    <button
      type="button"
      class="btn btn-primary text-bg-light"
      @click="ticket.addFile"
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
</template>

<style scoped></style>

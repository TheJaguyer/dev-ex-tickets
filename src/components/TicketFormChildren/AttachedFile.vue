<script setup>
import { ticket } from "../store.js";

const props = defineProps(["index"]);

// This component renders the attached files in the form. Just the file name and a trashcan icon.
// The slot is filled with the file name from the parent.
</script>

<template>
  <div class="col-sm d-flex justify-content-between" style="max-width: 240px">
    <a class="link-primary text-decoration-none" role="button">
      <slot></slot>
    </a>

    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      fill="currentColor"
      class="bi bi-trash align-middle"
      viewBox="0 0 16 16"
      role="button"
      @click="ticket.deleteFile(props.index)"
    >
      <path
        d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0z"
      />
      <path
        d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4zM2.5 3h11V2h-11z"
      />
    </svg>
  </div>
</template>

<style scoped></style>

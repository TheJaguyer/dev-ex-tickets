<script setup>
import { ticket } from "../store.js";
</script>

<template>
  <!-- Subject -->
  <label for="subject" class="form-label">Subject</label>
  <input
    required
    type="text"
    class="form-control mb-3"
    id="subject"
    aria-describedby="subject field"
    v-model="ticket.data.subject"
  />
</template>

<style scoped></style>

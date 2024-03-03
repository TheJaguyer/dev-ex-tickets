<script setup>
import TicketForm from "./TicketForm.vue";
import { user, tickets } from "./store.js";
</script>

<template>
  <TicketForm />
  <div class="container">
    <div class="h4">Welcome, {{ user.userName }}</div>
    <button
      type="newTicket"
      class="btn btn-primary"
      data-bs-toggle="modal"
      data-bs-target="#formModal"
    >
      Open a Ticket
    </button>
    <div
      class="row"
      v-if="tickets.data.length > 0"
      v-for="ticket in tickets.data"
    >
      {{ ticket.subject }}
    </div>
  </div>
</template>

<style scoped></style>

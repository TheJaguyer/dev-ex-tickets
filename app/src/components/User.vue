<script setup>
import TicketForm from "./TicketForm.vue";
import UserTicketList from "./UserTicketList.vue";
import { user } from "./store.js";

// The user view. The ticket form is always rendered, even when invisible, to allow bootrap to bring it in smoothly.
</script>

<template>
  <div class="h3">Welcome, {{ user.userName }}</div>
  <button
    type="newTicket"
    class="btn btn-primary"
    data-bs-toggle="modal"
    data-bs-target="#formModal"
  >
    Open a Ticket
  </button>
  <UserTicketList />
  <TicketForm />
</template>

<style scoped></style>

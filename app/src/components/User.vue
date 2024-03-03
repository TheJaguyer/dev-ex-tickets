<script setup>
import TicketForm from "./TicketForm.vue";
import UserTicketList from "./UserTicketList.vue";
import { user, tickets } from "./store.js";
</script>

<template>
  <TicketForm />
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
</template>

<style scoped></style>

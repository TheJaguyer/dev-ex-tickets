<script setup>
import { ref } from "vue";

import { ticket, tickets, user } from "./store.js";

import CategoryField from "./TicketFormChildren/CategoryField.vue";
import TypeField from "./TicketFormChildren/TypeField.vue";
import SubjectField from "./TicketFormChildren/SubjectField.vue";
import DescriptionField from "./TicketFormChildren/DescriptionField.vue";
import DocumentsField from "./TicketFormChildren/DocumentsField.vue";

// Used to toggle form validation through bootstrap
const validated = ref(false);

// This data validation isn't very robust. It just checks if there is anything in the first 4 fields.
// If so, the ticket is added to the list,
// and by triggering the cancel button, the form is cleared.
function submit(event) {
  event.preventDefault();
  event.stopPropagation();
  if (
    ticket.data.category &&
    ticket.data.types.length &&
    ticket.data.subject &&
    ticket.data.description
  ) {
    tickets.addTicket(ticket);
    document.getElementById("cancel").click();
    // "Manually" clicking the cancel button in code feels taboo, but it's used to make use of bootstrap's built in modal functionality.
    // Bootstrap uses 'data-bs-dismiss' to trigger its own js that smoothly puts the modal away in a multi-step process.
  } else {
    validated.value = true;
  }
}

// Cancelling resets the ticket file-count, and removes the validation styling.
// This also happens whenever a correctly filled form is submitted.
function cancel() {
  ticket.clear();
  validated.value = false;
}
</script>

<template>
  <!-- bootrap will add the 'show' class when the form modal is opened, 
    so it must be included when 'was-validated' is added. The validation will 
    only be triggered when the form is shown anyways.
   -->
  <div
    :class="
      'modal fade needs-validation' + (validated ? ' show was-validated' : '')
    "
    novalidate
    tabindex="-1"
    id="formModal"
    data-bs-backdrop="static"
    data-bs-keyboard="false"
  >
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="staticBackdropLabel">Ticket Details</h5>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
            @click="cancel"
          ></button>
        </div>
        <div class="modal-body">
          <CategoryField />
          <TypeField />
          <SubjectField />
          <DescriptionField />
          <DocumentsField />
        </div>
        <div class="modal-footer">
          <button
            id="cancel"
            type="button"
            class="btn btn-secondary"
            data-bs-dismiss="modal"
            @click="cancel"
          >
            Cancel
          </button>

          <button type="button" class="btn btn-primary" @click="submit">
            Submit
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped></style>

<script setup>
import { tickets } from "./store.js";

function deleteTicket(index) {
  tickets.removeTicket(index);
}
</script>

<template>
  <div class="h4 mt-2">My Tickets</div>

  <div class="accordion accordion-flush" id="accordion">
    <div
      v-for="(ticket, index) in tickets.data"
      :key="index"
      class="accordion-item"
    >
      <h2 class="accordion-header" :id="'flush-heading' + index">
        <button
          class="accordion-button collapsed"
          type="button"
          data-bs-toggle="collapse"
          :data-bs-target="'#flush-collapse' + index"
          aria-expanded="false"
          :aria-controls="'flush-collapse' + index"
        >
          <h5>
            {{ ticket.subject }}
          </h5>
        </button>
      </h2>
      <div
        :id="'flush-collapse' + index"
        class="accordion-collapse collapse"
        :aria-labelledby="'flush-heading' + index"
        data-bs-parent="#accordion"
      >
        <div class="accordion-body">
          <div class="row">
            <div class="text-muted col-sm-3">Category</div>
            <div class="col-sm">
              {{ ticket.category }}
            </div>
          </div>
          <div class="row">
            <div class="text-muted col-sm-3">Type</div>
            <div class="col-sm">
              {{ ticket.type }}
            </div>
          </div>
          <div class="row">
            <div class="text-muted col-sm-3">Description</div>
            <div class="col-sm">
              {{ ticket.description }}
            </div>
          </div>
          <div class="row">
            <div class="text-muted col-sm-3">Attached Files</div>
            <div class="col-sm row">
              <div
                v-for="file in ticket.docs"
                class="col-sm"
                style="max-width: 240px"
              >
                <a class="link-primary text-decoration-none" role="button">
                  {{ file }}
                </a>
              </div>

              <div v-if="ticket.docs.length == 0" class="text-muted col-sm-3">
                None
              </div>
            </div>
          </div>
          <button
            class="btn btn-secondary"
            data-bs-toggle="collapse"
            :data-bs-target="'#flush-collapse' + index"
            @click="deleteTicket(index)"
          >
            Delete Ticket
          </button>
        </div>
      </div>
    </div>
    <!-- If this user has  -->
    <div v-if="tickets.data.length == 0" class="text-muted">
      You have no open tickets
    </div>
  </div>
</template>

<style scoped></style>

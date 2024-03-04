<script setup>
import { user } from "./store.js";

// These functions just toggle the 'active' class of the navbar links when a tab is selected.
function adminActive() {
  return ["nav-link", user.userMode == "admin" ? "active" : ""];
}

function userActive() {
  return ["nav-link", user.userMode == "user" ? "active" : ""];
}

// The entire navbar is ultimately irrelevant, but I like the way it looks.
</script>

<template>
  <nav class="navbar navbar-expand-sm bg-body-tertiary">
    <div class="container-fluid">
      <a class="navbar-brand" href="#">Help Desk</a>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto">
          <li class="nav-item" @click="user.changeMode('admin')">
            <a :class="adminActive()" href="#">Admins</a>
          </li>

          <li class="nav-item" @click="user.changeMode('user')">
            <a :class="userActive()" href="#">Users</a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<style scoped></style>

<script setup>
defineEmits(["changeMode"]);
defineProps(["mode"]);
</script>

<!-- The majority of this template is the default bootstrap styling and functionality -->
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
          <li class="nav-item" @click="$emit('changeMode', 'Admin')">
            <a class="nav-link" href="#">Admins</a>
          </li>
          <li class="nav-item" @click="$emit('changeMode', 'User')">
            <a class="nav-link" href="#">Users</a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<style scoped></style>

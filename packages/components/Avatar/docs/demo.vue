<template>
  <div class="row">
    <y-avatar size="small" />
    <y-avatar>user</y-avatar>
    <y-avatar size="large" />
    <y-avatar size="small" shape="square" />
    <y-avatar shape="square" />
    <y-avatar size="large" shape="square" />
  </div>
  <div class="row">
    <y-avatar src="../../../src/assets/Cat.png"></y-avatar>
    <y-avatar src="../../../src/assets/Cat.png" shape="square"></y-avatar>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped>
.row + .row {
  margin-top: 12px;
}

div {
  display: flex;
  align-items: flex-start;
}
</style>

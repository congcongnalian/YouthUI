<template>
  <div class="common-layout">
    <y-container>
      <y-header>Header</y-header>
      <y-main>Main</y-main>
    </y-container>
  </div>
</template>

<script setup lang="ts"></script>

<style lang="less" scoped>
.common-layout {
  margin-bottom: 30px;
  .yt-header,
  .yt-footer,
  .yt-main,
  .yt-aside {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .yt-header {
    background-color: @yt-primary-color-light-1;
  }
  .yt-main {
    background-color: @yt-primary-color-light-2;
    height: 150px;
    width: 100%;
  }
  .yt-footer {
    background-color: @yt-primary-color-light-3;
    width: 100%;
  }
  .yt-aside {
    background-color: @yt-primary-color-light-4;
  }
}

</style>

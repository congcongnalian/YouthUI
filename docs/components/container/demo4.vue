<template>
  <div class=")common-layout">
    <y-container>
      <y-header>Header</y-header>
    </y-container>
    <y-container direction="horizontal">
      <y-aside>Aside</y-aside>
      <y-container>
        <y-main>Main</y-main>
        <y-footer>Footer</y-footer>
      </y-container>
    </y-container>
  </div>
</template>

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
    background-color: var(--yt-primary-color-light-1);
  }
  .yt-main {
    background-color: var(--yt-primary-color-light-2);
    height: 150px;
    width: 100%;
  }
  .yt-footer {
    background-color: var(--yt-primary-color-light-3);
    width: 100%;
  }
  .yt-aside {
    background-color: var(--yt-primary-color-light-4);
  }
}
</style>

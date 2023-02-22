<template>
  <div>
    circle
    <y-avatar size="large">User</y-avatar>
    <y-avatar>User</y-avatar>
    <y-avatar size="small">User</y-avatar>
  </div>

  <div>
    square
    <y-avatar size="large" shape="square">User</y-avatar>
    <y-avatar shape="square">User</y-avatar>
    <y-avatar size="small" shape="square">User</y-avatar>
  </div>
</template>

<style lang="less" scoped>
div + div {
  margin-top: 20px;
}
</style>

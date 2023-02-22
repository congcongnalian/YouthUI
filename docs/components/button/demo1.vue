<template>
  <div>
    <y-button>Default</y-button>
    <y-button type="primary">Primary</y-button>
    <y-button type="success">Success</y-button>
    <y-button type="info">Info</y-button>
    <y-button type="warning">Warning</y-button>
    <y-button type="danger">Danger</y-button>
  </div>
  <div>
    <y-button round>Default</y-button>
    <y-button type="primary" round>Primary</y-button>
    <y-button type="success" round>Success</y-button>
    <y-button type="info" round>Info</y-button>
    <y-button type="warning" round>Warning</y-button>
    <y-button type="danger" round>Danger</y-button>
  </div>
  <div>
    <y-button circle>√</y-button>
    <y-button type="primary" circle>√</y-button>
    <y-button type="success" circle>√</y-button>
    <y-button type="info" circle>√</y-button>
    <y-button type="warning" circle>√</y-button>
    <y-button type="danger" circle>√</y-button>
  </div>
</template>

<style lang="less" scoped>
div + div {
  margin-top: 12px;
}
</style>

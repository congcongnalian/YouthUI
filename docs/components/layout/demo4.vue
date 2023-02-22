<template>
    <div>
      <y-row flex class="margin">
        <y-col><div class="flex-content col-bg-primary"></div></y-col>
        <y-col><div class="flex-content col-bg-minor"></div></y-col>
        <y-col><div class="flex-content col-bg-primary"></div></y-col>
      </y-row>
      <y-row flex class="margin" justify="center">
        <y-col><div class="flex-content col-bg-primary"></div></y-col>
        <y-col><div class="flex-content col-bg-minor"></div></y-col>
        <y-col><div class="flex-content col-bg-primary"></div></y-col>
      </y-row>
      <y-row flex class="margin" justify="end">
        <y-col><div class="flex-content col-bg-primary"></div></y-col>
        <y-col><div class="flex-content col-bg-minor"></div></y-col>
        <y-col><div class="flex-content col-bg-primary"></div></y-col>
      </y-row>
      <y-row flex class="margin" justify="space-between">
        <y-col><div class="flex-content col-bg-primary"></div></y-col>
        <y-col><div class="flex-content col-bg-minor"></div></y-col>
        <y-col><div class="flex-content col-bg-primary"></div></y-col>
      </y-row>
      <y-row flex class="margin" justify="space-around">
        <y-col><div class="flex-content col-bg-primary"></div></y-col>
        <y-col><div class="flex-content col-bg-minor"></div></y-col>
        <y-col><div class="flex-content col-bg-primary"></div></y-col>
      </y-row>
      <y-row flex class="margin" justify="space-evenly">
        <y-col><div class="flex-content col-bg-primary"></div></y-col>
        <y-col><div class="flex-content col-bg-minor"></div></y-col>
        <y-col><div class="flex-content col-bg-primary"></div></y-col>
        <y-col><div class="flex-content col-bg-minor"></div></y-col>
        <y-col><div class="flex-content col-bg-primary"></div></y-col>
        <y-col><div class="flex-content col-bg-minor"></div></y-col>
        <y-col><div class="flex-content col-bg-primary"></div></y-col>
        <y-col><div class="flex-content col-bg-minor"></div></y-col>
        <y-col><div class="flex-content col-bg-primary"></div></y-col>
      </y-row>
    </div>
</template>

<style lang='less' scoped>
.margin {
  margin-bottom: 10px;
}
.grid-content {
  border-radius: 4px;
  min-height: 36px;
}
.flex-content {
  min-height: 36px;
  width: 100px; //到时候可以根据父元素改成100%
}
.col-bg-primary {
  background-color: skyblue;
}
.col-bg-minor {
  background-color: #61ecd9;
}
</style>
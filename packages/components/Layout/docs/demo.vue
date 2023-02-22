<template>
  <div>
    <!-- 基础布局 -->
    <div>
      <y-row class="margin">
        <y-col :span="24"
          ><div class="grid-content col-bg-primary"></div
        ></y-col>
      </y-row>
      <y-row class="margin">
        <y-col :span="12"
          ><div class="grid-content col-bg-primary"></div
        ></y-col>
        <y-col :span="12"
          ><div class="grid-content col-bg-minor"></div
        ></y-col>
      </y-row>
      <y-row class="margin">
        <y-col :span="8"
          ><div class="grid-content col-bg-primary"></div
        ></y-col>
        <y-col :span="8"><div class="grid-content col-bg-minor"></div></y-col>
        <y-col :span="8"
          ><div class="grid-content col-bg-primary"></div
        ></y-col>
      </y-row>
      <y-row class="margin">
        <y-col :span="6"
          ><div class="grid-content col-bg-primary"></div
        ></y-col>
        <y-col :span="6"><div class="grid-content col-bg-minor"></div></y-col>
        <y-col :span="6"
          ><div class="grid-content col-bg-primary"></div
        ></y-col>
        <y-col :span="6"><div class="grid-content col-bg-minor"></div></y-col>
      </y-row>
      <y-row class="margin">
        <y-col :span="4"
          ><div class="grid-content col-bg-primary"></div
        ></y-col>
        <y-col :span="4"><div class="grid-content col-bg-minor"></div></y-col>
        <y-col :span="4"
          ><div class="grid-content col-bg-primary"></div
        ></y-col>
        <y-col :span="4"><div class="grid-content col-bg-minor"></div></y-col>
        <y-col :span="4"
          ><div class="grid-content col-bg-primary"></div
        ></y-col>
        <y-col :span="4"><div class="grid-content col-bg-minor"></div></y-col>
      </y-row>
    </div>
   
  </div>
</template>


<style lang="less" scoped>
//这里是在源码里面添加的类名
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

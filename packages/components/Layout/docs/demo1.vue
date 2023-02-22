<template>
     <div>
      <y-row :gutter="20" class="margin">
        <y-col :span="6"
          ><div class="grid-content col-bg-primary"></div
        ></y-col>
        <y-col :span="6"><div class="grid-content col-bg-minor"></div></y-col>
        <y-col :span="6"
          ><div class="grid-content col-bg-primary"></div
        ></y-col>
        <y-col :span="6"><div class="grid-content col-bg-minor"></div></y-col>
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
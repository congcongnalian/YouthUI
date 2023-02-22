<template>
  <div>
    <!-- <y-upload actions="http://localhost:3001/static/upload" /> -->
    <y-upload
      actions="https://jsonplaceholder.typicode.com/posts/"
      :headers="{ 'Content-Type': 'multipart/form-data' }"
    >
    <template #tip>
      <div>只能上传jpg/png文件,且不超过500kb</div>
    </template>
  </y-upload>
  </div>
  
</template>

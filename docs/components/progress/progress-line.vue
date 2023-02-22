<template>
  <div>
    <y-progress :percentage="50"></y-progress>
    <y-progress :percentage="100"></y-progress>
    <y-progress :percentage="100" status="success"></y-progress>
    <y-progress :percentage="100" status="danger"></y-progress>
    <y-progress :percentage="100" status="warning"></y-progress>
  </div>
</template>

<template>
  <div :class="classes">
    <img v-if="src" :src="src" />
    <slot v-else></slot>
  </div>
</template>

<script lang="ts" setup>
import { useNamespace } from 'packages/hooks/use-namespace'
import { computed } from 'vue'
import { avatarProps, useAvatarClasses } from './avatar'

const props = defineProps(avatarProps)
console.log(props)

const ns = useNamespace('avatar')
// 只有外部盒子需要类名
// y-avatar y-avatar--size y-avatar--icon y-avatar--circle
const classes = useAvatarClasses(props)
</script>

<style scoped lang="less">
@import 'packages/styles/avatar/avatar.less';
</style>

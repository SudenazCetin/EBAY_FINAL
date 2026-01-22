<!-- app/components/atoms/BaseButton.vue -->
<script setup lang="ts">
interface Props {
  type?: 'button' | 'submit' | 'reset'
}

withDefaults(defineProps<Props>(), {
  type: 'button'
})
</script>

<template>
  <button class="base-button" :type="type">
    <slot />
  </button>
</template>

<style scoped>
.base-button {
  padding: 8px 16px;
  border-radius: 4px;
  border: none;
  cursor: pointer;
}
</style>

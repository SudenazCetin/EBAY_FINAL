<!-- app/components/atoms/BaseInput.vue -->
<script setup lang="ts">
interface Props {
  modelValue?: string
  type?: string
  placeholder?: string
}

const props = withDefaults(defineProps<Props>(), {
  modelValue: '',
  type: 'text',
  placeholder: ''
})

const emit = defineEmits<{
  (e: 'update:modelValue', value: string): void
}>()

const innerValue = computed({
  get() {
    return props.modelValue
  },
  set(val: string) {
    emit('update:modelValue', val)
  }
})
</script>

<template>
  <input
    class="base-input"
    :type="type"
    :placeholder="placeholder"
    v-model="innerValue"
  />
</template>

<style scoped>
.base-input {
  padding: 8px 10px;
  border-radius: 4px;
  border: 1px solid #ccc;
}
</style>

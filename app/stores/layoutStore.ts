import { defineStore } from 'pinia';
import { ref } from 'vue';

export const useLayoutStore = defineStore('layout', () => {
  const layout = ref<'default' | 'auth'>('default');
  function setLayout(newLayout: 'default' | 'auth') {
    layout.value = newLayout;
  }
  return { layout, setLayout };
});

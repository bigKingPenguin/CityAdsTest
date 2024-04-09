<script setup lang="ts">
  defineProps({
    content: {
      type: String,
      required: true
    }
  })
  const emit = defineEmits(['click'])
</script>

<template>
  <button
    type="button"
    class="button"
    @click="emit('click')"
  >
    {{ content }}
  </button>
</template>

<style scoped lang="scss">
  .button {
    display: flex;
    width: fit-content;
    
    padding: var(--space-unrelated-items) 49px;
    border-radius: 30px;

    background-color: var(--color-accent);
    color: var(--color-secondary);
    font-size: var(--font-size-L);
    line-height: var(--line-height-L);
  }
</style>
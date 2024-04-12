<script setup lang="ts">

</script>

<template>
  <header class="header">
    <nuxt-icon name="logo" filled class="header__logo"/>
  </header>
</template>

<style scoped lang="scss">

  .header {
    padding: var(--space-sections) var(--body-padding);

    &__logo {
      display: block;
      width: fit-content;

      &:deep(svg) {
        width: 180px;
        height: 38px;
      }
    }
  }
</style>
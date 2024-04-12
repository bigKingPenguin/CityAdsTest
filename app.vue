<template>
  <div>
    <PageHeader/>
    <main class="main">
      <NuxtPage/>
    </main>
    <PageFooter/>
  </div>
</template>

<style lang="scss">
  @use "@/assets/scss/app.scss";

  .main {
    padding: 38px var(--body-padding);
  }
</style>
<script setup lang="ts">
import PageHeader from "~/components/common/PageHeader.vue";
import PageFooter from "~/components/common/PageFooter.vue";
</script>
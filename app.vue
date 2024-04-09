<template>
  <div>
    <PageHeader/>
    <main>
      <NuxtPage/>
    </main>
    <PageFooter/>
  </div>
</template>

<style lang="scss">
  @use "@/assets/scss/app.scss";
</style>
<script setup lang="ts">
  import PageHeader from "~/components/common/PageHeader.vue";
  import PageFooter from "~/components/common/PageFooter.vue";
</script>
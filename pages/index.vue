<script setup lang="ts">
  // useAppConfig()

  import {getOffers} from "~/composables/api/offers";

  const data = await getOffers()
  console.log(data)
</script>

<template>
  <div class="main">
    <h1 class="main__title">Займы на карту онлайн от ведущих МФО </h1>
    <ul
      v-if="data"
      class="main__card-list card-list"
    >
      <li
        v-for="item in data.data.offers"
        :key="item.id"
        class="card-list__item">
        <CommonItemCard :item-data="item"/>
      </li>
    </ul>

  </div>
</template>

<style lang="scss" scoped>
  p {
    color: var(--color-primary-100);
  }

  .main {

     &__card-list {

     }
  }
</style>
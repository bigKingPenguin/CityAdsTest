<script setup lang="ts">
  // useAppConfig()

  import {getOffers} from "~/composables/api/offers";

  const data = await getOffers()
  console.log(data)
</script>

<template>
  <div class="main">
    <div class="main__top top">
      <h1 class="top__title">Займы на карту онлайн от ведущих МФО </h1>
      <p class="top__description top__description--remark">Для получения большей суммы, обращайтесь в разные мфо.</p>
      <p class="top__description">Заполнение двух и более заявок гарантирует получение требуемой суммы!</p>
    </div>
    <ul
      v-if="data"
      class="main__card-list"
    >
      <CommonItemCard
        v-for="item in data.data.offers"
        :key="item.id"
        :item-data="item"/>
    </ul>

  </div>
</template>

<style lang="scss" scoped>
  .main {
    padding-top: 70px;

    &__top {
      display: flex;
      width: 57%;
      flex-direction: column;

      margin-bottom: 90px;
    }

    &__card-list {
      display: flex;
      width: 100%;
      flex-wrap: wrap;

      column-gap: var(--space-unrelated-items);
      row-gap: var(--space-sections);
    }
  }

  .top {
    position: relative;

    &__title {
      margin-bottom: var(--space-subsections);

      font-size: var(--font-size-XXXL);
      font-weight: 300;
      line-height: 76px;
    }

    &__description {
      font-size: var(--font-size-XL);
      font-weight: 300;
      line-height: 31px;

      &--remark {
        color: var(--color-primary-50);
      }
    }
  }
</style>
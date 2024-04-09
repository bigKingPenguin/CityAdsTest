<script setup lang="ts">
  import type {PropType} from "vue";
  import type {Offer} from "~/composables/types/offer";

  defineProps({
    itemData: {
      type: Object as PropType<Offer>,
      required: true
    }
  })
</script>

<template>
  <div class="item">
    <span class="item__top">{{ itemData.sellingText }}</span>
    <div class="item__main main">
      <div class="main__head">
        <div class="main__img-wrapper">
        <img class="main__img" :src="itemData.image" :alt="itemData.offerTerms" width="70" height="28">
        </div>
        <div class="main__title title">
          <h2 class="title__name">{{ itemData.offerName }}</h2>
          <span class="title__description">{{ itemData.documents.toLowerCase() }}</span>
        </div>
      </div>
      <ul class="main__conditions conditions">
        <li class="conditions__item">
          <span class="conditions__value">{{itemData.sum}}</span>
          <span class="conditions__legend">сумма</span>
        </li>
        <li class="conditions__item">
          <span class="conditions__value">{{itemData.percent}}</span>
          <span class="conditions__legend">ставка</span>
        </li>
        <li class="conditions__item">
          <span class="conditions__value">{{itemData.term}}</span>
          <span class="conditions__legend">срок</span>
        </li>
      </ul>
      <UiCommonButton class="main__button" content="Заполнить заявку"/>
    </div>
  </div>
</template>

<style scoped lang="scss">
  .item {
    display: flex;
    width: 278px;
    height: 372px;
    flex-direction: column;

    border-radius: 40px;

    background-color: var(--color-background-light);

    &__top {
      padding: var(--space-related-items) 0;

      align-self: center;

      font-size: var(--font-size-S);
    }

    &__main {
      display: flex;
      width: 100%;
      height: 100%;
      flex-direction: column;

      padding: var(--space-related-items);
      gap: var(--space-sections);
      border-radius: 40px;

      background-color: var(--color-background-medium);
    }
  }

  .main {

    &__head {
      display: flex;
      width: 100%;
      align-items: center;

      gap: var(--space-unrelated-items);
    }

    &__img-wrapper {
      display: flex;
      width: 80px;
      height: 80px;
      justify-content: center;
      align-items: center;

      padding-inline: var(--space-inner);
      border-radius: 30px;

      background-color: var(--color-primary-100);
    }

    &__img {
      max-width: 70px;
    }

    &__title {
      display: flex;
      width: 100%;
      flex-direction: column;

      gap: var(--space-related-items);
    }

    &__conditions {
      display: flex;
      width: 100%;
      flex-direction: column;

      padding-inline: var(--space-related-items);
      gap: var(--space-unrelated-items);
    }

    &__button {
      margin-top: auto;
    }
  }

  .title {

    &__name {
      font-size: var(--font-size-M);
      font-weight: 500;
    }

    &__description {
      color: var(--color-primary-50);
    }
  }

  .conditions {

    &__item {
      display: flex;
      width: 100%;
      justify-content: space-between;
    }

    &__value {
      font-size: var(--font-size-L);
      line-height: 28px;
    }

    &__legend {
      color: var(--color-primary-20);
    }
  }
</style>
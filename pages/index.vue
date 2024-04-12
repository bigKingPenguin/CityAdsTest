<script setup lang="ts">
  // useAppConfig()

  import {getOffers} from "~/composables/api/offers";
  import ItemCard from "~/components/common/ItemCard.vue";
  import HomeImg1xJpg from "~/public/img/home/home-background@1x.jpg"
  import HomeImg1xWebp from "~/public/img/home/home-background@1x.webp"
  import HomeImg2xJpg from "~/public/img/home/home-background@2x.jpg"
  import HomeImg2xWebp from "~/public/img/home/home-background@2x.webp"
  import {shuffleArray} from "~/utils/arrays";
  import type {Offer} from "~/composables/types/offer";


  const data = await getOffers()
  const offers = computed(()=> shuffleArray<Offer>(data?.offers))

  console.log(data)

</script>

<template>
  <div class="home">
    <div class="home__top top">
      <h1 class="top__title">Займы на карту онлайн от ведущих МФО </h1>
      <p class="top__description top__description--remark">Для получения большей суммы, обращайтесь в разные мфо.</p>
      <p class="top__description">Заполнение двух и более заявок гарантирует получение требуемой суммы!</p>
      <picture class="top__img">
        <source
          type="image/webp"
          :srcset="`${HomeImg2xWebp} 2x, ${HomeImg1xWebp}`"
        />
        <img :srcset="`${HomeImg2xJpg} 2x`"
             :src="HomeImg1xJpg"
             width="384"
             height="378"
             alt=""
        />
      </picture>
    </div>
    <ul
      v-if="data"
      class="home__card-list"
    >
      <ItemCard
        v-for="item in offers"
        :key="item.id"
        :item-data="item"
      />
    </ul>

  </div>
</template>

<style lang="scss" scoped>
  .home {

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

    &__img {
      position: absolute;
      right: -474px;
      top: -79px;

      width: fit-content;
    }
  }
</style>
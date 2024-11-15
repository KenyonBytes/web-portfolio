<script lang="ts" setup>
import { testimonialsItems } from 'src/data';
import { Swiper, SwiperSlide } from 'swiper/vue';
import SwiperType from 'swiper';
import { Pagination } from 'swiper/modules';

import 'swiper/scss';
import 'swiper/scss/pagination';
import { ref } from 'vue';

const activeIndex = ref(0);
const updateActiveIndex = (swiper: SwiperType) => {
  activeIndex.value = swiper.realIndex;
};
</script>

<template>
  <section>
    <div class="px-5 pt-14 md:container">
      <h2 class="title text-accent1" data-aos="fade-down">Testimonials</h2>
      <h4 class="subtitle" data-aos="fade-down">MY CLIENT REVIEWS</h4>
      <br />
      <div id="containerForBullets"></div>
      <Swiper
        direction="vertical"
        :pagination="{ clickable: true }"
        :loop="true"
        :spaceBetween="40"
        :slidesPerView="1.7"
        @slideChange="updateActiveIndex"
        :modules="[Pagination]"
        class="h-[40rem] max-w-3xl md:h-96"
        data-aos="fade-up"
      >
        <SwiperSlide v-for="(item, index) of testimonialsItems" :key="index">
          <div
            class="mx-6 flex h-full flex-col items-center gap-4 rounded-2xl border-2 border-accent3 back-med p8 duration-500 md:flex-row"
            :class="activeIndex !== index ? 'scale-75 blur-sm' : ''"
          >
            <q-img :src="item.image" :alt="item.name" class="h-24 w-24" />
            <div>
              <p class="text-sm text-gray-400 sm:text-base">
                {{ item.review }}
              </p>
              <h6 class="mt-none text-gray-300">{{ item.name }}</h6>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  </section>
</template>

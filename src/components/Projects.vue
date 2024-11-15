<script lang="ts" setup>
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Pagination } from 'swiper/modules';
import { projectsItems } from 'src/data';

import ProjectsClipart from '/images/projects.png';
import 'swiper/scss';
import 'swiper/scss/pagination';
import { ref } from 'vue';

const detailsDialog = ref(false);
const selectedProject = ref(projectsItems[0]);

function openDetailsDialog(index: number) {
  selectedProject.value = projectsItems[index];
  detailsDialog.value = true;
}
</script>

<template>
  <section class="back-med pb-4" id="projects">
    <div
      class="md:container px-5 pt-14 min-h-screen md:min-h-min flex flex-col justify-between"
    >
      <div>
        <h2 class="title text-accent1" data-aos="fade-down">Projects</h2>
        <h4 class="subtitle" data-aos="fade-down">MY CREATIONS</h4>
        <br />
      </div>
      <div class="flex items-center lg:flex-row flex-col-reverse gap-5">
        <q-img
          :src="ProjectsClipart"
          alt="..."
          data-aos="fade-right"
          class="max-w-[45vw] min-w-[22rem] back-dark rounded-3xl brightness-90"
        />
        <Swiper
          :pagination="{ clickable: true }"
          :spaceBetween="40"
          :modules="[Pagination]"
          class="rounded-3xl max-w-sm shadow-lg shadow-accent3 self-start"
        >
          <SwiperSlide
            v-for="(item, index) of projectsItems"
            :key="index"
            :virtual-index="index"
            class="back-dark rounded-3xl border-b-8 border-yellow-800 h-fit"
          >
            <div class="p5">
              <q-img
                :src="item.image"
                :alt="item.title"
                class="fit rounded-3xl"
              />
              <div class="flex flex-col gap-1 mt-2">
                <h5 class="font-bold font-Poppins text-gray-100">
                  {{ item.title }}
                </h5>
                <q-btn
                  class="font-bold bg-gray-500 self-end"
                  dense
                  @click="openDetailsDialog(index)"
                >
                  READ MORE
                </q-btn>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>

    <q-dialog v-model="detailsDialog">
      <q-card>
        <q-card-section>
          {{ selectedProject }}
        </q-card-section>
      </q-card>
    </q-dialog>
  </section>
</template>

<script lang="ts" setup>
import { skillsItems } from 'src/data';
import { symRoundedArrowOutward } from '@quasar/extras/material-symbols-rounded';
</script>

<template>
  <section class="min-h-fit back-med" id="skills">
    <div class="px-5 py-14 md:container">
      <h2 class="title text-accent1" data-aos="fade-down">Skills</h2>
      <h4 class="subtitle" data-aos="fade-down">MY TOP SKILLS</h4>
      <br />
      <div class="flex flex-wrap justify-center gap-4">
        <div
          v-for="(item, index) of skillsItems"
          :key="index"
          class="group relative flex w-full max-w-sm items-center gap-5 rounded-md border-2 border-accent3 back-dark p-5 duration-200 hover:border-accent1 sm:cursor-pointer"
          data-aos="fade-up"
          :data-aos-delay="index * 200"
        >
          <div>
            <q-img
              :src="item.logo"
              alt="{item.name}"
              class="w-10 duration-200 group-hover:scale-125"
            />
          </div>
          <div>
            <h6 class="text-gray-100">{{ item.name }}</h6>
            <p class="italic text-gray-300">{{ item.description }}</p>
            <div class="absolute right-3 top-3 text-xl text-accent1">
              <q-icon :name="symRoundedArrowOutward" size="25" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

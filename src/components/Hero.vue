<script lang="ts" setup>
// import HeroImage from '/images/hero.png';
</script>

<template>
  <section
    id="home"
    class="mx-auto max-w-7xl overflow-hidden back-dark bg-no-repeat bg-bottom md:bg-contain bg-fixed"
    style="background-image: url('/images/hero.png')"
  >
    <div class="relative fle min-h-screen flex-row">
      <div
        class="z-50 absolute bottom-0 right-0 top-0 h-full w-2/12 bg-primary lg:w-3/12"
        data-aos="slide-left"
        data-aos-delay="1200"
      >
        <div class="flex h-full items-center justify-center">
          <h1 class="rotate-90 space-x-4 md:right-0 tracking-wide">
            <span class="text-gray-300">Kenyon</span>
            <span class="text-purple-500">Bradley</span>
          </h1>
        </div>
      </div>
      <div
        class="flex w-10/12 flex-col-reverse justify-center md:flex-row md:items-end"
      >
        <div class="px-6 pb-10 md:pb-none pt-5" data-aos="fade-down">
          <div class="bg-yellow-500 px10 py5">
            <h2 class="text-secondary md:tracking-wider m-none">
              Software Engineer
            </h2>
          </div>
          <div class="flex w-80 items-center gap-5">
            <p
              class="text-gray-200"
              data-aos="zoom-in-right"
              data-aos-delay="100"
            >
              Code Contributor
            </p>
            <p
              class="text-gray-200"
              data-aos="zoom-in-right"
              data-aos-delay="400"
            >
              |
            </p>
            <p
              class="text-gray-200"
              data-aos="zoom-in-right"
              data-aos-delay="400"
            >
              People Manager
            </p>
          </div>

          <div class="mt-5 flex flex-col gap-10">
            <div
              class="flex w-80 items-center gap-5"
              data-aos="fade-down"
              data-aos-delay="600"
            >
              <h3 class="text-gray-100">5+</h3>
              <p class="text-gray-200">Years of experience</p>
            </div>
            <div
              class="flex w-80 items-center gap-5"
              data-aos="fade-down"
              data-aos-delay="800"
            >
              <h3 class="text-gray-100">10+</h3>
              <p class="text-gray-200">Projects created</p>
            </div>
          </div>
        </div>
        <!-- <div class="mb-4 mt-16 h-96 md:-mb-16 md:h-full">
          <img
            :src="HeroImage"
            alt="Hero"
            class="h-full object-scale-down object-top opacity-30 Z-auto"
          />
        </div> -->
      </div>
    </div>
  </section>
</template>

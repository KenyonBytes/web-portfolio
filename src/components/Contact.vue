<script lang="ts" setup>
import ContactImage from '/images/contact.png';
</script>

<template>
  <section class="back-med pb-8" id="contact">
    <div class="lg:container px-5 pt-14">
      <h2 class="title text-accent1" data-aos="fade-down">Hire Me</h2>
      <h4 class="subtitle" data-aos="fade-down">FOR YOUR PROJECTS</h4>
      <br />
      <div class="flex items-center flex-col space-y-4 lg:flex-row">
        <img
          :src="ContactImage"
          alt="Contact Image"
          data-aos="fade-right"
          class="rounded-3xl max-w-sm mt-4 md:mt-0 md:max-w-xl md:block text-gray-950 !opacity-50"
        />
        <div
          data-aos="fade-left"
          class="ml-4 border-2 border-accent3 max-w-md p-6 shadow-sm rounded-xl rounded-br-[8rem] sm:min-w-[22rem]"
        >
          <div class="w-full max-w-md back-dark p-5">
            <h2 class="text-lg font-semibold text-gray-300 mb-2">
              Contact details
            </h2>
            <address
              class="relative back-light dark:border-gray-600 p-4 rounded-lg border border-gray-200 not-italic flex space-x-2"
            >
              <div
                class="space-y-2 text-gray-500 dark:text-gray-400 leading-loose hidden sm:block"
              >
                Name <br />
                Email <br />
                Phone
              </div>
              <div
                id="contact-details"
                class="space-y-2 text-accent2 font-medium leading-loose"
              >
                Kenyon Bradley <br />
                <a href="mailto:hire@kenyon.blue" class="text-inherit">
                  hire@kenyon.blue </a
                ><br />
                <a href="tel:+18053027024" class="text-inherit">
                  (805) 302-7024
                </a>
              </div>
            </address>
          </div>

          <br />
          <a
            href="mailto:hire@kenyon.blue"
            class="btn bg-accent3 hover-bg-[#d3b600] transition-colors duration-400 text-white"
          >
            Hire Me
          </a>
        </div>
      </div>
    </div>
  </section>
</template>

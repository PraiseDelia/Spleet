<template>
  <section class="pt-72 sm:pt-64 pb-20 bg-gray-100">
    <div class="xs:px-6 sm:px-12 lg:pl-28 xl:pl-36">
      <div class="topic px-5 xs:px-0">
        <SectionTopic>FEATURES</SectionTopic>
      </div>
      <div class="mb-20">
        <h2
          class="text-2xl font-bold mb-4 text-gray-900 px-5 xs:px-0 md:text-4xl md:text-left"
        >
          Gain more insight into how people use your App
        </h2>
        <p
          class="font-medium text-base pr-10 text-gray-500 pl-5 xs:pl-0 md:pr-32 lg:text-xl"
        >
          With our integrated CRM, project management, collaboration and
          invoicing capabilities, you can manage every aspect of your business
          in one secure platform.
        </p>
      </div>
      <div class="sm:flex sm:flex-row-reverse items-center justify-between">
        <div class="hidden h-20 w-full bg-red-900 px-5 sm:block sm:w-1/2">
          <img src="" alt />
        </div>
        <div class="w-full sm:w-1/2 xs:flex sm:block">
          <div
            v-for="(feature, index) in features"
            :key="index"
            class="sm:flex"
          >
            <div class="flex justify-center">
              <div>
                <BaseButton btnStyles="bg-green text-lg rounded-md p-2 mb-4"
                  >you</BaseButton
                >
              </div>
            </div>
            <div class="xs:px-3">
              <h4
                class="font-bold text-gray-900 mb-2 text-center sm:text-lg sm:text-left md:text-2xl md:mb-3"
              >
                {{ feature.title }}
              </h4>
              <p
                class="text-center text-xs text-gray-500 mb-6 p-0 md:text-base sm:text-left"
              >
                {{ feature.body }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { appFeatures } from "../database/index";
export default {
  data() {
    return {
      features: appFeatures,
    };
  },
};
</script>

<style scoped>
@import url(https://fonts.googleapis.com/css2?family=Poppins:wght@100;200;300;400;500;600;800;900&display=swap);

h4,
p {
  font-family: "Poppins", sans-serif;
}

.topic {
  width: fit-content;
}
</style>

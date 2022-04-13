<template>
  <div
    class="second_section pt-24 pb-0 flex flex-col justify-center items-center relative"
  >
    <SectionTopic>FEATURES</SectionTopic>
    <div class="px-4 md:px-6 lg:px-10 xl:px-36 mb-20">
      <h2 class="text-2xl lg:text-4xl text-center font-bold mb-4 text-gray-900">
        Gain more insight into how people use your app
      </h2>
      <p
        class="font-medium text-base md:px-32 lg:text-xl text-gray-500 text-center"
      >
        With our integrated CRM, project management, collaboration and invoicing
        capabilities, you can manage every aspect of your business in one secure
        platform.
      </p>
    </div>
    <div class="features_section xs:flex px-6">
      <div
        v-for="(feature, index) in featureData"
        :key="index"
        class="app_feature w-full flex flex-col items-center px-6"
      >
        <BaseButton btnStyles="bg-green text-lg rounded-md px-5 py-6 mb-4">
          <!-- <img :src="`${m}`" alt="" /> -->
        </BaseButton>
        <div class="">
          <h4 class="text-center font-bold text-gray-900 mb-3 md:mb-4">
            {{ feature.title }}
          </h4>
          <p class="text-center text-gray-500 mb-10">{{ feature.body }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import features from "../database/index";
export default {
  data() {
    return {
      featureData: features,
    };
  },
};
</script>

<style scoped>
@import url(https://fonts.googleapis.com/css2?family=Poppins:wght@100;200;300;400;500;600;800;900&display=swap);

@media (min-width: 0px) {
  div,
  h2 {
    font-family: Poppins;
  }

  .second_section {
    background-image: url("~/assets/second-section-grid.png");
    background-repeat: no-repeat;
    background-size: cover;
  }

  .features_section {
    flex-wrap: wrap;
  }

  .bg-green {
    background-color: #22c55e;
  }

  .topic {
    width: fit-content;
  }
}

@media (min-width: 460px) {
  .app_feature {
    flex: 1 1 50%;
  }
}

@media (min-width: 768px) {
  .app_feature {
    flex: 1 1 33.333%;
  }
}
</style>

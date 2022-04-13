<template>
  <div>
    <section class="p-5 mt-20 lg:flex">
      <div class="lg:w-3/5">
        <div
          v-for="(story, index) in nextTenStories"
          :key="index"
          class="flex flex-col w-full mt-10 lg:flex-row"
        >
          <div class="flex justify-center">
            <img src="~/assets/bugatti.jpg" alt="" class="lg:h-44 lg:w-60" />
          </div>
          <div class="ml-5 lg:p-5">
            <h3 class="text-2xl font-semibold text-center lg:text-left">
              {{ story.title }}
            </h3>
            <p class="text-center lg:text-left">
              {{ story.id }}
            </p>
            <NuxtLink
              :to="`${story.id}`"
              class="flex justify-center w-full lg:justify-start"
            >
              <BaseButton
                @click="getSelectedStory(story.id)"
                size="mt-5 px-2 py-0.5 sm:px-3 py-1 lg:px-4 lg:py-2"
                >Read More</BaseButton
              >
            </NuxtLink>
          </div>
        </div>
        <!-- <div class="flex justify-center w-full"> -->
        <BaseButton size="mt-10 px-2 py-0.5 sm:px-3 py-1 lg:px-4 lg:py-2"
          >Find More Stories</BaseButton
        >
        <!-- </div> -->
      </div>
      <div
        class="hidden lg:block flex-col mt-20 bg-gray-200 under_the_hood lg:w-2/5 lg:mt-0 lg:ml-10"
      >
        <h5 class="mb-16 text-2xl font-semibold text-center mt-7">
          Under The Hood...
        </h5>
        <div class="flex flex-col-reverse items-center xl:flex-row">
          <div class="p-5">
            <h4 class="text-xl font-semibold">Hello</h4>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tempora
              laboriosam possimus quae modi ab, totam voluptate nemo ad?
              Repellat, dolores!
            </p>
          </div>
          <img src="~/assets/bugatti.jpg" alt="" class="lg:h-36 lg:w-52" />
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  // data() {
  //   return {
  //     moreStories: this.$store.getters.getFourStories,
  //   };
  // },

  methods: {
    getSelectedStory(storyId) {
      this.$store.dispatch("fetchSelectedStory", storyId);
    },
  },

  computed: {
    nextTenStories() {
      return this.$store.getters.getNextTenStories;
    },
  },
};
</script>

<style scoped>
.under_the_hood {
  height: fit-content;
}

img {
  max-width: 340px;
  max-height: 200px;
}
</style>

<template>
  <div class="relative">
    <TheNavBar class="sticky top-0" />
    <section
      class="px-7 py-5 lg:mb-32 flex flex-col justify-center sm:px-12 md:px-16 lg:flex-row"
    >
      <NuxtLink to="/" class="lg:w-2/4">
        <img
          src="~/assets/bugatti.jpg"
          alt="Dee's car"
          class="w-full m-0 new_gist"
        />
      </NuxtLink>
      <div class="lg:w-2/4">
        <div class="mt-10 lg:mt-0 mb-5">
          <h4 class="mb-5 text-center">CARS</h4>
          <h2 class="mb-5 text-center text-5xl">A Disruptor: Bugatti</h2>
          <p class="mb-5 text-center text-xl">
            Bugatti Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            Aut, assumenda.
          </p>
        </div>
        <div class="flex justify-center items-center">
          <BaseButton size="py-2.5 px-4 lg:px-10 lg:py-5" @click="closeModal"
            >Read More</BaseButton
          >
        </div>
      </div>
    </section>
    <!-- <BaseButton /> -->

    <section>
      <div class="headlines lg:flex">
        <div
          v-for="story in majorStories"
          :key="story.id"
          class="hidden px-7 py-5 sm:px-12 md:px-16 lg:p-2 lg:inline"
        >
          <nuxt-link to="/" class="flex w-full justify-center">
            <img
              src="~/assets/bugatti.jpg"
              alt="Car"
              class="w-full m-0 headline"
            />
          </nuxt-link>
          <div class="">
            <h3 class="mb-5 font-semibold text-2xl">{{ story.title }}</h3>
            <p class="mb-5 text-base">
              {{ story.body }}
            </p>
            <BaseButton size="px-5 py-0.5">Read</BaseButton>
          </div>
        </div>
      </div>
    </section>
    <RandomPosts />
  </div>
</template>

<script>
export default {
  name: "IndexPage",
  methods: {
    closeModal() {},
  },

  computed: {
    majorStories() {
      return this.$store.getters.getFirstFourStories;
    },
  },

  async mounted() {
    await this.$store.dispatch("fetchBlogStories");
  },
};
</script>

<style scoped>
@import url(https://fonts.googleapis.com/css2?family=BioRhyme:wght@100;200;300;400;500;600;800&display=swap);

h2,
h4 {
  font-family: "BioRhyme", serif;
}

.new_gist,
.headline {
  max-height: 500px;
  min-height: 230px;
}

.new_gist {
  min-width: 300px;
}

.headline {
  min-width: 230px;
}
</style>

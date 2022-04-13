<template>
  <div>
    <div v-if="!modalIsVisible" class="relative">
      <div class="sticky top-0 bg-gray-200 w-full p-2 mb-10 edit flex">
        <NuxtLink
          :to="`/`"
          class="flex justify-center items-center h-9 w-9 bg-white border-2 border-gray-300 rounded"
        >
          <img src="~/assets/back.png" alt="return to homePage" />
        </NuxtLink>
        <button
          @click="toggleModal"
          class="flex justify-center items-center h-9 w-9 bg-white border-2 border-gray-300 rounded ml-auto"
        >
          <img src="~/assets/edit.png" alt="Edit story" />
        </button>
      </div>

      <div
        class="flex-col items-center justify-center w-full h-screen px-4 xs:px-8 md:px-12"
      >
        <div
          class="px-7 py-5 lg:mb-32 flex flex-col justify-center sm:px-12 md:px-16 lg:flex-row bg-gray-200"
        >
          <div class="w-full flex justify-center lg:block lg:w-1/2">
            <img
              src="~/assets/bugatti.jpg"
              alt="A bugatti"
              class="w-full m-0 new_gist"
            />
          </div>
          <div class="lg:w-1/2">
            <div class="mt-10 lg:mt-0 mb-5">
              <h2 class="mb-5 text-3xl text-center md:text-5xl">{{ title }}</h2>
              <p class="mb-5 text-center text-xl">
                {{ details }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div v-else>
      <BaseForm @click="toggleModal"></BaseForm>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      allStories: [],
      title: "",
      details: "",
      id: "",
      modalIsVisible: false,
    };
  },

  methods: {
    toggleModal() {
      this.modalIsVisible = !this.modalIsVisible;
    },
  },

  async mounted() {
    let storyId = this.$route.params.story;
    await this.$store.dispatch("fetchSelectedStory", storyId);
    let allStories = await this.$store.getters.getSelectedStory;
    this.title = allStories.title;
    this.details = allStories.body;
    this.id = allStories.id;
  },
};
</script>

<style scoped>
.edit {
  box-shadow: 0 2px 10px 0 #f2f2f2;
}

.new_gist {
  max-height: 500px;
  min-height: 230px;
}
</style>

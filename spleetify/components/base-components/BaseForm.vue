<template>
  <div class="relative">
    <div class="sticky top-0 bg-gray-200 w-full p-2 mb-10 edit flex">
      <button
        @click="closeModal"
        class="flex justify-center items-center h-9 w-9 bg-white border-2 border-gray-300 rounded ml-auto"
      >
        <img src="~/assets/cancel.png" alt="Cancel Edit" />
      </button>
    </div>
    <div
      class="flex items-center justify-center md:h-screen w-full px-4 md:px-12 relative"
    >
      <div class="absolute top-0 p-4 md:p-8 bg-red-600" v-if="displayError">
        <p>You've made no change!</p>
      </div>
      <form
        @submit.prevent="collectData"
        class="w-full p-4 bg-gray-200 rounded-lg"
      >
        <div class="mb-10">
          <label for="title" class="text-lg">Title</label>
          <textarea
            name="title"
            id="title"
            cols="20"
            rows="3"
            class="w-full px-3 py-2 mt-4 border-2 border-gray-300 rounded"
            v-model="newTitle"
          ></textarea>
        </div>
        <div>
          <label for="story-details" class="mb-4 text-lg">Body</label>
          <textarea
            name="story-details"
            id="story-details"
            cols="20"
            rows="3"
            v-model="newDetails"
            class="w-full p-4 px-3 text-base border-2 border-gray-300 rounded"
          ></textarea>
        </div>
        <div class="flex justify-center">
          <!-- <NuxtLink to="/"> -->
          <BaseButton size="mt-5 px-2 py-0.5 sm:px-3 py-1 lg:px-4 lg:py-2"
            >Save Changes</BaseButton
          >
          <!-- </NuxtLink> -->
        </div>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  emits: ["click"],

  data() {
    return {
      displayError: false,
      newTitle: "", //this acts as a value in the textarea but changes when the user edits it.
      newDetails: "",
      previousTitle: "",
      previousDetails: "",
      storyId: 8,
    };
  },

  computed: {
    editedStory() {
      return {
        body: this.newDetails,
        id: this.storyId,
        title: this.newTitle,
        userId: this.storyId,
      };
    },
  },

  methods: {
    displayErrorMsg() {
      this.displayError = true;
      setTimeout(() => {
        this.displayError = false;
      }, 3000);
    },

    collectData() {
      if (
        this.previousTitle == this.newTitle &&
        this.previousDetails == this.newDetails
      ) {
        this.displayErrorMsg();
      } else {
        this.editedStory;
        this.$store.dispatch("editBlogStories", this.editedStory);
        this.closeModal;
      }
    },

    closeModal() {
      this.$emit("click");
    },
  },

  async mounted() {
    // await this.$store.dispatch("fetchSelectedStory", storyId);
    let storyToBeEdited = await this.$store.getters.getSelectedStory;
    this.newTitle = storyToBeEdited.title;
    this.newDetails = storyToBeEdited.body;
    this.previousTitle = storyToBeEdited.title;
    this.previousDetails = storyToBeEdited.body;
  },
};
</script>

<style>
@import url(https://fonts.googleapis.com/css2?family=Poppins:wght@100;200;300;400;500;600;800;900&display=swap);

body {
  font-family: "Poppins", sans-serif;
}

textarea {
  outline: none;
}
</style>

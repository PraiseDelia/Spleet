export const state = () => ({
  blogStories: [],
  selectedStory: [],
});

export const mutations = {
  setBlogStories(state, payload) {
    state.blogStories = payload;
  },

  setUpdatedStory(state, payload) {
    let index;
    state.blogStories.splice(payload.id, 1, payload);
  },

  setSelectedStory(state, payload) {
    state.selectedStory = payload;
  },
};

export const getters = {
  getAllStories(state) {
    console.log(state.blogStories);
    return state.blogStories;
  },
  getSelectedStory(state) {
    return state.selectedStory;
  },
  getFirstFourStories(state) {
    return state.blogStories.filter((story) => story.id < 5);
  },
  getNextTenStories(state) {
    return state.blogStories.filter((story) => story.id > 4 && story.id < 16);
  },
};

export const actions = {
  async fetchBlogStories({ commit }) {
    let allBlogObjects = await this.$axios.$get(
      "https://jsonplaceholder.typicode.com/posts"
    );
    commit("setBlogStories", allBlogObjects);
  },

  async fetchSelectedStory({ commit }, payload) {
    let theSelectedStory = await this.$axios.$get(
      `https://jsonplaceholder.typicode.com/posts/${payload}`
    );
    commit("setSelectedStory", theSelectedStory);
  },

  async editBlogStories({ commit }, payload) {
    let updatedStory = await this.$axios.$put(
      `https://jsonplaceholder.typicode.com/posts/${payload.id}`,
      payload
    );
    commit("setUpdatedStory", updatedStory);
  },
};

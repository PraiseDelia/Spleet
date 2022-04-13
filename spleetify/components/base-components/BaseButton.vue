<template>
  <button
    @click="emitEvent"
    class="base_button border border-black mt-2.5"
    :class="`${size}`"
  >
    <slot></slot>
  </button>
</template>

<script>
export default {
  emits: ["close"],
  props: ["size"],
  methods: {
    emitEvent() {
      this.$emit("click");
    },
  },
};
</script>

<style scoped>
@import url(https://fonts.googleapis.com/css2?family=BioRhyme:wght@100;200;300;400;500;600;800&display=swap);

button {
  font-family: "BioRhyme", serif;
}
.base_button {
  background: linear-gradient(to right, black 50%, white 50%);
  background-size: 200% 100%;
  background-position: right bottom;
  color: black;
  transition: all 0.2s ease-in-out;
}

.base_button:hover {
  background-position: left bottom;
  color: white;
}
</style>

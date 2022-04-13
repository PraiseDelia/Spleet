<template>
  <button :class="`rounded-lg ${btnStyles}`">
    <slot></slot>
  </button>
</template>

<script>
export default {
  props: ["btnStyles"],
};
</script>

<style>
.bg-green {
  background-color: #22c55e;
}
</style>

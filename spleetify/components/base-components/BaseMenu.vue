<template>
  <div class="sticky top-0 bg-gray-200 w-full p-2 mb-10 edit flex">
    <NuxtLink
      :to="`/${route1}`"
      class="flex justify-center items-center h-9 w-9 bg-white border-2 border-gray-300 rounded"
    >
      <img :src="require(`~/assets/${icon1}.png`)" :alt="alt1" />
    </NuxtLink>
    <NuxtLink
      :to="`/${route2}`"
      class="flex justify-center items-center h-9 w-9 bg-white border-2 border-gray-300 rounded ml-auto"
    >
      <img :src="require(`~/assets/${icon2}.png`)" :alt="alt2" />
    </NuxtLink>
  </div>
</template>

<script>
export default {
  props: ["icon1", "alt1", "icon2", "alt2", "route1", "route2"],
};
</script>

<style></style>

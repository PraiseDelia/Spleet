<template>
  <menu class="fixed right-4">
    <NuxtLink to="/" class="block border-gray-200">
      <li class="flex justify-between p-4">
        <img
          src="~/assets/new-story.svg"
          alt="Create a story"
          class="w-5 h-5"
        />
        <h4 class="ml-3">Create a Story</h4>
      </li>
    </NuxtLink>
  </menu>
</template>

<script>
export default {};
</script>

<style>
li {
  background-color: #e7e7e7;
}
</style>

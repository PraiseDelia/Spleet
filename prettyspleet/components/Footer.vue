<template>
  <footer class="bg-gray-900 flex flex-col items-center pt-20">
    <div class="pb-11 border-white">
      <div>
        <img src="~/assets/white-logo.png" alt="" class="mb-3 lg:mb-6" />
        <div>
          <nuxt-link to="/" v-for="(link, index) in footerLinks" :key="index">
            {{ link }}
          </nuxt-link>
        </div>
      </div>
    </div>
    <div>Lorem ipsum dolor sit amet.</div>
  </footer>
</template>

<script>
export default {
  data() {
    return {
      footerLinks: [
        "Products",
        "Features",
        "Pricing",
        "Careers",
        "Help",
        "Privacy",
      ],
    };
  },
};
</script>

<style></style>

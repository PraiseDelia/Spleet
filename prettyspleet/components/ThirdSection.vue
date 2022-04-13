<template>
  <section class="md:pb-10 md:px-10 lg:px-36 w-full">
    <div
      class="third_section sm:flex justify-between bg-gray-900 md:bg-transparent items-center px-10 sm:px-16 lg:px-24 lg:py-20 py-16 md:rounded-lg"
    >
      <div class="sm:w-1/2">
        <h2 class="text-3xl xl:text-4xl text-white mb-4 font-bold">
          The fastest way from idea to live site. Period.
        </h2>
        <p class="text-white">
          Flex is a Small SaaS Business. Flex isn't a traditional company.
        </p>
      </div>
      <div
        class="sm:w-1/2 flex flex-col mt-5 sm:mt-0 xs:flex-row sm:justify-end"
      >
        <div class="mb-5 sm:mb-0">
          <BaseButton btnStyles="bg-green text-white py-2 px-4 mr-2"
            >Get Started</BaseButton
          >
        </div>
        <div>
          <BaseButton btnStyles="bg-white text-gray-800 py-2 px-4">
            Learn More
          </BaseButton>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {};
</script>

<style>
@import url(https://fonts.googleapis.com/css2?family=Poppins:wght@100;200;300;400;500;600;800;900&display=swap);

div {
  font-family: Poppins;
}

.third_section {
  background-image: url("~/assets/dark-pattern.png");
  background-repeat: no-repeat;
  background-size: cover;
}

.bg-green {
  background-color: #22c55e;
}
</style>

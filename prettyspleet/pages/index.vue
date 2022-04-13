<template>
  <div>
    <TheNavBar></TheNavBar>
    <div class="md:px-20 xl:px-36 bg-gray-100">
      <div class="relative sm:rounded-xl bg-gray-800 sm:bg-transparent">
        <div
          class="second_background flex flex-col justify-center items-center py-12 md:rounded-xl md:20 xl:py-24 px-4 sm:px-20 xl:px-40"
        >
          <button
            class="flex items-center text-xs md:text-base text-white font-semibold rounded-3xl bg-green py-0.5 px-2 mb-4 sm:mb-5 lg:mb-6"
          >
            HEADER
          </button>
          <div class="mb-6">
            <h1
              class="text-4xl text-center px-4 lg:text-5xl font-bold text-white"
            >
              A small business is only as good as its tools
            </h1>
          </div>
          <div class="mb-6">
            <h3 class="text-base px-4 text-gray-400 sm:text-lg lg:text-xl">
              We're different. Flex is the only saas business platform that lets
              you run your business on one platform, seamlessly across all
              digital channels
            </h3>
          </div>
          <div
            class="flex flex-col justify-center items-center md:flex-row mb-4"
          >
            <div
              class="bg-white py-3 px-3 rounded-lg lg:py-4 mb-4 md:mb-0 md:mr-4"
            >
              <input
                type="email"
                name="email"
                id="email"
                placeholder="Enter your work email"
                class="text-sm"
              />
            </div>
            <BaseButton btnStyles="bg-green py-3 px-7 lg:py-4 text-gray-50"
              >Get early access</BaseButton
            >
          </div>
          <div>
            <p class="text-gray-400 text-xs sm:text-sm">
              Start your free day trial, no credit card required
            </p>
          </div>
        </div>
        <div class="pattern_designs">
          <div
            class="absolute h-16 top-0 left-0 pl-0.5 pt-0.5 w-20 md:h-20 md:w-24"
          >
            <img src="~/assets/pattern-design1.png" alt="First Pattern" />
          </div>
          <div class="absolute h-16 w-20 top-0 right-0 pt-2 pr-2">
            <img src="~/assets/pattern-design2.png" alt="Second Pattern" />
          </div>
          <div class="absolute h-16 w-20 bottom-0 pl-2 left-0">
            <img src="~/assets/pattern-design3.png" alt="Third pattern" />
          </div>
          <img
            src="~/assets/pattern-design4.png"
            alt="Fourth pattern"
            class="absolute h-20 w-20 bottom-0 right-0"
          />
        </div>
      </div>
    </div>

    <div>
      <section class="wave pt-24 bg-gray-100 px-5 md:px-12 lg:px-24">
        <p class="text-center mb-9 text-gray-300">
          Join 4,000+ companies already growing
        </p>
        <div class="flex justify-between pl-38">
          <div
            v-for="(logo, index) in companyLogos"
            :key="index"
            class="h-9 mr-4"
          >
            <img :src="require(`~/assets/${logo}.svg`)" :alt="logo" />
          </div>
        </div>
      </section>
      <img src="~/assets/wave.png" alt="wave" />
    </div>
    <div class="relative"><SecondSection /></div>
    <div class="relative bottom_item">
      <ThirdSection />
    </div>
    <FourthSection />
    <Footer />
  </div>
</template>

<script>
export default {
  name: "IndexPage",
  data() {
    return {
      companyLogos: ["jiggle", "symtric", "wishelp", "resecurb", "welytics"],
    };
  },
};
</script>

<style scoped>
@import url(https://fonts.googleapis.com/css2?family=Poppins:wght@100;200;300;400;500;600;800;900&display=swap);

div {
  font-family: Poppins;
}

.second_background {
  background-image: url("~/assets/dark-pattern.png");
  background-repeat: no-repeat;
  background-size: cover;
}

.wave {
  background-image: url("~/assets/grid-patterns.png");
  background-repeat: no-repeat;
  background-size: cover;
}

.bg-green {
  background-color: #22c55e;
}

input:focus {
  outline: none;
}

.bottom_item {
  z-index: 10;
  bottom: -200px;
}
</style>

<template>
  <nav class="p-2 xs:p-4 sm:px-5 lg:py-7 lg:px-24 bg-gray-100">
    <div class="flex justify-between items-center">
      <div>
        <div class="hidden lg:block">
          <img src="~/assets/nav-logo.png" alt="Logo" />
        </div>
        <button
          @click="toggleMenuDisplay"
          class="lg:hidden hamburger_menu p-2 ml-auto"
        >
          <div
            class="w-8 h-0.5 mb-3 bg-green"
            :class="`${displayStateOfDash1}`"
          ></div>
          <div
            class="w-8 h-0.5 bg-green"
            :class="`${displayStateOfDash2}`"
          ></div>
        </button>
      </div>
      <div>
        <div class="lg:hidden">
          <img src="~/assets/nav-logo.png" alt="Logo" />
        </div>
        <div class="hidden lg:block">
          <nuxt-link to="/" class="mr-12 text-base">Product</nuxt-link>
          <nuxt-link to="/" class="mr-12 text-base">Features</nuxt-link>
          <nuxt-link to="/" class="mr-12 text-base">Pricing</nuxt-link>
          <nuxt-link to="/" class="text-base">Resources</nuxt-link>
        </div>
      </div>
      <div>
        <nuxt-link to="/" class="hidden sm:inline">Log In</nuxt-link>
        <nuxt-link to="/" class="ml-4 md:ml-6">
          <BaseButton
            btnStyles="bg-green pt-0.5 pb-1.5 md:py-2 px-4 rounded-lg text-white text-base"
            >Sign Up</BaseButton
          >
        </nuxt-link>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  data() {
    return {
      menu: "closed",
    };
  },
  methods: {
    toggleMenuDisplay() {
      if (this.menu == "closed") {
        console.log(this.menu);

        this.menu = "open";
      } else {
        console.log(this.menu);

        this.menu = "closed";
      }
    },
  },

  computed: {
    displayStateOfDash1() {
      if (this.menu == "open") {
        return "hamburger_dash1";
      } else {
        return "";
      }
    },

    displayStateOfDash2() {
      if (this.menu == "open") {
        return "hamburger_dash2";
      } else {
        return "";
      }
    },
  },
};
</script>

<style scoped>
@import url(https://fonts.googleapis.com/css2?family=Poppins:wght@100;200;300;400;500;600;800;900&display=swap);

div {
  font-family: Poppins;
  color: #556987;
}

.bg-green {
  background-color: #22c55e;
}

.hamburger_dash1 {
  animation-name: slant;
  animation-duration: 0.5s;
  animation-fill-mode: forwards;
}

@keyframes slant {
  from {
    transform: rotate(0deg);
    margin-bottom: 12px;
  }
  to {
    margin-bottom: 0px;
    transform: rotate(-40deg);
  }
}

.hamburger_dash2 {
  animation-name: rotate;
  animation-fill-mode: forwards;
  animation-duration: 0.5s;
}

@keyframes rotate {
  from {
    margin-top: 0;
    transform: rotate(0deg);
  }
  to {
    margin-top: -2px;
    transform: rotate(40deg);
  }
}
</style>

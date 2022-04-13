<template>
  <div>
    <nav class="w-full flex p-2.5 bg-white items-center">
      <nuxt-link to="/"
        ><h1 class="text-3xl text-black md:font-bold">
          Dee's Spleet
        </h1></nuxt-link
      >
      <button @click="toggleMenuDisplay" class="p-2 ml-auto hamburger_menu">
        <div
          class="w-8 h-0.5 bg-black mb-3"
          :class="`${displayStateOfDash1}`"
        ></div>
        <div class="w-8 h-0.5 bg-black" :class="`${displayStateOfDash2}`"></div>
      </button>
    </nav>
    <div v-if="menu == 'open'"><Dropdown></Dropdown></div>
  </div>
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
        this.menu = "open";
      } else {
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
@import url(https://fonts.googleapis.com/css2?family=Courgette&display=swap);

h1 {
  font-family: "Courgette", handwriting;
}

nav {
  box-shadow: 0 2px 10px 0 #f2f2f2;
}

.hamburger_dash1 {
  animation-name: slant;
  animation-duration: 0.2s;
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
  animation-duration: 0.2s;
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

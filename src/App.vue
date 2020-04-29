<template>
  <div id="app">
    <div class="hero-background"></div>

    <nav>
      <router-link to="/about" class="btn btn-primary text-light">
        About
      </router-link>
    </nav>

    <h1 class="main-title" @click="headerClick">
      <router-link to="/">
        <span class="logo"> <img src="./assets/roulette.svg" alt="⚙" /> </span
        ><!--
        -->stackRoulette();
      </router-link>
    </h1>

    <router-view ref="currentComponent" />
  </div>
</template>

<script>
export default {
  name: 'app',
  methods: {
    headerClick() {
      if (typeof this.$refs.currentComponent.generateStack === 'function') {
        this.$refs.currentComponent.generateStack();
      }
    }
  }
};
</script>

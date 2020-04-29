<template>
  <div id="app">
    <div class="hero-background"></div>

    <nav>
      <a
        href="#"
        @click.prevent="tweet"
        class="mr-2"
        title="Tweet about StackRoulette"
      >
        <img src="./assets/twitter.svg" alt="Tweet" width="32" />
      </a>
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
    },
    tweet() {
      window.open(
        'https://twitter.com/intent/tweet?text=StackRoulette%20%3A%20Don%27t%20know%20what%20stack%20to%20use%20for%20your%20next%20webapp%3F%20Leave%20it%20to%20chance%20%F0%9F%8D%80&url=https://stackroulette.dev',
        'Tweet about StackRoulette',
        'resizable,scrollbars,status,width=600,height=600,top=50,left=50'
      );
    }
  }
};
</script>

<template>
  <div class="stack-item">
    <template v-if="item">
      <h1 v-if="title">{{ title }}</h1>
      <a
        :href="item.website"
        target="_blank"
        :title="`Visit ${item.name}'s website`"
      >
        <img :src="getIcon(item.icon)" :alt="item.name" />
        <h2 :style="`background-color: ${color};`">{{ item.name }}</h2>
      </a>
      <div class="dont-like">
        Don't like it?
        <button class="btn btn-link" @click="$emit('dontlike', item)">
          Change
        </button>
      </div>
    </template>
    <template v-else>
      <img src="../assets/roulette.svg" alt="Loading..." />
    </template>
  </div>
</template>

<script>
import splashy from 'splashy';

export default {
  props: {
    title: {
      type: String,
      required: true
    },
    item: {
      type: Object
    }
  },
  name: 'stack-item',
  data() {
    return {
      color: '#000000'
    };
  },
  methods: {
    getIcon(pic) {
      let imageBody = require(`../assets/icons/${pic}`);

      splashy(imageBody).then(
        ([dominantColor]) => (this.color = dominantColor)
      );

      return imageBody;
    }
  }
};
</script>

<style lang="scss" scoped>
.stack-item {
  text-align: center;
  position: relative;
  z-index: 1;
  margin: 0.35rem;
}
.stack-item h1 {
  font-weight: 300;
  font-size: 1.2rem;
  letter-spacing: -0.1rem;
  color: #333;
  font-style: italic;
  align-self: flex-start;
  margin-bottom: 2rem;
}
.stack-item > a {
  display: flex;
  flex-direction: column;
  transform: scale(1);
  transition: transform 0.2s;
  margin-bottom: 0.3rem;
}
.stack-item > a:hover,
.stack-item > a:visited {
  text-decoration: none;
  transform: scale(1.1);
}
.stack-item h2 {
  color: #fff;
  background-color: rgb(244, 248, 255);
  font-size: 1.6rem;
  padding: 0.125rem 0.75rem;
  margin-top: 1rem;
  border-radius: 0.75rem;
  text-align: center;
  letter-spacing: -0.15rem;
  font-weight: 300;
  white-space: nowrap;
  align-self: center;
}
.stack-item img {
  max-height: 100px;
  min-height: 90px;
  min-width: 100px;
  max-width: 200px;
  align-self: center;
}
.stack-item .dont-like {
  font-size: 0.8rem;
  letter-spacing: 0;
  color: #808080;
  font-family: sans-serif;
}
.stack-item .dont-like > button {
  font-size: 0.8rem;
  vertical-align: baseline;
  padding: 0;
  background-color: transparent;
  border-color: transparent;
  border-radius: 0;
  letter-spacing: 0;
}

@media screen and (max-width: 767px) {
  .stack-item {
    margin-bottom: 1rem;
  }
}
</style>

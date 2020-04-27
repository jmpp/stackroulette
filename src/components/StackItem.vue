<template>
  <div class="stack-item">
    <h1 v-if="title">{{ title }}</h1>
    <a :href="website" target="_blank" :title="`Visit ${name}'s website`">
      <img :src="getIcon(icon)" :alt="name" />
      <h2 :style="`background-color: ${color};`">{{ name }}</h2>
    </a>
    <div class="dont-like">
      Don't like it?
      <button class="btn btn-link">Change</button>
    </div>
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
    name: {
      type: String,
      required: true
    },
    icon: {
      type: String,
      required: true
    },
    website: {
      type: String,
      required: true
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
}
.stack-item > a {
  display: flex;
  flex-direction: column;
  transform: scale(1);
  transition: transform 0.2s;
}
.stack-item > a:hover,
.stack-item > a:visited {
  text-decoration: none;
  transform: scale(1.2);
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
}
.stack-item img {
  max-height: 100px;
  min-height: 90px;
  min-width: 100px;
  max-width: 200px;
  align-self: center;
}
.stack-item .dont-like {
  font-size: 0.7rem;
  color: #808080;
}
.stack-item .dont-like > button {
  font-size: 0.7rem;
  vertical-align: baseline;
  padding: 0;
}
</style>

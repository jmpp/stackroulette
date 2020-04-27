<template>
  <div class="home">
    <div class="text-center">
      <p>
        Not sure about what to use for your new project? Don't worry, we'll take
        care of this 👌
      </p>
    </div>

    <h2 class="subtitle">Here's a new stack for you:</h2>

    <div class="text-center">
      <button id="roll" class="btn btn-primary" @click="generateStack">
        👎 Don't like it? <strong>Generate another one!</strong>
      </button>
    </div>

    <main>
      <div id="result" v-if="generated">
        <section class="stack stack-frontend">
          <h1>Front-End</h1>
          <div class="stack-wrapper">
            <StackItem
              title="Language/Compiler"
              :name="jsPreprocessor.name"
              :icon="jsPreprocessor.icon"
              :website="jsPreprocessor.website"
            />
            <StackItem
              title="JS Framework"
              :name="jsFramework.name"
              :icon="jsFramework.icon"
              :website="jsFramework.website"
            />
            <StackItem
              title="CSS Preprocessor"
              :name="cssPreprocessor.name"
              :icon="cssPreprocessor.icon"
              :website="cssPreprocessor.website"
            />
            <StackItem
              title="CSS Framework"
              :name="cssFramework.name"
              :icon="cssFramework.icon"
              :website="cssFramework.website"
            />
          </div>
        </section>

        <div class="stack-backend-container">
          <section class="stack stack-backend">
            <h1>Back-End</h1>
            <div class="stack-wrapper">
              <StackItem
                title="Language/Environment"
                name="NodeJS"
                icon="nodejs.svg"
                website="https://nodejs.org/en/"
              />
              <StackItem
                title="Framework"
                name="Express"
                icon="express.svg"
                website="http://expressjs.com/"
              />
            </div>
          </section>

          <section class="stack stack-database">
            <h1>Database</h1>
            <div class="stack-wrapper">
              <StackItem
                title="SGBD"
                name="PostgreSQL"
                icon="postgresql.svg"
                website="https://www.postgresql.org/"
              />
            </div>
          </section>
        </div>
      </div>
      <!-- #result -->
    </main>
  </div>
</template>

<script>
import StackItem from '@/components/StackItem.vue';
import { sample as _sample } from 'lodash';
import {
  jsFrameworks,
  jsPreprocessors,
  cssFrameworks,
  cssPreprocessors
} from '@/stacks.js';

export default {
  name: 'Home',
  components: {
    StackItem
  },
  data() {
    return {
      jsFramework: null,
      jsPreprocessor: null,
      cssFramework: null,
      cssPreprocessor: null
    };
  },
  methods: {
    generateStack() {
      this.jsFramework = null;
      this.jsPreprocessor = null;
      this.cssFramework = null;
      this.cssPreprocessor = null;

      setTimeout(() => {
        this.jsFramework = _sample(jsFrameworks);
        this.jsPreprocessor = _sample(jsPreprocessors);
        this.cssFramework = _sample(cssFrameworks);
        this.cssPreprocessor = _sample(cssPreprocessors);
      }, 150);
    }
  },
  computed: {
    generated() {
      return (
        this.jsFramework !== null &&
        this.jsPreprocessor !== null &&
        this.cssFramework !== null &&
        this.cssPreprocessor !== null
      );
    }
  },
  created() {
    this.generateStack();
  }
};
</script>

<style lang="scss" scoped>
$stack-title-color: rgb(108, 190, 255);
$stack-border-color: rgb(108, 190, 255);
$stack-background-color: rgb(227, 245, 255);

#result {
  transform: scale(0.9);
}

.stack-backend-container {
  display: flex;
  align-items: flex-start;
}

.stack {
  flex: 1;
  margin: 0 0.7rem;
  position: relative;
}
.stack:only-of-type {
  margin-bottom: 3rem;
}

.stack > h1 {
  position: absolute;
  top: -2.3rem;
  color: $stack-title-color;
  font-weight: 500;
}

.stack-wrapper {
  background-image: linear-gradient(
    rgb(255, 255, 255) 0%,
    $stack-background-color 50%,
    rgb(255, 255, 255) 100%
  );
  border: 1px dashed $stack-border-color;
  padding: 2rem;
  border-radius: 0.1875rem;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
}

.stack-frontend::after,
.stack-backend::after,
.stack-database::after {
  content: '';
  display: block;
  width: 80px;
  height: 100px;
  background-size: 80px auto;
  background-repeat: no-repeat;
  position: absolute;
  bottom: -40px;
  right: -20px;
  /* opacity: 0.6; */
}
.stack-frontend::after {
  background-image: url('../assets/frontend-color.svg');
}
.stack-backend::after {
  background-image: url('../assets/backend-color.svg');
}
.stack-database::after {
  background-image: url('../assets/database-color.svg');
}

/******************/
/* Medias-Queries */
/******************/

@media screen and (max-width: 767px) {
  #result {
    transform: scale(0.95);
  }
  .stack-wrapper {
    flex-wrap: wrap;
  }
}
@media screen and (max-width: 512px) {
  .stack-backend-container {
    flex-direction: column;
    justify-content: center;
    align-items: stretch;
  }
  .stack {
    margin: 0 0 3rem 0;
  }
}
</style>

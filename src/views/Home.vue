<template>
  <div class="home">
    <nav>
      <router-link er-link to="/about" class="btn btn-info text-light">
        About
      </router-link>
    </nav>

    <div class="text-center">
      <p>
        Not sure about what to use for your new webapp? Don't worry, we'll take
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
              :item="jsPreprocessor"
              @dontlike="change('jsPreprocessor', JS_PREPROCESSORS)"
            />
            <StackItem
              title="JS Framework"
              :item="jsFramework"
              @dontlike="change('jsFramework', JS_FRAMEWORKS)"
            />
            <StackItem
              title="CSS Preprocessor"
              :item="cssPreprocessor"
              @dontlike="change('cssPreprocessor', CSS_PREPROCESSORS)"
            />
            <StackItem
              title="CSS Framework"
              :item="cssFramework"
              @dontlike="change('cssFramework', CSS_FRAMEWORKS)"
            />
          </div>
        </section>

        <div class="stack-backend-container">
          <section class="stack stack-backend">
            <h1>Back-End</h1>
            <div class="stack-wrapper">
              <StackItem
                title="Language/Environment"
                :item="backend_environment"
                @dontlike="
                  () => {
                    change('backend_environment', BACKEND_ENVIRONMENTS, () => {
                      change(
                        'backend_framework',
                        backend_environment.frameworks
                      );
                    });
                  }
                "
              />
              <StackItem
                title="Framework"
                :item="backend_framework"
                @dontlike="
                  change('backend_framework', backend_environment.frameworks)
                "
              />
            </div>
          </section>

          <section class="stack stack-database">
            <h1>Database</h1>
            <div class="stack-wrapper">
              <StackItem
                title="SGBD"
                :item="sgbd"
                @dontlike="change('sgbd', SGBD)"
              />
            </div>
          </section>
        </div>
      </div>
      <!-- #result -->
      <div v-else class="text-center">
        <img src="../assets/loader.svg" alt="Loading..." width="80" />
      </div>
    </main>
  </div>
</template>

<script>
import StackItem from '@/components/StackItem.vue';
import { sample as _sample } from 'lodash';
import {
  JS_FRAMEWORKS,
  JS_PREPROCESSORS,
  CSS_FRAMEWORKS,
  CSS_PREPROCESSORS,
  SGBD,
  BACKEND_ENVIRONMENTS
} from '@/stacks.js';

export default {
  name: 'Home',
  components: {
    StackItem
  },
  data() {
    return {
      JS_FRAMEWORKS,
      JS_PREPROCESSORS,
      CSS_FRAMEWORKS,
      CSS_PREPROCESSORS,
      SGBD,
      BACKEND_ENVIRONMENTS,

      jsFramework: null,
      jsPreprocessor: null,
      cssFramework: null,
      cssPreprocessor: null,
      sgbd: null,
      backend_environment: null,
      backend_framework: null
    };
  },
  methods: {
    change(property, list, callback) {
      this[property] = null;
      setTimeout(() => {
        this[property] = _sample(list);
        if (typeof callback === 'function') callback();
      }, 100);
    },
    generateStack() {
      this.jsFramework = null;
      this.jsPreprocessor = null;
      this.cssFramework = null;
      this.cssPreprocessor = null;
      this.sgbd = null;
      this.backend_environment = null;
      this.backend_framework = null;

      setTimeout(() => {
        this.jsFramework = _sample(JS_FRAMEWORKS);
        this.jsPreprocessor = _sample(JS_PREPROCESSORS);
        this.cssFramework = _sample(CSS_FRAMEWORKS);
        this.cssPreprocessor = _sample(CSS_PREPROCESSORS);
        this.sgbd = _sample(SGBD);
        this.backend_environment = _sample(BACKEND_ENVIRONMENTS);
        this.backend_framework = _sample(this.backend_environment.frameworks);
      }, 250);
    }
  },
  computed: {
    generated() {
      return (
        this.jsFramework !== null ||
        this.jsPreprocessor !== null ||
        this.cssFramework !== null ||
        this.cssPreprocessor !== null ||
        this.sgbd !== null ||
        this.backend_environment !== null ||
        this.backend_framework !== null
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

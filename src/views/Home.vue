<template>
  <div class="home">
    <p class="text-center">
      Not sure about the stack of your future project? Just hit the button below
      and see what will be your next stack 😎
    </p>

    <div class="text-center">
      <button id="roll" class="btn btn-primary">
        🎯 Generate a fresh new stack!
      </button>
    </div>

    <main>
      <div id="result">
        <section class="stack stack-frontend">
          <h1>Front-End</h1>
          <div class="stack-wrapper">
            <StackItem
              name="Angular"
              icon="angular.svg"
              website="https://angular.io"
            />
            <StackItem
              name="TypeScript"
              icon="typescript-icon.svg"
              website="https://www.typescriptlang.org/"
            />
            <StackItem
              name="Materialize"
              icon="materialize.svg"
              website="https://materializecss.com/"
            />
            <StackItem
              name="Sass"
              icon="sass.svg"
              website="https://sass-lang.com/"
            />
          </div>
        </section>

        <div class="stack-backend-container">
          <section class="stack stack-backend">
            <h1>Back-End</h1>
            <div class="stack-wrapper">
              <StackItem
                name="NodeJS"
                icon="nodejs.svg"
                website="https://nodejs.org/en/"
              />
              <StackItem
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

export default {
  name: 'Home',
  components: {
    StackItem
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
  border: 1px solid $stack-border-color;
  padding: 2rem;
  border-radius: 0.1875rem;
  display: flex;
  justify-content: space-evenly;
  align-items: flex-end;
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

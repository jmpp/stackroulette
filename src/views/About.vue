<template>
  <div class="about">
    <nav>
      <router-link er-link to="/" class="btn btn-info text-light">
        « Back
      </router-link>
    </nav>
    <div class="text-center">
      <h2 class="subtitle mt-0">
        About StackRoulette
      </h2>
      <p>
        This mini-project was born from an idea after reading yet another post
        saying that Node.js had to be used with MongoDB, and PHP with MySQL, and
        that there is only React, Angular and Vue for building webapps ...
      </p>
      <p>
        I created StackRoulette to deconstruct these misconceptions and show
        that any front-end stack can be coupled with any back-end stack (at
        least, almost ^^)
      </p>
      <p>
        This project is not intended to provide advices or best practice about
        what technologies you should use. It is just a 2-days projects developed
        for fun 😉.<br />
        I tried to include all the tools and languages I knew, but if you don't
        see your favorite technology popping or see something that can be
        improved, feel free to make a
        <abbr title="Pull Request">PR</abbr> on Github 😎
      </p>
      <p>
        Contribute here:
        <a
          href="https://github.com/jmpp/stackroulette"
          target="_blank"
          rel="noopener noreferrer"
          >https://github.com/jmpp/stackroulette</a
        >
      </p>
      <hr />
      <div class="d-flex justify-content-center align-items-center">
        <div class="m-3">
          © Copyright 2020 - Jean-Marie CLÉRY
        </div>
        <div class="m-3">
          <img
            src="../assets/github.svg"
            alt="Github"
            width="32"
            class="mr-2"
          />
          <a href="https://github.com/jmpp" target="_blank"
            >https://github.com/jmpp</a
          >
        </div>
        <div class="m-3">
          <img
            src="../assets/twitter.svg"
            alt="Twitter"
            width="32"
            class="mr-2"
          />
          <a href="https://twitter.com/_jmpp" target="_blank"
            >https://twitter.com/_jmpp</a
          >
        </div>
      </div>
      <div class="d-flex justify-content-center align-items-center">
        <div class="m-3">
          Icons in courtesy of
          <a href="https://svgporn.com/" target="_blank">SVGPorn</a>
        </div>
      </div>
    </div>
  </div>
</template>

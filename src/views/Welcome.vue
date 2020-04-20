<template>
  <!-- FYI , ensure this is wrapped in bulma outer container (see App component)  -->
  <section>
    <div class="columns">
      <div class="column  is-4  is-offset-4">
          <h2 class="title  is-2 has-text-grey">VueJS Bulma Boilerplate</h2>
          <p>Why not scaffold with some <a href="https://docs.emmet.io/">emmet</a>&hellip;</p>
          <p>Follow <a href="https://bulma.io">bulma</a> reference for sections, rows and columns that behave nicely and reponsively</p>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class Welcome extends Vue {}
</script>

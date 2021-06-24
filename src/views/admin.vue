<template>
  <section class="main">
    <div class="is-parent">
      <!-- logged in -->
      <article
      class="tile is-child is-white flex-container box"
      style="box-shadow: 0 2rem 1rem rgba(0,0,0,.2); border: 1px solid rgb(204, 204, 204);"
      >
        <p class="title">
          Admin Page
        </p>
        <div class="content">
          Admin content here
        </div>
        <!-- copyright and version -->
        <app-footer />
      </article>
    </div>
  </section>
</template>

<script>
import { mapGetters } from 'vuex'
import AppFooter from '../components/app-footer'

export default {
  components: {
    AppFooter
  },

  computed: {
    ...mapGetters([
      'loading'
    ])
  }
}
</script>

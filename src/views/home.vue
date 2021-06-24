<template>
  <section class="main">
    <!-- main content -->
    <div class="is-parent">
      <!-- logged in -->
      <article
      class="tile is-child is-white flex-container box"
      style="box-shadow: 0 2rem 1rem rgba(0,0,0,.2); border: 1px solid rgb(204, 204, 204);"
      > 
        <!-- title -->
        <p class="title">
          Welcome!
        </p>

        <!-- main content -->
        <div class="content" style="position: relative;">
          <!-- loading graphic -->
          <b-loading :active="isLoading" :is-full-page="false" />

          <!-- Get Test Data Button -->
          <b-field>
            <b-button
            rounded
            expanded
            type="is-primary"
            @click="clickGetTestData"
            >
              Get Test Data
            </b-button>
          </b-field>

          <h4>Test Data:</h4>

          <!-- the test data -->
          <pre>{{ testData }}</pre>
        </div>

        <!-- copyright and version -->
        <app-footer />
      </article>
    </div>
  </section>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
import AppFooter from '../components/app-footer'

export default {
  components: {
    AppFooter
  },

  data () {
    return {
    }
  },

  computed: {
    ...mapGetters([
      'loading',
      'testData'
    ]),
    isLoading () {
      return this.loading.test.get
    }
  },

  methods: {
    ...mapActions([
      'getTestData'
    ]),
    clickGetTestData () {
      this.getTestData()
    }
  }
}
</script>

<template>
  <div id="app">
    <div class="main-section">
      <NavBar />
      <main class="container">
        <hr>
        <div v-if="!(isLoading)">
          <router-view :key="$route.fullPath"></router-view>
        </div>
        <div v-else>
          <scale-loader></scale-loader>
        </div>
      </main>
    </div>
    <Footer/>
  </div>
</template>

<script>
import Vue from "vue"
import { mapState, mapActions } from "vuex"
import * as VueGoogleMaps from "vue2-google-maps"


import NavBar from "@/components/navbar"
import Footer from "@/components/footer"
import { routeServices, GOOGLE_MAPS_API_KEY } from "@/shared";

Vue.component("scale-loader", require("vue-spinner/src/ScaleLoader.vue").default);
Vue.component("pacman-loader", require("vue-spinner/src/PacmanLoader.vue").default);

Vue.use(VueGoogleMaps, {
    load: {
        key: GOOGLE_MAPS_API_KEY,
        libraries: "places ", 
    },
})

export default {
  name: "App",
  components: { NavBar, Footer, },
  data() {
    return {
      isLoading: true
    }
  },
  methods: {
    ...mapActions([
      "getRoutesAction",
      "getSharedStopsAction",
      "getNonSharedStopsAction",
      "getRoutesPathsAction",
      "getRoutesPathsColorsAction"
    ])
  },
  async created () {
    this.isLoading = true;
    await this.getRoutesAction();
    await this.getSharedStopsAction();
    await this.getNonSharedStopsAction();
    await this.getRoutesPathsAction();
    this.getRoutesPathsColorsAction();
    this.isLoading = false;
  }
}
</script>

<style lang="scss">
@import "@/design/index.scss";
</style>
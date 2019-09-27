<template>
<div>
  <section class="hero is-danger is-fullheight">
    <div class="hero-body">
      <div class="container" v-if="isLoading">
        <h1 class="title">
          404 ... Resource not found :(
        </h1>
        <h2 class="subtitle">
          <!-- Fullheight subtitle -->
        </h2>
      </div>
    </div>
  </section>
</div>
</template>

<script>
export default {
  name: "PageNotFound",
  data() {
    return {
      isLoading: true
    }
  },
  created () {
    this.isLoading = true
  },
}
</script>

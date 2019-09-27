<template>
<nav class="navbar is-success" role="navigation" aria-label="main navigation">
  <div class="navbar-brand">
    <router-link class="navbar-item" :to="{name: 'home'}" tag="a">
      <img src="../assets/bongologo.png" width="112" height="328">
    </router-link>

    <a role="button" class="navbar-burger burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
      <span aria-hidden="true"></span>
      <span aria-hidden="true"></span>
      <span aria-hidden="true"></span>
    </a>
  </div>

  <div id="navbarBasicExample" class="navbar-menu">
    <div class="navbar-start">
            <router-link :to="{name: 'routes'}" class="navbar-item">Routes</router-link>
            <router-link :to="{name: 'stop'}" class="navbar-item">Stops</router-link>
            <router-link :to="{name: 'map'}" class="navbar-item">Map</router-link>
    </div>

    <div class="navbar-end">
        <!-- Search Component goes here -->
        <SearchBox></SearchBox>
      <!-- <div class="navbar-item">
          <form action='/stop' v-on:submit.prevent="onSubmit">
            <input type="text" name="id" id="search" class="input is-rounded" @keydown.esc="clear()" placeholder="Stop Number">
          </form>
      </div> -->
      <!-- <div class="navbar-item"> -->
        <router-link :to="{name: 'about'}" class="navbar-item">About & Feedback</router-link>
      <!-- </div> -->
    </div>
  </div>
</nav>
</template>

<script>
  import SearchBox from '@/components/search'

    export default {
        name: 'NavBar',
        components: {
          SearchBox,
        },
        data() {
            return {
                number: 250
            }
        },
    }
</script>

<style lang="scss" scoped>

</style>
<template>
<div>
    <div class="container">
      <h1 class="title is-1">Routes</h1>
      <div class="columns is-desktop is-multiline">
        <div class="column is-one-third" v-for="(agency, agencyName) in agencyNames" :key="agencyName">
          <p class="title is-2">{{agency}}</p>
          <div class="list is-hoverable">
            <template v-for="route in routes[agencyName]">
              <router-link  :to="{name: 'route-detail', params: {agency: route.agency, id: route.id}}"
                            tag="a" class="list-item"
                            :key="route.id">
                            {{ route.name }}
              </router-link>
            </template>
          </div>
        </div>
      </div>
  </div>
</div>
</template>

<script>
// @ is an alias to /src
import { mapState, mapActions } from "vuex"

export default {
  name: "Home",
  components: {
  },
  data() {
    return {
    }
  },
  computed: {
    ...mapState([
      "routes",
      "agencyNames"
  ])
  },
}
</script>

<style lang="css" scoped>
  a {
    color: #00a605;
  }
</style>
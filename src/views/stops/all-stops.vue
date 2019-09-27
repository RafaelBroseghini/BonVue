<template>
<div>
    <h1 class="title is-1">Stops</h1>
    <div class="columns">
      <div class="column">
        <h1 class="title">Shared</h1>
        <table class="table is-bordered is-striped is-narrow is-hoverable is-fullwidth">
            <thead>
                  <th>Number</th>
                  <th>Name</th>
            </thead>
            <tbody v-if="sharedStops">
                <tr v-for="(stop, index) in sharedStops" :key="index">
                  <td><router-link :to="{name:'stop-detail', params: {id: stop.stopnumber}}" tag='a'>{{stop.stopnumber}}</router-link></td>
                  <td><router-link :to="{name:'stop-detail', params: {id: stop.stopnumber}}" tag='a'>{{stop.stoptitle}}</router-link></td>
                </tr>
            </tbody>
        </table>
      </div>
      <div v-for="(agency, key) in agencyNames" class="column" :key="agency">
        <h1 class="title">{{agency}}</h1>
        <table class="table is-bordered is-striped is-narrow is-hoverable is-fullwidth">
            <thead>
                <tr>
                <th>Number</th>
                <th>Name</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(stop, index) in nonSharedStops[key]" :key="index">
                  <td><router-link :to="{name:'stop-detail', params: {id: stop.stopnumber}}" tag='a'>{{stop.stopnumber}}</router-link></td>
                  <td><router-link :to="{name:'stop-detail', params: {id: stop.stopnumber}}" tag='a'>{{stop.stoptitle}}</router-link></td> 
                </tr>
            </tbody>
        </table>
      </div>
    </div>
</div>
</template>

<script>
  import Vue from 'vue'
  import { mapState } from 'vuex';


  export default {
    name: 'Stops',
    data () {
      return {
      }
    },
    methods: {
      getAgencyName(key){
        return this.agencyNames[key]
      }
    },
    computed: {
      ...mapState([
        "sharedStops",
        "nonSharedStops",
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

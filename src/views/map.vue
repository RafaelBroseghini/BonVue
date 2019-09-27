<template>
    <div>
        <h1 class="title is-2">Map</h1>
    <GmapMap
        :center="{lat: 41.659918, lng:-91.539269}"
        :zoom="12"
        style="width: 100%; height: 400px"
        >
        
        <GmapPolyline :path.sync="paths[idx]" :options="{ strokeColor: pathsColors[idx] }" v-for="(route, idx) in paths" :key="idx">
        </GmapPolyline>

        </GmapMap>
        <hr>
        <div class="buttons are-medium">
            <a class="button is-success is-rounded" @click="uncheckAll($event)">Uncheck all</a>
        </div>
      <div class="columns is-desktop is-multiline">
        <div class="column is-one-third" v-for="(agency, agencyName) in agencyNames" :key="agencyName">
          <p class="title is-2">{{agency}}</p>
              <div class="buttons">
                <template v-for="(route, index) in routes[agencyName]">
                    <a  class="button is-small is-fullwidth" 
                        :id=route.id 
                        :title=agencyName 
                        @click="drawRoute($event)"
                        :key=index>{{ route.name }}</a>
                </template>
              </div>
        </div>
      </div>
      </div>
</template>

<script>
    import Vue from "vue"
    import {mapState, mapActions, mapGetters} from "vuex"

    import {
        routeServices,
        stopServices,
    } from "@/shared"

    export default {
        name: "MapComponent",
        data() {
            return {
                isLoading: true,
                bodyColor: window.getComputedStyle(document.body, null).getPropertyValue('background-color'),
                paths: {},
            }
        },
        methods: {
            async drawRoute(event) {
                event.target.classList.toggle("toggled")
                const id = event.target.id
                if (event.target.classList.contains('toggled')) {
                    event.target.style.backgroundColor = this.pathsColors[parseInt(id)]
                    const routePath = this.getPathById(id)
                    Vue.set(this.paths, id, routePath)
                } else {
                    event.target.style.backgroundColor = this.bodyColor
                    Vue.delete(this.paths, id)
                }
            },
            uncheckAll(event) {
                event.target.classList.add("is-focused")
                let buttons = document.getElementsByClassName("is-small")
                for (const button of buttons) {
                    button.classList.remove("toggled")
                    button.style.backgroundColor = this.bodyColor
                }
                Object.keys(this.paths).forEach((key)=>{
                    Vue.delete(this.paths, key)
                })
                event.target.classList.remove("is-focused") 
            }
        },
        computed: {
            ...mapState(["routes", "agencyNames", "pathsColors"]),
            ...mapGetters(["getPathById"])
        },
    }
</script>
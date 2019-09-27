<template>
    <div class="" >
    <div class="" v-if="!(isLoading)">
        <h1 class="title is-3">{{route.name}}</h1>
        <div class="notification is-warning" v-if="buses.length < 1">
            <h2><strong>No Buses Running</strong></h2>
        </div>
        
        <h4 class="subtitle" v-else>Locations go here</h4>
        <hr>
        <h1 class="title is-3">Map</h1>
        
    <GmapMap
        :center="getCenterMap"
        :zoom="13"
        style="width: 100%; height: 300px"
        >
        <GmapPolyline :path.sync="pathCoords" :options="{ strokeColor:'#4DFF40'}">
        </GmapPolyline>
        <GmapMarker :key="idx"
            v-for="(m, idx) in stopsCoordsArr"
            :position="{lat:parseFloat(m.lat), lng:parseFloat(m.lng)}"
            :clickable="true"
            :draggable="true"
            :icon="{ url: require('../../assets/circle.png')}"/>

        <GmapMarker :key="index"
            v-for="(bus, index) in buses"
            :position="{lat:parseFloat(bus.lat), lng:parseFloat(bus.lng)}"
            :clickable="true"
            :draggable="true"
            :icon="{ url: require('../../assets/bus.png')}"/>
        </GmapMap>
    <h1 class="title is-3">Stops</h1>
    <table class="table is-bordered is-striped is-hoverable is-fullwidth">
  <thead>
    <tr>
      <th>Number</th>
      <th>Name</th>
    </tr>
  </thead>
  <tbody>
    <tr v-for="stop in stops" :key="stop.number">
        <td> 
            <router-link 
                :to="{name: 'stop-detail', params: {id: stop.stopnumber, title: stop.stoptitle}}" 
                tag="a">
                {{stop.stopnumber}}
            </router-link>
        </td>
        <td>
            <router-link 
                :to="{name: 'stop-detail', params: {id: stop.stopnumber, title: stop.stoptitle}}" 
                tag="a"> {{stop.stoptitle}}
            </router-link>
        </td>
    </tr>
  </tbody>
    </table>
    </div>
    <div v-else id="spinner">
        <scale-loader :color="color" :size="size"></scale-loader>
    </div>
    </div>
</template>

<script>
    import {
        routeServices,
        stopServices,
        busesServices,
        GOOGLE_MAPS_API_KEY
    } from "@/shared"


    export default {
        name: "RouteDetail",
        props: {
            id: {
                type: Number,
                default: 2404
            },
            agency: {
                type: String,
                default: "coralville"
            },
            color: "red",
            size: "100px"
        },
        data() {
            return {
                isLoading: true,
                route: {},
                buses: [],
                stops: undefined,
                stopsCoordsArr: [],
                pathCoords: [],
                centerMap: {lat: 41.68399, lng:-91.54886},
            }
        },
        async created () {
            this.isLoading = true
            await this.loadRoute();
            this.pathCoords = this.normalizePath()
            await this.loadBuses();
            this.isLoading = false
        },
        methods: {
            async loadRoute () {
                this.route = await routeServices.getRoute(this.agency, this.id)
                this.stops = stopServices.getRouteStops(this.route);
                this.stopsCoordsArr = stopServices.getStopsCoordsArr(this.route);
                this.pathCoords = this.route.paths;  
            },
            async loadBuses () {
                const buses = await busesServices.getBusesLocations(this.agency, this.id)
                this.buses = buses;
            },
            async reloadBuses () {
                setInterval(async () => {
                    await this.loadBuses()
                }, 15000)
            },
            normalizePath() {
                let res = new Array();
                const pathCoords = this.route.paths;
                for (const group of pathCoords) {
                    for (const coord of group.points) {
                        res.push(coord)
                    }
                }
                return res
            }
        },
        computed: {
            getCenterMap() {
                let mid = Math.floor((this.stopsCoordsArr.length / 4))
                let centerCoord = this.stopsCoordsArr[mid]
                return {lat: centerCoord.lat, lng:centerCoord.lng}
            }
        },
    }
</script>

<style lang="css" scoped>
    #spinner {
        margin: 0 auto;
    }
</style>
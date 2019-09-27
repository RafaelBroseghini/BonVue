<template>
<div>
    <div v-if="!(isLoading)">
        <div v-if="validPredictions.length > 0">
            <h1 class="title">Stop {{this.id}} - <span class="subtitle is-3" > {{this.title}}</span></h1>
                <table class="table is-bordered is-striped is-narrow is-hoverable is-fullwidth">
                    <thead>
                        <tr>
                        <th>Time</th>
                        <th>Route</th>
                        <th>Agency</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="(pred, index) in validPredictions" :key="index" :style="getAgencyColor(pred.agencyName)">
                            <td>{{pred.minutes}} minutes</td>
                            <td>{{pred.title}}</td>
                            <td>{{pred.agencyName}}</td>
                        </tr>
                    </tbody>
                </table>
        </div>
        <div v-else>
            <h1 class="title">Oh no 😢, no predictions found for Stop {{this.id}}.</h1>
        </div>
    </div>
    <div v-else id="spinner">
        <scale-loader :color="color" :size="size"></scale-loader>
    </div>
</div>
</template>

<script>
    import {predictionServices, stopServices} from "@/shared"

    export default {
        name: "StopDetail",
        props: {
            id: {
                type: Number,
                default: 4010 
            },
            title: {
                type: String,
                default: 'Highway 6 & Hawkins' 
            },
            color: "red",
            size: "100px"
        },
        data() {
            return {
                isLoading: true,
                validPredictions: undefined,
            }
        },
        async created () {
            this.isLoading = true;
            await this.loadStopTitle();
            await this.getValidPredictions();
            this.isLoading = false;
        },
        methods: {
            getAgencyColor(agency) {
                const agencyColor = {
                    'Coralville Transit': {background: '#0080FF', color: '#fff'},
                    'Cambus': {background: '#FEE000', color: '#000000'},
                    'Iowa City Transit': {background: '#A12223', color: '#fff'}
                }
                return agencyColor[agency]
            },
            async loadStopTitle () {
                const stop = await stopServices.getStop(this.id)
                if (stop == undefined || stop == []) {
                 this.validPredictions = []  
                } else {
                    this.title = stop.stoptitle
                }
            },
            async getValidPredictions() {
                if (this.validPredictions != []) {
                    let predictions = await predictionServices.getStopPredictions(this.id)
                    this.validPredictions = predictionServices.getPredictionsLessThanSeventyMin(predictions);
                }
            }
        },
    }
</script>

<style lang="scss" scoped>

</style>
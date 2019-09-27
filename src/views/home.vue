<template>
    <div>
        <div class="tile is-ancestor">
            <div class="tile is-vertical is-8">
                <div class="tile">
                    <div class="tile is-parent is-vertical">
                        <article class="tile is-child notification is-success">
                            <router-link :to="{href: 'https://www.google.com/maps/dir/@41.6607047,-91.5369336,16.64z/data=!4m2!4m1!3e3'}" 
                                         tag='a' 
                                         class="button is-success is-large is-fullwidth">
                                            Use Google Transit to plan your trip
                            </router-link>
                        </article>
                        <article class="tile is-child notification is-success">
                            <router-link :to="{name:'routes'}" tag='button' class="button is-success is-large is-fullwidth">View All Routes</router-link>
                            <div class="buttons has-addons is-centered">
                                <span class="button">Coralville</span>
                                <span class="button">CAMBUS</span>
                                <span class="button">Iowa City</span>
                            </div>
                        </article>
                        <article class="tile is-child notification is-success">
                            <router-link :to="{name:'stop'}" tag='button' class="button is-success is-large is-fullwidth">View All Stops</router-link>
                        </article>
                    </div>
                    <div class="tile is-parent is-vertical">
                        <article class="tile is-child notification is-info">
                            <p class="has-text-centered title is-2">Apps</p>
                            <p class="subtitle">With an image</p>
                        </article>
                        <article class="tile is-child notification is-info">
                            <p class="has-text-centered title is-2">Text</p>
                            <p class="has-text-centered subtitle">text 'bongo [stop#]' to <a href="sms:41411">41411</a></p>
                        </article>
                        <article class="tile is-child notification is-info">
                            <p class="has-text-centered title is-2">Phone</p>
                            <p class="has-text-centered subtitle"><a href="tel:13194714155">319-471-4155</a></p>
                        </article>
                    </div>
                </div>
            </div>
        </div>
        <div class="tile is-ancestor">
            <div class="tile is-vertical is-6">
                <div class="tile">
                    <div class="tile is-parent">
                        <article class="tile is-child notification">
                                <img src="@/assets/bongologo.png" alt="Bongo Logo">
                        </article>
                        
                    </div>
                </div>
            </div>
                <div class="tile is-vertical is-6">
                    <div class="tile is-parent">
                        <article class="tile is-child notification">
                                <p>Bongo is a GPS-based, real-time passenger information system that allows riders to find current bus locations as well as predictions for upcoming bus arrivals for Iowa City, Coralville and the University of Iowa.</p>
                                    <hr>
                                    <p><strong><router-link :to="{name:'about'}">More Information &amp; Feedback</router-link>
                            </strong></p>
                        </article>
                    </div>
                </div>
        </div>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style lang="scss" scoped>

</style>
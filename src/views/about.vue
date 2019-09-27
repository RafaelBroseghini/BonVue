<template>
    <div>
            <div class="columns">
                <div class="column is-8">
                    <h1 class="title is-1 is-spaced">Bongo - Bus on the Go</h1>
                    <p class="subtitle">Bongo is a GPS-based, real-time passenger information system that allows
                    riders to find current bus locations as well as predictions for upcoming bus arrivals.

                    </p>
                </div>
                <div class="column is-8">
                    <img src="../assets/bongologo.png" alt="Bongo Logo">
                </div>
            </div>
            <div class="notification is-warning">
                <button class="delete"></button>
                    Remember - Allow plenty of time to reach your stop before the bus arrives!
                </div>
        <div data-alert="" class="alert-box warning">
          
        </div>
        <h1 class="title is-2">Bongo...</h1>
        <h3 class="title is-3">Improves Safety</h3>
        <div class="list is-hoverable">
            <li class="list-item">
                Users can minimize time spent outside in bad weather or in poorly-lit locations.
            </li>
        </div>

        <h3 class="title is-3">Encourages Eco-Friendly</h3>
        <div class="list is-hoverable">
            <li class="list-item">
                Bongo makes it easier for people to use public transportation and ultimately reduces the number of cars on the road.
            </li>
            <li class="list-item">
                Wi-Fi access allows commuters to stay connected.
            </li>
        </div>
        <ul>
          <li></li>
          <li></li>
        </ul>
        <h3 class="title is-3">Creates Efficiency</h3>
        <div class="list">
          <li class="list-item">The system provides a management console for bus dispatchers so they can more effectively manage the transit service.</li>
          <li class="list-item">Automatic Passenger Counters (APC) provide valuable information to evaluate stops and routes.</li>
          <li class="list-item">The system provides real-time information on many engine variables to identify and address maintenance issues.</li>
        </div>
        <h2 class="title is-2 is-spaced">Feedback</h2>
        <p class="subtitle">For feedback about Bongo, either the web site or the apps, please contact <strong><a href="mailto:e-bongo@live.com">e-bongo@live.com</a></strong> or through our <strong><a href="https://www.facebook.com/bongo.org/">Facebook page</a></strong>. You can also find information about each agency below:</p>
        <h3 class="title is-3 is-spaced">Coralville Transit</h3>
        <div class="list">
          <li class="list-item"><a href="tel:13192481790">319-248-1790</a></li>
          <li class="list-item"><a href="http://www.coralville.org/index.aspx?nid=80">Web Site</a></li>
        </div>
        <h3 class="title is-3 is-spaced">CAMBUS</h3>
        <div class="list">
          <li class="list-item"><a href="tel:13193358633">319-335-8633</a></li>
          <li class="list-item"><a href="https://transportation.uiowa.edu/cambus">Web Site</a></li>
        </div>
        <h3 class="title is-3">Iowa City Transit</h3>
        <div class="list">
          <li class="list-item"><a href="tel:13193565151">319-356-5151</a></li>
          <li class="list-item"><a href="http://www.icgov.org/?id=1515">Web Site</a></li>
        </div>
        <h2 class="title is-2 is-spaced">How does Bongo work?</h2>
        <p class="subtitle">Bongo utilizes GPS technology and computer modeling to track vehicles on their routes and predict arrival times. Each vehicle is equipped with a GPS tracking system that reports latitude and longitude to a satellite every 15 seconds.</p>
        <p class="subtitle">The satellite then transfers the information to a data center which locates the bus on a map and then, using historical averages, it calculates the predicted arrival times for every stop on the route.</p>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style lang="scss" scoped>

</style>
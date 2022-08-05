export default {
    props: ['timePeriod', 'institution', 'degree', 'location'],
    template: `
    <li>
        <div class="education-time-span">
            <span>{{ timePeriod }}</span>
            <div class="education-address">
                <a v-bind:href=" location.googleMapsURL ">
                    <span class="material-symbols-outlined education-location-icon">
                        location_on
                    </span><span>{{ location.placename }}</span>
                </a>
            </div>
        </div>
        <div class="education-details">
            <h3>{{ institution }}</h3>


            <span>{{ degree }}</span>
        </div>
    </li>
    `
}
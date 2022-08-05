export default {
    props: ['timePeriod', 'company', 'description'],
    template: `
    <li>
        <div class="work-time-span">
            <span>{{ timePeriod }}</span>
        </div>
        <div class="work-details">
            <h3>{{ company }}</h3>
            <span>{{ description }}</span>
        </div>
    </li>
    `
}
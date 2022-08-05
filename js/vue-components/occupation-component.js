import OccupationDetailComponent from './occupation-detail-component.js'

export default {
    components: {
        OccupationDetailComponent
    },
    props: ['title', 'occupations'],
    template: `
    <section class="work">
        <h2> {{ title }} </h2>
        <ul class="work-list">
            <OccupationDetailComponent
                v-for="occupation in occupations"
                v-bind="occupation"
            />
        </ul>
    </section>
    `
}
import EducationDetailComponent from './education-detail-component.js'

export default {
    components: {
        EducationDetailComponent
    },
    props: ['title', 'educations'],
    template: `
    <section class="education">
        <h2> {{ title }}</h2>
        <ul class="education-list">
            <EducationDetailComponent
                v-for="education in educations"
                v-bind="education"
            />
        </ul>
    </section>
    `
}
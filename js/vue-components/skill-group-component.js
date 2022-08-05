import SkillDetailComponent from './skill-detail-component.js'

export default {
    components: {
        SkillDetailComponent
    },
    props: ['title', 'skills'],
    template: `
    <h3> {{ title }}</h3>
    <ul class="skills-list">
        <SkillDetailComponent
            v-for="skill in skills"
            v-bind="skill"
        />
    </ul>
    `
}
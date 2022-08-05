import SkillGroupComponent from './skill-group-component.js'

export default {
    components: {
        SkillGroupComponent
    },
    props: ['title', 'groups'],
    template: `
    <section class="skills">
        <h2> {{ title }}</h2>
        <SkillGroupComponent
            v-for="group in groups"
            v-bind="group"
        />
    </section>
    `
}
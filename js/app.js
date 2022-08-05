import { createApp } from 'vue'
import AboutMeComponent from './vue-components/about-me-component.js'
import EducationComponent from './vue-components/education-component.js'
import OccupationComponent from './vue-components/occupation-component.js'
import SkillsCompenent from './vue-components/skills-component.js'
import CertificatesComponent from './vue-components/certificates-component.js'
import { data } from './data.js'

const app = createApp({
    data() {
        return {
            data: data
        }
    },
    template: `
    <AboutMeComponent v-bind="data.aboutMe" />
    <EducationComponent v-bind="data.education" />
    <OccupationComponent v-bind="data.occupation" />
    <SkillsCompenent v-bind="data.skills" />
    <CertificatesComponent v-bind="data.certificates" />
    `
})


app.component('AboutMeComponent', AboutMeComponent)
app.component('EducationComponent', EducationComponent)
app.component('OccupationComponent', OccupationComponent)
app.component('SkillsCompenent', SkillsCompenent)
app.component('CertificatesComponent', CertificatesComponent)


app.mount("#app")


import CertificatesGroupComponent from "./certificates-institution-component.js"

export default {
    components: {
        CertificatesGroupComponent
    },
    props: ['title', 'institutions'],
    template: `
    <section class="certificates">
        <h2> {{ title }}</h2>
        <CertificatesGroupComponent
            v-for="institution in institutions"
            v-bind="institution"
        />
    </section>
    `
}
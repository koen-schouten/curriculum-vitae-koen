import CertificatesGroupComponent from './certificates-group-component.js'

export default {
    components: {
        CertificatesGroupComponent
    },
    props: ['title', 'documents', 'groups'],
    template: `
    <h3>{{ title }}</h3>
    <CertificatesGroupComponent
        v-for="group in groups"
        v-bind="group"
        />
        
    <ul>
        <li v-for="document in documents">
            <a v-bind:href="document.url" >{{ document.title }}</a>
        </li>
    </ul>

    `
}
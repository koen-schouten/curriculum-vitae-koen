
export default {
    props: ['title', 'courses', 'documents'],
    template: `
    <h4>{{ title }}</h4>
    <ul class="skills-list">
        <li v-for="course in courses">
            <span>
                <a v-if="course.certificateURL" v-bind:href="course.certificateURL">{{ course.title }}</a>
                <span v-else>{{ course.title }}</span>
            </span>
            <span>{{ course.result }}</span>
        </li>
    </ul>

    <ul>
        <li v-for="document in documents">
            <a v-bind:href="document.url" >{{ document.title }}</a>
        </li>
    </ul>
    `
}
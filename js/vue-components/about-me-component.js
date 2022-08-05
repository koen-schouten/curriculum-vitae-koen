export default {
    props: ['title', 'paragraphs'],
    template: `
    <section class="about-me">
    <h2> {{ title }}</h2>

    <p v-for="paragraph in paragraphs">
        <span v-html="paragraph"></span>
    </p>
    </section>
    `
}
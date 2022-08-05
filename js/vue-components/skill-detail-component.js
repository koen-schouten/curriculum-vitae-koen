export default {
    props: ['skillName', 'proficiency', 'proficiencyDescription'],
    template: `
    <li>
        <span>{{ skillName }}</span>
        <div>
            <div class="tooltip">
                <span>{{ proficiency }}</span>
                <span class="tooltiptext">
                    {{ proficiencyDescription }}
                </span>
            </div>
        </div>
    </li>
    `
}
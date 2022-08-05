export const data = {
    aboutMe : {
        title: "Over mij",
        paragraphs: [
            `Ik ben Koen Schouten en ik maak dingen. Ik heb veel plezier in het ontwerpen
            het maken van 3D-prints en alles wat met electronica te maken heeft, van het programmeren
            van kleine microcontrollers (zoals de arduino) en sensoren tot het bouwen van desktop computers.`,
    
            `Ik heb ervaring met het maken van websites met python als backend (Django/Flask) en javascript
            als frontend taal (Vue.js).
            Verder ben ik een grote datahoarder. Ik heb hierdoor ervaring met het maken van webscrapers en
            ben altijd opzoek naar open API's.
            Ik heb de ambitie om te verdiepen in Machine learning en AI maar met de huidige beschikbaarheid
            en prijzen van GPU's moet dat wachten
            tot later.`,
    
            `De broncode voor deze webpagina en eental andere projecten zijn terug te vinden op <a
            href="https://github.com/koen-schouten">mijn Github pagina.</a>`
        ]
    },
    education: {
        title: "Onderwijs",
        educations: [
            { 
                timePeriod: "2000 - 2008",
                institution: "Roncalli Scholengemeenschap",
                degree: "Atheneum: Natuur en Techniek",
                location: { 
                    placename : "Bergen op Zoom",
                    googleMapsURL : "https://www.google.com/maps/place/Roncalli+Scholengemeenschap/@51.502287,4.282189,17z/data=!3m1!4b1!4m5!3m4!1s0x47c46cbf00ac2621:0xb76cb86db5acd8ab!8m2!3d51.5022841!4d4.2861844"
                }
            },
            { 
                timePeriod: "2009 - 2014",
                institution: "Wageningen University & Research",
                degree: "BSc. Milieukunde",
                location: { 
                    placename : "Wageningen",
                    googleMapsURL : "https://www.google.com/maps/place/Wageningen+University+%26+Research/@51.9845591,5.6635809,17z/data=!3m1!4b1!4m5!3m4!1s0x47c7aca4708c1ffd:0x6698e5bd2cbbef70!8m2!3d51.9845558!4d5.6657696"
                }
            },
            { 
                timePeriod: "2017 - Heden",
                institution: "Open Universiteit",
                degree: "BSc. Informatica",
                location: { 
                    placename : "Utrecht",
                    googleMapsURL : "https://www.google.com/maps/place/open+University/@52.0777692,5.1149135,17.53z/data=!3m1!5s0x47c665f65811f2e9:0x36078766f2977625!4m5!3m4!1s0x47c665f64fbc6c03:0x9a566006bf8189e4!8m2!3d52.0779863!4d5.1155033"
                }
            },
        ]
    },
    occupation: {
        title: "Werk",
        occupations: [
            {
                timePeriod: "2000 - 2008",
                company: "PostNL",
                description: "Werkzaam als postbode bij PostNL."
            }
        ]
    },
    skills: {
        title: "Vaardigheden",

        groups: [
            {
                title: "Talen",
                skills : [
                    {
                        skillName: "Nederlands",
                        proficiency: "Expert",
                        proficiencyDescription: "Moedertaal."
                    },
                    {
                        skillName: "Engels",
                        proficiency: "Expert",
                        proficiencyDescription: "Geleerd."
                    }
                ]
            },

            {
                title: "Programmeertalen",
                skills : [
                    {
                        skillName: "Python",
                        proficiency: "Expert",
                        proficiencyDescription: "Moedertaal."
                    },
                    {
                        skillName: "Javascript",
                        proficiency: "Expert",
                        proficiencyDescription: "Geleerd."
                    },
                    {
                        skillName: "Java",
                        proficiency: "Expert",
                        proficiencyDescription: "Moedertaal."
                    },
                    {
                        skillName: "C#",
                        proficiency: "Expert",
                        proficiencyDescription: "Geleerd."
                    },
                    {
                        skillName: "C++",
                        proficiency: "Expert",
                        proficiencyDescription: "Moedertaal."
                    },
                    {
                        skillName: "SQL",
                        proficiency: "Expert",
                        proficiencyDescription: "Geleerd."
                    }
                ]
            },

            {
                title: "Libraries en Frameworks",
                skills : [
                    {
                        skillName: "Django",
                        proficiency: "Expert",
                        proficiencyDescription: "Moedertaal."
                    },
                    {
                        skillName: "Flask",
                        proficiency: "Expert",
                        proficiencyDescription: "Geleerd."
                    },
                    {
                        skillName: "Vue.js",
                        proficiency: "Expert",
                        proficiencyDescription: "Moedertaal."
                    },
                    {
                        skillName: "Numpy",
                        proficiency: "Expert",
                        proficiencyDescription: "Geleerd."
                    }
                ]
            },

            {
                title: "Software",
                skills : [
                    {
                        skillName: "Microsoft Office",
                        proficiency: "Expert",
                        proficiencyDescription: "Moedertaal."
                    },
                    {
                        skillName: "Windows",
                        proficiency: "Expert",
                        proficiencyDescription: "Geleerd."
                    },
                    {
                        skillName: "Linux",
                        proficiency: "Expert",
                        proficiencyDescription: "Moedertaal."
                    },
                    {
                        skillName: "Docker",
                        proficiency: "Expert",
                        proficiencyDescription: "Geleerd."
                    },
                    {
                        skillName: "Git",
                        proficiency: "Expert",
                        proficiencyDescription: "Geleerd."
                    }
                ]
            },
        ]
    },

    certificates:{
        title: "Certificaten",
        institutions: [
            {
                title: "Middelbare School",
                documents: [
                    {
                        title: "Diploma",
                        url: "./images/certificates/HighSchoolDegree.jpg",
                    },

                    {
                        title: "Cijferlijst",
                        url: "./images/certificates/HighSchoolGrades.jpg",
                    },
                ]
            },

            {
                title: "Open Universiteit",
                groups: [
                    {
                        title: "Propedeuse",
                        documents: [
                            {
                                title: "Getuigschrift",
                                url: "./images/certificates/GetuigschrijfPropeuse.jpg",
                            },
        
                            {
                                title: "Cijferlijst",
                                url: "./images/certificates/CijferlijstPropedeuse.jpg",
                            },
                        ],
                        courses: [
                            {
                                title: "Inleiding Informatica",
                                result: 9,
                                certificateURL: ""
                            },
                            {
                                title: "Inleiding Informatiekunde",
                                result: 8,
                                certificateURL: ""
                            },
                            {
                                title: "Relationele databases",
                                result: 9,
                                certificateURL: ""
                            },
                            {
                                title: "Logica, verzamelingen en relaties",
                                result: 7,
                                certificateURL: ""
                            },
                            {
                                title: "Model driven development",
                                result: 7,
                                certificateURL: ""
                            },
                            {
                                title: "Lineare algebra en stochastiek",
                                result: 8,
                                certificateURL: ""
                            },
                            {
                                title: "Formele talen en automaten",
                                result: 8,
                                certificateURL: ""
                            },
                            {
                                title: "Practicum ontwerpen en implementeren",
                                result: 8,
                                certificateURL: ""
                            },
                            {
                                title: "De werking van computersystemen",
                                result: 8,
                                certificateURL: ""
                            },
                            {
                                title: "Objectgeorienteerd programmeren in Java 1",
                                result: 7,
                                certificateURL: ""
                            },
                            {
                                title: "Objectgeorienteerd analyseren en ontwerpen",
                                result: 7,
                                certificateURL: ""
                            },
                            {
                                title: "Communicatietechnologie",
                                result: 7,
                                certificateURL: ""
                            },
                            {
                                title: "Objectgeorienteerd programmeren in Java 2",
                                result: 7,
                                certificateURL: ""
                            },
                        ]
                    },

                    {
                        title: "Postpropedeuse",
                        courses: [
                            {
                                title: "Onderzoekspracticum inleiding data analyse" ,
                                result: 9,
                                certificateURL: "./images/certificates/Mb2ND8T2CK1fgWMba7daBRJA.jpg"
                            },
                            {
                                title: "Security en IT" ,
                                result: 6,
                                certificateURL: "./images/certificates/fPCt97FND2eahref22856fU3.jpg"
                            },
                            {
                                title: "AppLab" ,
                                result: 7,
                                certificateURL: "./images/certificates/C6HED6NHeh933JWBa4tE0V2L.jpg"
                            },
                            {
                                title: "Management accounting" ,
                                result: 7,
                                certificateURL: "./images/certificates/5YFf73UDYF6HfTHQR4Vb8FEX.jpg"
                            },
                            {
                                title: "Business analytics" ,
                                result: 6,
                                certificateURL: "./images/certificates/CbT2fYF0NQeE4M6y618de273.jpg"
                            },
                            {
                                title: "Kwaliteits en processmanagement" ,
                                result: 6,
                                certificateURL: "./images/certificates/AT4RJL0E1Lya3f2eX5FKStPW.jpg"
                            },
                            {
                                title: "Besturingssystemen" ,
                                result: 9,
                                certificateURL: "./images/certificates/36M0WWyCHrQ6Rr7hKEe5gAE5.jpg"
                            },
                            {
                                title: "Kunstmatige intelligentie" ,
                                result: 8,
                                certificateURL: "./images/certificates/XXWHJKHNW4P3YtW7681D8fE3.jpg"
                            },
                            {
                                title: "Datastructuren en algoritmen" ,
                                result: 8,
                                certificateURL: "./images/certificates/E4dSLUWtfY2MPhFWC6yXPJRP.jpg"
                            },
                            {
                                title: "Webapplicaties: de serverkant" ,
                                result: 8,
                                certificateURL: "./images/certificates/2WdyKaCERNYJE9Ug9CLafLhS.jpg"
                            },
                            {
                                title: "Webapplicaties: de clientkant" ,
                                result: 8,
                                certificateURL: "./images/certificates/SUTVC67QfdBFhd9a3eB56HXQ.jpg"
                            },
                            {
                                title: "Logica en Informatica" ,
                                result: 7,
                                certificateURL: "./images/certificates/F3VRNMVVBD5bQhHgKAf2MbaS.jpg"
                            },
                            {
                                title: "Programmeerpracticum" ,
                                result: 8,
                                certificateURL: "./images/certificates/Mh6HbMXUTh45bUK3b47RC4UA.jpg"
                            },
                            {
                                title: "Practicum ontwerpen en implementeren" ,
                                result: 8,
                                certificateURL: "./images/certificates/dJ1Jef5RC8eaL5Ba28f70dg8.jpg"
                            },
                            {
                                title: "Functioneel programmeren" ,
                                result: 8,
                                certificateURL: "./images/certificates/SVMgY6920EWQrKQEb4D4gB3F.jpg"
                            },
                            {
                                title: "XML: theorie en toepassingen" ,
                                result: 8,
                                certificateURL: "./images/certificates/CT9XSbR8HAfF6D6t66JWbtfE.jpg"
                            },
                        ]
                    },
                ]
            },

            {
                title: "Overig",
                documents: [
                    {
                        title: "Rijbewijs B",
                    }
                ]
            },
        ]
    }


}
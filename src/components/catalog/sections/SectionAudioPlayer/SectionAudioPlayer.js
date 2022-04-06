import React from 'react'

const SectionAudioPlayer = () => {
    const contents = [
        {
            title: 'Bab 1',
            slug: 'bab-1',
            lessons: [
                {
                    title: 'Audio 1'
                },
                {
                    title: 'Audio 2'
                },
                {
                    title: 'Audio 3'
                },
            ]
        },
        {
            title: 'Bab 2',
            slug: 'bab-2',
            lessons: [
                {
                    title: 'Audio 4'
                },
                {
                    title: 'Audio 5'
                },
                {
                    title: 'Audio 6'
                },
                {
                    title: 'Audio 12'
                },
            ]
        },
        {
            title: 'Bab 3',
            slug: 'bab-3',
            lessons: [
                {
                    title: 'Audio 7'
                },
                {
                    title: 'Audio 8'
                },
                // {
                //     title: 'Audio 9'
                // },
            ]
        },
    ]
    return (
        <section id="audioPlayer">
            <div className="container p-3">
                <h4>Pemutar Audio</h4>
                <nav className="mt-3">
                    <div class="nav nav-tabs" id="nav-tab" role="tablist">
                        {
                            contents.map((content, index) => {
                                return (
                                    <button key={index} class={`nav-link text-muted ${index == 0 && 'active'}`} id={`${content.slug}-tab`} data-bs-toggle="tab" data-bs-target={`#nav-${content.slug}`} type="button" role="tab" aria-controls={`nav-${content.slug}`} aria-selected="true">{content.title}</button>
                                )
                            })
                        }
                        {/* <button class="nav-link text-muted" id="nav-profile-tab" data-bs-toggle="tab" data-bs-target="#nav-profile" type="button" role="tab" aria-controls="nav-profile">Profile</button>
                        <button class="nav-link text-muted" id="nav-contact-tab" data-bs-toggle="tab" data-bs-target="#nav-contact" type="button" role="tab" aria-controls="nav-contact">Contact</button> */}
                    </div>
                </nav>
                <div class="tab-content" id="nav-tabContent">
                    {
                        contents.map((content, index) => {
                            return (
                                <div key={index} class="tab-pane fade show active" id={`#nav-${content.slug}`} role="tabpanel" aria-labelledby={`${content.slug}-tab`}>
                                    {
                                        content.lessons.map((lesson) => {
                                            return (
                                                <div>{content.title}</div>
                                            )
                                        })
                                    }
                                </div>
                            )
                        })
                    }
                </div>

            </div>
        </section>
    )
}

export default SectionAudioPlayer
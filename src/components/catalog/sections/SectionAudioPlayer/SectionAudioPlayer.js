import React from 'react'
import ReactAudioPlayer from 'react-audio-player';

const SectionAudioPlayer = ({ audio }) => {

    let number = 1

    return (
        <section id="audioPlayer">
            <div className="container p-3">
                <h4>Pemutar Audio</h4>
                <table className='table table-hover'>
                    <thead className="bg-light">
                        <tr>
                            <th>NO</th>
                            <th>AUDIO</th>
                            <th>JUDUL</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            audio.map((item, index) => {
                                return (
                                    <tr key={index}>
                                        <td width="8%">{number++}</td>
                                        <td width="40%" className='p-0 pt-1'>
                                            <ReactAudioPlayer
                                                className='w-100 bg-transparent'
                                                src={item.attachment} controls
                                            />
                                        </td>
                                        <td>{item.title}</td>
                                    </tr>

                                )
                            })
                        }
                    </tbody>
                </table>

            </div>
        </section >
    )
}

export default SectionAudioPlayer
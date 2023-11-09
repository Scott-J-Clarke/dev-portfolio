import scottResume from '../public/scott-resume-for-portfolio.pdf';
import { BsCloudDownload } from 'react-icons/bs';

// All the styling below is done in Bootstrap (not Tailwind!):
function Resume() {
    return (
        <div>
            <section className='download-resume'>
                <div className='flex flex-row'> {/* Tailwind syntax: 'flex flex-row' */}
                    <h2 className='border-2'>My Resume</h2>
                </div>

                <div className='flex flex-row'>
                    <div className='download-info'>
                        <div className='download-text'>
                            Download my resume <br/>
                            <a href={scottResume} className='download-logo' download>
                                <BsCloudDownload />
                            </a>
                        </div>
                    </div>
                </div>
            </section>

            <section id='home-page-body' className='resume-body'>
                <div className='article column1'>
                    <p className='column-title'>Front-End Tech</p>
                    <p className='column-text'>
                        <ul>
                            <li>React</li>
                            <li>HTML</li>
                            <li>JavaScript</li>
                            <li>Tailwind</li>
                            <li>CSS</li>
                        </ul>
                    </p>
                </div>

                <div className='article column2'>
                    <p className='column-title'>Back-End Tech</p>
                    <p className='column-text'>
                        <ul>
                            <li>Node</li>
                            <li>MongoDB</li>
                            <li>GraphQL</li>
                            <li>MySQL</li>
                            <li>Express</li>
                        </ul>
                    </p>
                </div>
            </section>
        </div>
    )
}

export default Resume;

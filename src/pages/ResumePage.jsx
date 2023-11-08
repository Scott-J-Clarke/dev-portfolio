import scottResume from '../public/scott-resume-for-portfolio.pdf';
import { BsCloudDownload } from 'react-icons/bs';

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
        </div>
    )
}

export default Resume;
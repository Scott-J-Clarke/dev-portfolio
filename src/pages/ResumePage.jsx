import scottResume from '../public/scott-resume-for-portfolio.pdf';
import { BsCloudDownload } from 'react-icons/bs';

function Resume() {
    return (
        <div>
            <section className='bg-gray-500 text-white m-5 mx-64 p-4 text-center'>
                <div className='flex flex-wrap'>
                    <div className='w-full md:w-1/2 lg:w-1/2 xl:w-1/2 mb-4'>
                        <div className='article'>
                            <p className='text-2xl font-semibold mb-4'>Front-End Knowledge</p>
                            <p className='list-disc pl-4'>
                                <ul>
                                    <li>React</li>
                                    <li>HTML</li>
                                    <li>JavaScript</li>
                                    <li>Tailwind</li>
                                    <li>CSS</li>
                                </ul>
                            </p>
                        </div>
                    </div>
                
                    <div className='w-full md:w-1/2 lg:w-1/2 xl:w-1/2 mb-4'>
                        <div className='article'>
                            <p className='text-2xl font-semibold mb-4'>Back-End Knowledge</p>
                            <p className='list-disc pl-4'>
                                <ul>
                                    <li>Node</li>
                                    <li>MongoDB</li>
                                    <li>GraphQL</li>
                                    <li>MySQL</li>
                                    <li>Express</li>
                                </ul>
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <section className='bg-gray-500 text-white m-5 mx-64 p-4 flex justify-center items-center'>
                <div className='flex flex-row'>
                    <div>
                        <div className='flex flex-row text-white'>
                            <a href={scottResume} className='flex items-center'>
                                Download my resume 
                                <BsCloudDownload className='ml-2' />
                            </a>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Resume;

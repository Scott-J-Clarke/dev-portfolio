import { BsGithub, BsLinkedin } from 'react-icons/bs';

function Footer() {
    return (
        <footer className='flex flex-row justify-center items-center p-5'>
            <ul className='flex space-x-16'>
                <a href='https://github.com/Scott-J-Clarke' className='text-gray-500 hover:text-gray-700'>
                    Scott's GitHub:
                    <li className='flex flex-col items-center'>
                        <BsGithub className='text-4xl mt-2' />
                    </li>
                </a>

                <a href='https://www.linkedin.com/in/scottjcclarke/' className='text-gray-500 hover:text-gray-700'>
                    Scott's LinkedIn:
                    <li className='flex flex-col items-center'>
                        <BsLinkedin className='text-4xl mt-2' />
                    </li>
                </a>
            </ul>
        </footer>
    );
}

export default Footer;

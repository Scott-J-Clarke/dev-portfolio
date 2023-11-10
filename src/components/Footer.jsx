import { BsGithub } from 'react-icons/bs';
import { BsLinkedin } from 'react-icons/bs';

function Footer() {
    return (
        <footer className='p-5'>
            <h2>Made by Scott Clarke</h2>
            <p>
                <ul>
                    <a href='https://github.com/Scott-J-Clarke'>
                        <li className='logo'>
                            <BsGithub />
                        </li>
                    </a>

                    <a href='https://www.linkedin.com/in/scottjcclarke/'>
                        <li className='logo'>
                            <BsLinkedin />
                        </li>
                    </a>
                </ul>
            </p>
        </footer>
    );
}

export default Footer;

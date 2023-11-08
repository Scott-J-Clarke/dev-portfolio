import dailyDose from '../public/dose-of-tech-image.jpg';
import noteTaker from '../public/note-taker-image.jpg';
import logoGen from '../public/logo-generator-image.jpg';
import whatsWeather from '../public/whats-the-weather-image.jpg';
import workingCalendar from '../public/working-day-calendar-image.jpg';
import socialNetwork from '../public/social-network.jpg';

const data = [
    {
        id: 1,
        image: dailyDose,
        title: 'Daily Dose of Tech',
        github: 'https://github.com/Scott-J-Clarke/groovy-tech-blog-v2',
        demo: 'https://groovy-tech-blog-v2-9abbdd8362ed.herokuapp.com/'
    },
    {
        id: 2, 
        image: noteTaker,
        title: 'Note Taker',
        github: 'https://github.com/Scott-J-Clarke/note-taker-version-2',
        demo: 'https://note-taker-version-2-2379b1830cc5.herokuapp.com/'
    },
    {
        id: 3,
        image: logoGen,
        title: 'Logo Generator',
        github: 'https://github.com/Scott-J-Clarke/logo-generator',
        demo: 'https://drive.google.com/file/d/197MDinnTdWoEL5JG8Df7xWh78L4T5gFl/view'
    },
    {
        id: 4,
        image: whatsWeather,
        title: 'What\'s the Weather?',
        github: 'https://github.com/Scott-J-Clarke/whats-the-weather',
        demo: 'https://scott-j-clarke.github.io/whats-the-weather/'
    },
    {
        id: 5,
        image: workingCalendar,
        title: 'Working Day Calendar',
        github: 'https://github.com/Scott-J-Clarke/working-day-calendar',
        demo: 'https://scott-j-clarke.github.io/working-day-calendar/'
    },
    {
        id: 6,
        image: socialNetwork,  
        title: 'Social Network API',
        github: 'https://github.com/Scott-J-Clarke/social-network-api',
        demo: 'https://drive.google.com/file/d/1UhdnLTr8d0vJlzlMpsA-2ZSRM5IIvZ1i/view'
    }
]

function PortfolioPage() {
    return (
        <section id='portfolio'>
            <h5>My Recent Work</h5>
            <h2>Portfolio</h2>

            <div className='container portfolio_container'>
                {data.map(({ id, image, title, github, demo }) => {
                    return (
                        <article key={id} className='portfolio_item'>
                            <div className='portfolio_item-image'>
                                <img src={image} style={{ width: '15%' }} alt={title} />
                            </div>
                            <h3>{title}</h3>
                            <div className='portfolio_item-cta'>
                                <a
                                    href={github}
                                    className='btn'
                                    target='_blank'
                                >
                                    GitHub
                                </a>
                                <a
                                    href={demo}
                                    className='btn btn-primary'
                                    target='_blank'
                                >
                                    Live Site
                                </a>
                            </div>
                        </article>
                    );
                })}
            </div>
        </section>
    );
}

export default PortfolioPage;

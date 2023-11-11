import Project from '../components/Project';

import dailyDose from '../public/dose-of-tech-image.jpg';
import noteTaker from '../public/note-taker-image.jpg';
import logoGen from '../public/logo-generator-image.jpg';
import whatsWeather from '../public/whats-the-weather-image.jpg';
import workingCalendar from '../public/working-day-calendar-image.jpg';
import socialNetwork from '../public/social-network.jpg';

const projects = [
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
        <div>
            {projects.map(project => (
                <Project
                    key={project.id}
                    image={project.image}
                    title={project.title}
                    github={project.github}
                    demo={project.demo}
                />
            ))}
        </div>
    );
}

export default PortfolioPage;

import { Project } from '../components/Project';
import { projects } from '../../utils/helpers';

function PortfolioPage() {
    return (
        <section>
            <div className='portfolioHeading'>
                <h1>Recent Projects:</h1>
            </div>
            <hr />

            <div className='container'>
                {projects.map(project => <Project {...project} />)}
            </div>
        </section>
        
    );
}

export default PortfolioPage;

{/* <section id='portfolio'>
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
        </section> */}

function Project({ image, title, github, demo}) {
    return (
        <div className='card'>
            <div className='cardBody'>
                <img src={require('../public' + image)} className='card-img-top' />
                <h5 className='card-title'>{title}</h5>
                <a href={github} className='card-link'>GitHub Repository</a>
                <a href={demo} className='card=link'>Deployed Project</a>
            </div>
        </div>
    )
}

export default Project;

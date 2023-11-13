/* eslint-disable react/prop-types */
function Project({ image, title, github, demo }) {
    return (
        <div>
            <div className='aspect-w-4 aspect-h-3'>
                <h5>{title}</h5>
                <img 
                    src={image} 
                    alt='project image'
                />
                <a href={github}>GitHub Repository</a>
                <a href={demo}>Deployed Project</a>
            </div>
        </div>
    )
}

export default Project;

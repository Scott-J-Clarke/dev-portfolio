/* eslint-disable react/prop-types */
function Project({ image, title, github, demo }) {
    return (
        <div>
            <h5 className='font-semibold'>{title}</h5>
                <div className='aspect-w-4 aspect-h-3'>
                    <img 
                        src={image} 
                        alt='project image'
                    />
                </div>
                <div className='italic flex justify-between'>
                    <a href={github}>GitHub Repository</a>
                    <a href={demo}>Demo</a>
                </div>
        </div>
    )
}

export default Project;

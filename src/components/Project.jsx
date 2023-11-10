function Project({ image, title, github, demo }) {
    return (
        <div>
            <div>
                <img src={image} />
                <h5>{title}</h5>
                <a href={github}>GitHub Repository</a>
                <a href={demo}>Deployed Project</a>
            </div>
        </div>
    )
}

export default Project;

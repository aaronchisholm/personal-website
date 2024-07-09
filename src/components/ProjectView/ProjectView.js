

const ProjectView = ({project}) => {
    return (
        <div className='container'>
            <h2>{project.title}</h2>
            <h5 className=''>{project.date}</h5>
            <img className='w-100' src='post.imageSrc' alt='No content yet for this project!'></img>
            <p>{project.body}</p>
        </div>
    )
}

export default ProjectView;
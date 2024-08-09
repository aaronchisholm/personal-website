const BlogPostView = ({post}) => {
    return (
        <div className='container'>
            <h2>{post.title}</h2>
            <h5 className=''>{post.date}</h5>
            <img className='w-100' src={post.imageSrc} alt='No content yet for this post!'></img>
            {post.body.map((p) => {
                return(<p>{p}</p>)
            })}
        </div>
    )
}

export default BlogPostView;
import React from 'react';
import BlogPostCard from '../BlogPostCard/BlogPostCard';
//import findBlogPosts from '../../services/blog/blog-service';

const Blog= ({posts = []}) => {

    //posts = get posts from the database

    return (
        <div className='row container mx-5 py-4'>
            <h1 className=''> Blog Posts </h1>
            {posts.map((post) => {
                return (
                    <div className='row'>
                        {<BlogPostCard post={post}></BlogPostCard>}
                    </div>
                )
            })

            }
        </div>
    )
};

export default Blog;
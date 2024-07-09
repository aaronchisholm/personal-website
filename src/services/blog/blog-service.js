import axios from 'axios';
const BLOG_POST_API = 'http://localhost:4000/api/blog-posts';

export const createBlogPost = async (blogPost) => {
    const response = await axios.post(BLOG_POST_API, blogPost);
    return response.data;
}

export const findBlogPosts  = async () => {
    const response = await axios.get(BLOG_POST_API);
    const blogPosts = response.data;
    return blogPosts;
}

export const deleteBlogPost = async (postid) => {
    const response = await axios.delete(`${BLOG_POST_API}/${postid}`);
    return response.data;
}

export const updateBlogPost = async (blogPost) => {
    const response = await axios.put(`${BLOG_POST_API}/${blogPost._id}`, blogPost);
    return response.data;
}
import {createAsyncThunk}
  from "@reduxjs/toolkit"
import * as service
  from "./blog-service"

export const findBlogPostsThunk = createAsyncThunk(
  'blog/findBlogPosts', async () =>
    await service.findBlogPosts()
)

export const deleteBlogPostThunk = createAsyncThunk(
  'blog/deleteBlogPost',
  async (blogPostId) => {
    await service.deleteBlogPost(blogPostId)
    return blogPostId
})

export const updateBlogPostThunk = createAsyncThunk(
  'blog/updateBlogPost',
  async (blogPost) => 
    await service.updateBlogPost(blogPost)
)

export const createBlogPostThunk = createAsyncThunk(
  'blog/updateBlogPost',
  async (blogPost) => {
    const newBlogPost = await service.createBlogPost(blogPost)
    return newBlogPost
  }
)

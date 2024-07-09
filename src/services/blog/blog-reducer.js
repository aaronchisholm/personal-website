import {createSlice}
  from "@reduxjs/toolkit";
import {findBlogPostsThunk}
  from "./blog-thunks";

const initialState = {
   tuits: [],
   loading: false
}

const blogPostsSlice = createSlice({
 name: 'blogPosts',
 initialState,
 extraReducers: {
   [findBlogPostsThunk.pending]:
      (state) => {
         state.loading = true
         state.tuits = []
   },
   [findBlogPostsThunk.fulfilled]:
      (state, { payload }) => {
         state.loading = false
         state.tuits = payload
   },
   [findBlogPostsThunk.rejected]:
      (state, action) => {
         state.loading = false
         state.error = action.error
   }
 },
 reducers: { }
});

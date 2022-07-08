import React from 'react'
import Post from '../post/Post'
import PostShare from '../postShare/PostShare'
import './PostSide.css'

const PostSide = () => {
  return (
    <div className='PostSide'>
      <PostShare />
      <Post />
    </div>
  )
}

export default PostSide

import React from 'react'
import './PostShare.css'
import ProfileImage from '../../img/profileImg.jpg'

const PostShare = () => {
  return (
    <div className='PostShare'>
      <img src={ProfileImage} alt="Profile" />
      <div className="Share">Share a post</div>
    </div>
  )
}

export default PostShare

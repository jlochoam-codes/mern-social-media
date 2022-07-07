import React from 'react'
import './PostShare.css'
import ProfileImage from '../../img/profileImg.jpg'
import {
  UilScenery,
  UilPlayCircle,
  UilLocationPoint,
  UilSchedule
} from '@iconscout/react-unicons';

const PostShare = () => {
  return (
    <div className="PostShare">
      <img src={ProfileImage} alt="Profile" />
      <div className="CreatePost">
        <div className="postText">
          <input type="text"
            name="postBar"
            placeholder="Say it to the world!" />
        </div>
        <div className="postOptions">
          <div className="option" style={{ color: "var(--photo)" }}>
            <UilScenery />
            <span className="description">Photo</span>
          </div>
          <div className="option" style={{ color: "var(--video)" }}>
            <UilPlayCircle />
            <span className="description">Video</span>
          </div>
          <div className="option" style={{ color: "var(--location)" }}>
            <UilLocationPoint />
            <span className="description">Location</span>
          </div>
          <div className="option" style={{ color: "var(--schedule)" }}>
            <UilSchedule />
            <span className="description">Schedule</span>
          </div>
          <div className="submitPost">
            <input type="button" value="Share" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default PostShare

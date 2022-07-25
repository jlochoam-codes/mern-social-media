import React, { useState, useRef } from 'react'
import './PostShare.css'
import { ProfileData } from '../../Data/ProfileData';
import {
  UilScenery,
  UilLocationPoint,
  UilSchedule,
  UilTimes
} from '@iconscout/react-unicons';

const PostShare = () => {
  const [image, setImage] = useState(null);
  const imageRef = useRef();

  const onImageChange = event => {
    if (event.target.files && event.target.files[0]) {
      let img = event.target.files[0];
      setImage({
        image: URL.createObjectURL(img)
      });
    }
  }

  const cancelImagePost = () => {
    setImage(null);
  }

  return (
    <div className="PostShare">
      <img src={ProfileData.profileImage} alt="Profile" />
      <div className="CreatePost">
        <div className="postText">
          <input type="text"
            name="postBar"
            placeholder="Say it to the world!" />
        </div>
        <div className="postOptions">
          <div className="option" style={{ color: "var(--photo)" }}
            onClick={() => imageRef.current.click()}
          >
            <UilScenery />
            <span className="description">Photo</span>
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
          <div style={{ display: "none" }}>
            <input
              type="file"
              name="myImage"
              accept="image/*"
              ref={imageRef}
              onChange={onImageChange}
            />
          </div>
        </div>
        {image && (
          <div className="previewImage">
            <span onClick={cancelImagePost}>
              <UilTimes />
            </span>
            <img src={image.image} alt="For new post" />
          </div>
        )}
      </div>
    </div>
  )
}

export default PostShare

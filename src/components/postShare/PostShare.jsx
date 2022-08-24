import React, { useState, useRef } from 'react'
import './PostShare.css'
import { ProfileData } from '../../Data/ProfileData';
import {
  UilScenery,
  UilLocationPoint,
  UilSchedule,
  UilTimes
} from '@iconscout/react-unicons';
import { useDispatch, useSelector } from 'react-redux';
import { uploadImage } from '../../actions/ImageActions';

const PostShare = () => {
  const [image, setImage] = useState(null);
  const imageRef = useRef();
  const [description, setDescription] = useState('');
  const { user } = useSelector(state => state.authReducer.authData);
  const dispatch = useDispatch();

  const onImageChange = event => {
    if (event.target.files && event.target.files[0]) {
      let img = event.target.files[0];
      setImage(img);
    }
  }

  const onDescriptionChange = e => {
    setDescription(e.target.value);
  }

  const cancelImagePost = () => {
    setImage(null);
  }

  const handleSubmit = event => {
    event.preventDefault();
    const newPost = {
      userId: user._id,
      desc: description,
      likes: []
    };
    if (image) {
      const data = new FormData();
      const fileName = Date.now() + image.name;
      data.append("name", fileName);
      data.append("file", image);
      newPost.image = fileName;
      // For simplicity, the images will be stored in the server's local storage
      try {
        dispatch(uploadImage(data));
      } catch (err) {
        console.error(err);
      }
    }
  }

  return (
    <div className="PostShare">
      <img src={ProfileData.profileImage} alt="Profile" />
      <div className="CreatePost">
        <div className="postText">
          <input type="text"
            required
            name="postDescriptionBar"
            placeholder="Say it to the world!"
            onChange={onDescriptionChange} />
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
            <button type="submit" onClick={handleSubmit}>Share</button>
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
            <img src={URL.createObjectURL(image)} alt="For new post" />
          </div>
        )}
      </div>
    </div>
  )
}

export default PostShare

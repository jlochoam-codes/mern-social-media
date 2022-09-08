import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import './ProfileCard.css';

const ProfileCard = ({ location }) => {
  const { user } = useSelector(state => state.userReducer.userData);
  const serverPublicImgs = process.env.REACT_APP_PUBLIC_FOLDER;

  return (
    <div className='profileCard'>

      <div className='profileImages'>
        <img src={
          serverPublicImgs + (user.coverPicture ? user.coverPicture : "noCoverPicture.jpg")
        } alt="cover" />
        <img src={
          serverPublicImgs + (user.profilePicture ? user.profilePicture : "noProfilePicture.jpg")
        } alt="profile" />
      </div>

      <div className="profileName">
        <span>{user.firstName} {user.lastName}</span>
        <span>@{user.username}</span>
      </div>

      <div className="followStatus">
        <hr />
        <div>
          <div className="followers">
            <span>{user.followers.length}</span>
            <span>Followers</span>
          </div>
          <div className="verticalLine" />
          <div className="followings">
            <span>{user.following.length}</span>
            <span>Followings</span>
          </div>
        </div>
        <hr />
      </div>
      {
        location !== "Profile" &&
        <span>
          <Link to="/profile" style={{ "textDecoration": "none", "color": "inherit" }}>
            My Profile
          </Link>
        </span>
      }
    </div>
  )
}

export default ProfileCard

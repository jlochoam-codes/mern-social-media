import React, { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'
import ProfileModal from '../ProfileModal/ProfileModal'
import { UilPen } from '@iconscout/react-unicons'
import './ProfileInfo.css'
import * as userApi from '../../api/UserReqs'

const ProfileInfo = () => {
  const { user } = useSelector(state => state.userReducer.userData);
  const [userData, setUserData] = useState({});
  const [modalOpened, setModalOpened] = useState(false);

  useEffect(() => {
    const fetchUserInfo = async () => {
      try {
        const { data } = await userApi.getUser(user._id);
        setUserData(data);
      } catch (err) {
        console.error(err);
      }
    };
    fetchUserInfo();
  }, [modalOpened]);

  return (
    <div className='ProfileInfo'>
      <div className="ProfileInfoHeader">
        <span className='ProfileInfoTitle'>Your info</span>
        <span className='ProfileInfoEditBtn'>
          <UilPen size="1.5rem" onClick={() => setModalOpened(true)} />
          <ProfileModal opened={modalOpened} setOpened={setModalOpened} />
        </span>
      </div>
      <div className="ProfileInfoForm">
        <div className="ProfileInfoField">
          <span>Name </span>
          <span>{userData.firstName} {userData.lastName}</span>
        </div>
        <div className="ProfileInfoField">
          <span>Marital status </span>
          <span>{userData.maritalStatus}</span>
        </div>
        <div className="ProfileInfoField">
          <span>Lives in </span>
          <span>{userData.city}</span>
        </div>
        <div className="ProfileInfoField">
          <span>Works as </span>
          <span>{userData.company}</span>
        </div>
      </div>
      <div className="LogOut">
        <input type="button" value="Log out" />
      </div>
    </div>
  )
}

export default ProfileInfo

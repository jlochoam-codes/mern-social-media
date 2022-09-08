import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import ProfileModal from '../ProfileModal/ProfileModal'
import { UilPen } from '@iconscout/react-unicons'
import './ProfileInfo.css'

const ProfileInfo = () => {
  const { user } = useSelector(state => state.userReducer.userData);
  const [modalOpened, setModalOpened] = useState(false);

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
          <span>{user.firstName} {user.lastName}</span>
        </div>
        <div className="ProfileInfoField">
          <span>Marital status </span>
          <span>{user.maritalStatus}</span>
        </div>
        <div className="ProfileInfoField">
          <span>Lives in </span>
          <span>{user.city}</span>
        </div>
        <div className="ProfileInfoField">
          <span>Works as </span>
          <span>{user.job}</span>
        </div>
      </div>
      <div className="LogOut">
        <input type="button" value="Log out" />
      </div>
    </div>
  )
}

export default ProfileInfo

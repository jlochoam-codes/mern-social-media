import React from 'react'
import ProfileCard from '../../components/profileCard/ProfileCard'
import ProfileInfo from '../../components/profileInfo/ProfileInfo'
import TrendSide from '../../components/trendSide/TrendSide'
import './Profile.css'

const Profile = () => {
  return (
    <div className='Profile'>
      <ProfileInfo />
      <ProfileCard />
      <TrendSide />
    </div>
  )
}

export default Profile

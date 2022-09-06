import React from 'react'
import ProfileInfo from '../../components/profileInfo/ProfileInfo'
import FollowersCard from '../../components/followersCard/FollowersCard'
import ProfileCard from '../../components/profileCard/ProfileCard'
import TrendSide from '../../components/trendSide/TrendSide'
import './Profile.css'

const Profile = () => {
  return (
    <div className='Profile'>
      <div className="ProfileLeft">
        <ProfileInfo />
        <FollowersCard />
      </div>
      <ProfileCard location={"Profile"} />
      <TrendSide />
    </div>
  )
}

export default Profile

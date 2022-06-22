import React from 'react'
import ProfileSide from '../../components/profileSide/ProfileSide'
import PostSide from '../../components/postSide/PostSide'
import TrendSide from '../../components/trendSide/TrendSide'
import './Home.css'

const Home = () => {
  return (
    <div className='Home'>
      <ProfileSide />
      <PostSide />
      <TrendSide />
    </div>
  )
}

export default Home

import React from 'react'
import './TrendSide.css'
import Trends from '../trends/Trends'
import Home from '../../img/home.png'
import { UilSetting } from '@iconscout/react-unicons'
import Notif from '../../img/noti.png'

const TrendSide = () => {
  return (
    <div className='trendSide'>
      <div className="ActionBar">
        <img src={Home} alt="Home button" />
        <img src={Notif} alt="Notifications button" />
        <div className="option">
          <UilSetting size="1.5rem" />
        </div>
      </div>
      <Trends />
    </div>
  )
}

export default TrendSide

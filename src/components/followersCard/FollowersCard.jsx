import React from 'react'
import { followers } from '../../Data/FollowersData'
import './FollowersCard.css'

const FollowersCard = () => {
  return (
    <div className='followersCard'>
      <h3>Who's following you</h3>
      {
        followers.map((follower, id) => {
          return (
            <div className="follower">
              <div className="followerData">
                <img src={follower.img} alt="follower profile" />
                <div className="followerName">
                  <span>{follower.name}</span>
                  <span>@{follower.username}</span>
                </div>
              </div>
              <input type="button" value="Follow" />
            </div>
          )
        })
      }
    </div>
  )
}

export default FollowersCard

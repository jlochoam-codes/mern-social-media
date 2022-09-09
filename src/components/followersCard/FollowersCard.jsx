import React, { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'
import { getUser } from '../../api/UserReqs'
import './FollowersCard.css'

const FollowersCard = () => {
  const { user } = useSelector(state => state.userReducer.userData);
  const [followersData, setFollowersData] = useState([]);
  const [loadingFollowers, setLoadingFollowers] = useState(true);

  useEffect(() => {
    setLoadingFollowers(true);
    const fetchFollowersData = async () => {
      const asyncFollowerArr = [];
      for (const followerId of user.followers) {
        try {
          const { data } = await getUser(followerId);
          const followerData = {
            "username": data.username,
            "name": `${data.firstName} ${data.lastName}`,
            "profilePicture": data.profilePicture
          }
          asyncFollowerArr.push(followerData);
        } catch (err) {
          console.error(err);
        }
      }
      setFollowersData(asyncFollowerArr);
      setLoadingFollowers(false);
    };
    fetchFollowersData();
  }, []);

  return (
    <div className='followersCard'>
      <h3>Who's following you</h3>
      {
        loadingFollowers ? "Loading followers..." :
          (followersData.length === 0 ?
            <div className="noFollowers">
              You have no followers yet. Keep sharing amazing posts,
              and this might change really soon!
            </div> :
            followersData.map((follower, id) => {
              return (
                <div className="follower" key={id}>
                  <div className="followerData">
                    <img src={
                      process.env.REACT_APP_PUBLIC_FOLDER + (
                        follower.profilePicture ? follower.profilePicture : "noProfilePicture.jpg")
                    } alt="follower profile" />
                    <div className="followerName">
                      <span>{follower.name}</span>
                      <span>@{follower.username}</span>
                    </div>
                  </div>
                  <input type="button" value="Follow" />
                </div>
              )
            }))
      }
    </div>
  )
}

export default FollowersCard

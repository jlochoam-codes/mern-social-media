import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import './Post.css'
import Like from '../../img/like.png'
import NotLike from '../../img/notlike.png'
import Comment from '../../img/comment.png'
import Share from '../../img/share.png'

const Post = ({ data }) => {
  const { user } = useSelector(state => state.authReducer.authData);
  const [likedByUser, setLikedByUser] = useState(data.likes.includes(user._id));
  const [numOfLikes, setNumOfLikes] = useState(data.likes.length);

  return (
    <div className='Post'>
      {data.img && <div className="PostImage">
        <img src={process.env.REACT_APP_PUBLIC_FOLDER + data.img} alt="Post" />
      </div>}
      <div className="PostContent">
        <div className="PostUser">{data.name}</div>
        <div className="PostText">{data.desc}</div>
      </div>
      <div className="PostLikes">{numOfLikes} likes</div>
      <div className="PostInteraction">
        {(likedByUser)
          ? <img src={Like} alt="Liked post, click to unlike" />
          : <img src={NotLike} alt="Not liked post, click to like" />
        }
        <img src={Comment} alt="Click to comment on post" />
        <img src={Share} alt="Click to share post" />
      </div>
    </div>
  )
}

export default Post

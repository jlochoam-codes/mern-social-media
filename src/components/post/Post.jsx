import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import './Post.css'
import * as postsApi from '../../api/PostsReqs'
import Like from '../../img/like.png'
import NotLike from '../../img/notlike.png'
import Comment from '../../img/comment.png'
import Share from '../../img/share.png'

const Post = ({ data }) => {
  const { user } = useSelector(state => state.userReducer.userData);
  const [likedByUser, setLikedByUser] = useState(data.likes.includes(user._id));
  const [numOfLikes, setNumOfLikes] = useState(data.likes.length);

  const handleLikePost = async () => {
    try {
      await postsApi.likePost(data._id, { userId: user._id });
      setLikedByUser(true);
      setNumOfLikes(numOfLikes + 1);
    } catch (err) {
      console.error(err);
    }
  };

  const handleUnlikePost = async () => {
    try {
      await postsApi.unlikePost(data._id, { userId: user._id });
      setLikedByUser(false);
      setNumOfLikes(numOfLikes - 1);
    } catch (err) {
      console.error(err);
    }
  };

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
          ? <img src={Like} alt="Liked post, click to unlike" onClick={handleUnlikePost} />
          : <img src={NotLike} alt="Not liked post, click to like" onClick={handleLikePost} />
        }
        <img src={Comment} alt="Click to comment on post" />
        <img src={Share} alt="Click to share post" />
      </div>
    </div>
  )
}

export default Post

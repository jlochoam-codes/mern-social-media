import React from 'react'
import './Post.css'
import Like from '../../img/like.png'
import NotLike from '../../img/notlike.png'
import Comment from '../../img/comment.png'
import Share from '../../img/share.png'

const Post = ({ data }) => {
  return (
    <div className='Post'>
      {data.img && <div className="PostImage">
        <img src={data.img} alt="Post" />
      </div>}
      <div className="PostContent">
        <div className="PostUser">{data.userId}</div>
        <div className="PostText">{data.desc}</div>
      </div>
      <div className="PostLikes">{data.likes.length} likes</div>
      <div className="PostInteraction">
        {(data.liked)
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

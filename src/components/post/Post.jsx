import React from 'react'
import './Post.css'
import Like from '../../img/like.png'
// import NotLike from '../../img/notlike.png'
import Comment from '../../img/comment.png'
import Share from '../../img/share.png'
import PostImage from '../../img/postpic1.jpg'

const Post = () => {
  return (
    <div className='Post'>
      <div className="PostImage">
        <img src={PostImage} alt="Post" />
      </div>
      <div className="PostContent">
        <div className="PostUser">Tzuyu</div>
        <div className="PostText">Estoy #AprendiendoEspanol</div>
      </div>
      <div className="PostLikes">2300 likes</div>
      <div className="PostInteraction">
        <img src={Like} alt="Liked post, click to unlike" />
        <img src={Comment} alt="Click to comment on post" />
        <img src={Share} alt="Click to share post" />
      </div>
    </div>
  )
}

export default Post

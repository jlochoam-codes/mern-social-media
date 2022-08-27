import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import './Posts.css'
import Post from '../post/Post'
import * as postsApi from '../../api/PostsReqs'

const Posts = () => {
  const { user } = useSelector(state => state.authReducer.authData);
  const { uploading } = useSelector(state => state.postsReducer);
  const [timelinePosts, setTimelinePosts] = useState([]);

  useEffect(() => {
    const fetchTimelinePosts = async () => {
      try {
        const timelinePostsData = await postsApi.getTimelinePosts(user._id);
        setTimelinePosts(timelinePostsData.data);
      } catch (err) {
        console.error(err);
      }
    };
    fetchTimelinePosts();
  }, []);

  return (
    <div className='Posts'>
      {
        timelinePosts.map((post, key) => {
          return <Post data={post} key={key} />
        })
      }
    </div>
  )
}

export default Posts

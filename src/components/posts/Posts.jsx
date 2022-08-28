import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import './Posts.css'
import Post from '../post/Post'
import * as postsApi from '../../api/PostsReqs'
import * as userApi from '../../api/UserReqs'

const Posts = () => {
  const { user } = useSelector(state => state.authReducer.authData);
  const [timelinePosts, setTimelinePosts] = useState([]);

  useEffect(() => {
    const fetchTimelinePosts = async () => {
      try {
        const timelinePostsResponse = await postsApi.getTimelinePosts(user._id);
        const timelinePostsData = timelinePostsResponse.data;
        for (const p of timelinePostsData) {
          const getUserResponse = await userApi.getUser(p.userId);
          const authorName = getUserResponse.data.username;
          p.name = authorName;
        }
        setTimelinePosts(timelinePostsData);
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

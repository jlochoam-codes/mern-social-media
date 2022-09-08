import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import './Posts.css'
import Post from '../post/Post'
import * as postsApi from '../../api/PostsReqs'
import * as userApi from '../../api/UserReqs'

const Posts = () => {
  const { user } = useSelector(state => state.userReducer.userData);
  const { uploading } = useSelector(state => state.postsReducer);
  const [timelinePosts, setTimelinePosts] = useState([]);
  const [loadingPosts, setLoadingPosts] = useState(true);

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
        setLoadingPosts(false);
      } catch (err) {
        console.error(err);
      }
    };
    fetchTimelinePosts();
  }, [uploading]);

  return (
    <div className='Posts'>
      {
        (loadingPosts || uploading) ? "Loading posts..." :
          timelinePosts.map((post, key) => {
            return <Post data={post} key={key} />
          })
      }
    </div>
  )
}

export default Posts

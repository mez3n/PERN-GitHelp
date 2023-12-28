import React from 'react'
import './css/feed.css'
import Post from '../components/post/post'
function feed() {
  return (
    <div className='feed'>
    <div className="feedWrapper">
    <Post></Post>
    <Post></Post>
    <Post></Post>
    </div>
    </div>
  )
}

export default feed

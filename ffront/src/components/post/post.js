import React, { useState } from 'react'
import './css/post.css' 
import mo from'../../imgs/mo.jpg'
import Comments from '../comments/comments'
import { Link } from 'react-router-dom';
function Post() {
  const [viewcomment,setviewcomment]=useState(false);
  return (
    <div className="post">
      <div className="postWrapper">
        <div className="postTop">
         <Link to={"/profile/1"} className='profilepostlink'> {/*userid in the post */}
          <div className="postTopLeft">
          
            <img
              className="postProfileImg"
              src={mo} //from data base
              alt=""
            />
            <span className="postUsername"> 
              mohamedkhater  {/*from data base*/}
            </span>
            
          </div>
          </Link>
        </div>
        <div className="postCenter">
          <span className="postText">my first post</span>{/*from data base*/}
          <img className="postImg" src={mo} alt="" />{/*from data base*/}
        </div>
        <div className="postBottom">
          <div className="postBottomLeft">
            <img className="likeIcon" src="assets/like.png"  alt="" />
            <img className="likeIcon" src="assets/heart.png"  alt="" />
            <span className="postLikeCounter">5 people like it</span>{/*from data base*/}
          </div>
          <div className="postBottomRight">
            <span className="postCommentText" onClick={()=>setviewcomment(!viewcomment)}>8 comments</span>{/*from data base*/}
          </div>
        </div>
       {viewcomment&&<Comments></Comments>} 
      <div className='addcommentwrapper'>
      <form className="comment-form" >
      <textarea 
        placeholder="Add a comment..."
      />
      <button type="submit">Post Comment</button>
    </form>
      </div>
      </div>
    </div>

  )
}

export default Post
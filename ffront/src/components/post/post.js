import React, { useState, useEffect } from "react";
import "./css/post.css";
import mo from "../../imgs/mo.jpg";
import Comments from "../comments/comments"; // Note: Corrected the import path
import { Link } from "react-router-dom";
import { Axios } from "axios"; // Note: Ensure you have Axios installed and imported correctly

function Post({ post }) {
  const [comments, setComments] = useState([]);
  const [numberofcomments, setNumberofcomments] = useState(null);
  const [commentcontent, setCommentcontent] = useState(null);
  const [commentpost, setCommentpost] = useState(false);
  const post_owner_id = localStorage.getItem("id");

  useEffect(() => {
    fetch(`http://localhost:8080/personalComments/${post.id}/${post_owner_id}`)
      .then((res) => res.json())
      .then((data) => setComments(data))
      .catch((error) => console.error(error));

    fetch(
      `http://localhost:8080/personalComments/currentCommentCount/${post.id}/${post_owner_id}`
    )
      .then((res) => res.json())
      .then((data) => setNumberofcomments(data))
      .catch((error) => console.error(error));
  }, [commentpost]);

  function handlePostAComment() {
    Axios.post("linkaddcomment", {
      userid: localStorage.getItem("id"),
      commentcontent: commentcontent,
      postid: post.id,
    });
    setCommentpost(true);
  }

  const [viewcomment, setViewcomment] = useState(false);

  if (!Array.isArray(comments)) {
    setComments([comments]);
  }

  return (
    <div className="post">
      <div className="postWrapper">
        <div className="postTop">
          <Link to={`/profile/${post.userid}`} className="profilepostlink">
            {" "}
            {/*userid in the post */}
            <div className="postTopLeft">
              <img
                className="postProfileImg"
                src={mo} //from data base
                alt=""
              />
              <span className="postUsername">
                {post.username} {/from data base/}
              </span>
            </div>
          </Link>
        </div>
        <div className="postCenter">
          <span className="postText">{post.caption}</span>
          {/from data base/}
          <img className="postImg" src={mo} alt="" />
          {/from data base/}
        </div>
        <div className="postBottom">
          <div className="postBottomLeft">
            <img className="likeIcon" src="assets/like.png" alt="" />
            <img className="likeIcon" src="assets/heart.png" alt="" />
            <span className="postLikeCounter">5 people like it</span>
            {/from data base/}
          </div>
          <div className="postBottomRight">
            <span
              className="postCommentText"
              onClick={() => setViewcomment(!viewcomment)}
            >
              {numberofcomments} comments
            </span>
            {/from data base/}
          </div>
        </div>
        {viewcomment &&
          comments.map((comment) => (
            <Comments key={comment.id} comment={comment} />
          ))}
        {viewcomment &&
          comments.map((comment) => {
            <Comments comment={comment}></Comments>;
          })}
        <div className="addcommentwrapper">
          <form className="comment-form">
            <textarea
              placeholder="Add a comment..."
              onChange={(e) => setCommentcontent(e.target.value)}
            />
            <button type="button" onClick={handlePostAComment}>
              Post Comment
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Post;

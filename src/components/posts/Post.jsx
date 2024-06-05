import React, { useState } from 'react'
import './post.css'
import MoreVertIcon from '@mui/icons-material/MoreVert';

function Post({post}) {
    const [like, setLike]= useState(post.like)
    const [isLiked, setIsLiked]= useState(false)

    const likeHandler = ()=>{
        setLike(isLiked ? like-1 : like+1)
        setIsLiked(!isLiked)
    }
  return (
    <div className="posts">
        <div className="postWrapper">
            <div className="postTop">
                <div className="postTopLeft">
                    <img src="/assets/person/a.JPG" alt="" className="postProfileimg" />
                    <span className="postUserName">Aashirwad</span>
                    <span className="postTime">{post.date}</span>
                </div>
                <div className="postTopRight">
                <MoreVertIcon/>
                </div>
            </div>
            <div className="postCenter">
                <span className="postText">{post?.desc}</span>
                <img src={post.photo} alt="" className="postImg" />
            </div>
            <div className="postBottom">
                <div className="postBottomLeft">
                    <img src="/assets/heart.png" alt="" className='likebt' onClick={likeHandler} />
                    <img src="/assets/like.png" alt="" className='likebt' onClick={likeHandler} />
                    <span className="likeCount">{like} likes</span>
                </div>
                <div className="postBottomRight">
                    <span className="postCommentText">{post.comment} Comments</span>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Post

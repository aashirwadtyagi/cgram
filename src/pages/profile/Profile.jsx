import React from 'react'
import './profile.css'
import Topbar from '../../components/topbar/Topbar'
import SideBar from '../../components/sidebar/SideBar'  
import Feed from '../../components/feed/Feed'
import RightBar from '../../components/rightbar/RightBar'

function Profile() {
  return (
    <>
    <Topbar/>
    <div className="profile">
      <SideBar/>
      <div className="profileRight">
        <div className="profileRightTop">
            <div className="profileCover">
            <img src="/assets/post/3.jpeg" alt="" className="coverImg" />
            <img src="/assets/person/a.JPG" alt="" className="userImg" />
            </div>
            <div className="profileInfo">
                <h4 className="info">Aashirwad</h4>
                <span className="desc">My name is Aashirwad Tyagi, persuing BTech in Computer Science and Engineering at KIET Group of Institutions. I want to do work that challenges me as a developer & work that I can be proud of.

I am fluent in React and know Figma and am working on a few projects in the React and Nodejs stack.
I an learning Next.js, Java currently.

Also, I love playing Basketball</span>
            </div>
        </div>
        <div className="profileRightBottom">
        <Feed/>
        <RightBar profile/>
        </div>
      </div>
    </div>
    </>
  )
}

export default Profile

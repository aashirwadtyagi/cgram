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
            <img src="/assets/post/2.jpeg" alt="" className="userImg" />
            </div>
            <div className="profileInfo">
                <h4 className="info">Aashirwad</h4>
                <span className="desc">My name is aash tyagi, hello.</span>
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

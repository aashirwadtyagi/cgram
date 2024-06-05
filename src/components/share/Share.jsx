import React from 'react'
import './share.css'
import PermMediaIcon from '@mui/icons-material/PermMedia';
import LabelIcon from '@mui/icons-material/Label';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import EmojiEmotionsIcon from '@mui/icons-material/EmojiEmotions';

function Share() {
  return (
    <div className='share'>
      <div className="shareWrapper">
        <div className="shareTop">
            <img src="/assets/person/a.JPG" alt="" className="topShareimg" />
            <input placeholder="What's in your mind?" className="shareInput" />
        </div>
        <hr className="shareHr" />
        <div className="shareBottom">
            <div className="shareOptions">
                <div className="shareOptions">
                    <PermMediaIcon htmlColor="tomato" className='shareIcon'/>
                    <span className="shareOptionText">Photo or Video</span>
                </div>
                <div className="shareOptions">
                    <LabelIcon htmlColor="blue" className='shareIcon'/>
                    <span className="shareOptionText">Tag</span>
                </div>
                <div className="shareOptions">
                    <LocationOnIcon htmlColor="green" className='shareIcon'/>
                    <span className="shareOptionText">Location</span>
                </div>
                <div className="shareOptions">
                    <EmojiEmotionsIcon htmlColor="goldenrod" className='shareIcon'/>
                    <span className="shareOptionText">Feelings</span>
                </div>
            </div>
            <button className='shareButton'>Share</button>
            
        </div>
      </div>
    </div>
  )
}

export default Share

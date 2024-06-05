import './sideBar.css'
import RssFeedIcon from '@mui/icons-material/RssFeed';
import ChatIcon from '@mui/icons-material/Chat';
import PlayCircleIcon from '@mui/icons-material/PlayCircle';
import GroupsIcon from '@mui/icons-material/Groups';
import BookmarksIcon from '@mui/icons-material/Bookmarks';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import EventIcon from '@mui/icons-material/Event';
import SchoolIcon from '@mui/icons-material/School';


function sideBar() {
  return (
    <div className='sideBar'>
      <div className="sideWrapper">
        <ul className="sideBarList">
          <li className="sideBarListItem">
          <RssFeedIcon className='sideBarIcon'/>
          <span className="listItemText">feed</span>
          </li>

          <li className="sideBarListItem">
          <ChatIcon className='sideBarIcon'/>
          <span className="listItemText">Chat</span>
          </li>

          <li className="sideBarListItem">
          <PlayCircleIcon className='sideBarIcon'/>
          <span className="listItemText">Videos</span>
          </li>

          <li className="sideBarListItem">
          <GroupsIcon className='sideBarIcon'/>
          <span className="listItemText">Groups</span>
          </li>

          <li className="sideBarListItem">
          <BookmarksIcon className='sideBarIcon'/>
          <span className="listItemText">Bookmarks</span>
          </li>

          <li className="sideBarListItem">
          <HelpOutlineIcon className='sideBarIcon'/>
          <span className="listItemText">Questions</span>
          </li>

          <li className="sideBarListItem">
          <EventIcon className='sideBarIcon'/>
          <span className="listItemText">Events</span>
          </li>

          <li className="sideBarListItem">
          <SchoolIcon className='sideBarIcon'/>
          <span className="listItemText">Courses</span>
          </li>

          
        </ul>
        <button className='sideBarButton'>
          Show more
        </button>
        <hr className='sideBarLine'/>
        <ul className="sideBarFriendList">
          <li className="sideBarFriend">
            <img src="/assets/person/a.JPG" alt="" className="sideBarFriendImg" />
            <span className="sideBarFriendName">Aashirwad</span>
          </li>
          <li className="sideBarFriend">
            <img src="/assets/person/3.jpeg" alt="" className="sideBarFriendImg" />
            <span className="sideBarFriendName">Hritik Roshan</span>
          </li>
          <li className="sideBarFriend">
            <img src="/assets/person/4.jpeg" alt="" className="sideBarFriendImg" />
            <span className="sideBarFriendName">Varun Dhavan</span>
          </li>
          <li className="sideBarFriend">
            <img src="/assets/person/5.jpeg" alt="" className="sideBarFriendImg" />
            <span className="sideBarFriendName">Rishabh Pant</span>
          </li>
          <li className="sideBarFriend">
            <img src="/assets/person/6.jpeg" alt="" className="sideBarFriendImg" />
            <span className="sideBarFriendName">Messi</span>
          </li>
          <li className="sideBarFriend">
            <img src="/assets/person/7.jpeg" alt="" className="sideBarFriendImg" />
            <span className="sideBarFriendName">Travis Scott</span>
          </li>
        </ul>


      </div>
    </div>
  )
}

export default sideBar

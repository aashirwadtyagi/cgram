import './topbar.css'
import SearchIcon from '@mui/icons-material/Search';
import PersonIcon from '@mui/icons-material/Person';
import ChatIcon from '@mui/icons-material/Chat';
import NotificationsIcon from '@mui/icons-material/Notifications';
import { useNavigate } from "react-router-dom"


function Topbar() {

  const navigate = useNavigate();

  const handleLogoClick = () => {
    navigate('/');
  };

  return (
    <div className="topBarContainer">

      <div className="topBarLeft">
        <span className="logo" onClick={handleLogoClick}>CollgGram</span>
      </div>

      <div className="topBarCenter">
        <div className="searchBar">
          <SearchIcon className="searchIcon"/>
          <input placeholder='Search for friends, posts or anything' className="searchInput" />
        </div>
      </div>

      <div className="topBarRight">
        <div className="topBarLinks">
          <span className="topBarLink">Homepage</span>
          <span className="topBarLink">Timeline</span>
        </div>
        <div className="topBarIcons">
          <div className="topBarIconItem">
            <PersonIcon/>
            <span className="topBarIconBadge">1</span>
          </div>
          <div className="topBarIconItem">
            <ChatIcon/>
            <span className="topBarIconBadge">1</span>
          </div>
          <div className="topBarIconItem">
            <NotificationsIcon/>
            <span className="topBarIconBadge">1</span>
          </div>
        </div>
        <img src="/assets/person/a.JPG" alt="" className="topBarImg" />
      </div>
    </div>
  )
}

export default Topbar

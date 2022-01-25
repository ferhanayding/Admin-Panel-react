import "./Topbar.css";
import {NotificationsNone,Language,Settings, MenuOutlined} from '@mui/icons-material';
import { useState } from "react";
const Topbar = () => {
  const [menuState,setMenuState]= useState(false)
  return <div className='topbar' >
    <div className="topbarWrapper">

    <div className="left">
      <span className="logo">DjangoDev</span>
    </div>
    <div className="right">
      <div className="topbarRightMobile" onClick={()=>setMenuState(true)}>
        <MenuOutlined />
        
      </div>
      <div className="topbarIconsContainer">
  <NotificationsNone  />
  <span className="iconBadge">2</span>
      </div>
      <div className="topbarIconsContainer">
  <Language/>
  <span className="iconBadge">2</span>
      </div>
      <div className="topbarIconsContainer">
  <Settings />
      </div>
      <div className="topbarIconsContainer" >
      <img className="avatarTopbar" src="https://listelist.com/wp-content/uploads/2019/02/thispersondoesnotexist.jpg" alt="" />
      </div>
    </div>

    </div>
  </div>;
};

export default Topbar;

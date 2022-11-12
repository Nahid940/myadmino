import React from 'react'
import './Topbar.css'
import CircleNotificationsIcon from '@mui/icons-material/CircleNotifications';
import GTranslateIcon from '@mui/icons-material/GTranslate';
import SettingsIcon from '@mui/icons-material/Settings';
import { Link } from 'react-router-dom';
export default function Topbar() {
  return (
    <div className='topbar'>
        <div className="topbarWrapper">
            <div className="left">
              <Link to="/">
                  <span className="logo">
                      LGOR
                  </span>
              </Link>
            </div>
            <div className="right">
                <div className="topbarIconContainer">
                  <CircleNotificationsIcon/>
                </div>
                <div className="topbarIconContainer">
                  <GTranslateIcon/>
                </div>
                <div className="topbarIconContainer">
                  <SettingsIcon/>
                </div>
                <img className='topAvatar' src="https://img.freepik.com/free-photo/victory-social-media-icon_460848-6900.jpg?w=740&t=st=1668052567~exp=1668053167~hmac=1bd56e8bdbedf68db18c3a183cb5a2d2af65553a20dc48e4177ffd7a20b871b3" alt="" />
            </div>
        </div>
    </div>
  )
}

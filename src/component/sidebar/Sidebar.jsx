import React from 'react'
import './sidebar.css'
import LineStyleIcon from '@mui/icons-material/LineStyle';
import TimelineIcon from '@mui/icons-material/Timeline';
import ArticleIcon from '@mui/icons-material/Article';
import AssessmentIcon from '@mui/icons-material/Assessment';
import ManageAccountsIcon from '@mui/icons-material/ManageAccounts';

export default function Sidebar() {
  return (
    <div className='sidebar'>
        <div className="sidebarWrapper">
            <div className="sidebarMenu">
                <h3 className="sidebarTtile">
                    Dashboard
                </h3>
                <ul className="sidebarList">
                    <li className="sidebarListItem">
                        <LineStyleIcon className='sidebarIcon'/>
                        Home
                    </li>
                    <li className="sidebarListItem">
                        <TimelineIcon  className='sidebarIcon'/>
                        Analytics
                    </li>
                </ul>
            </div>
            <div className="sidebarMenu">
                <h3 className="sidebarTtile">
                    Quick Menus
                </h3>
                <ul className="sidebarList">
                    <li className="sidebarListItem">
                        <ArticleIcon className='sidebarIcon'/>
                        Inventory
                    </li>
                    <li className="sidebarListItem">
                        <AssessmentIcon  className='sidebarIcon'/>
                        Sales
                    </li>
                </ul>
            </div>
            <div className="sidebarMenu">
                <h3 className="sidebarTtile">
                    Profile
                </h3>
                <ul className="sidebarList">
                    <li className="sidebarListItem">
                        <ManageAccountsIcon className='sidebarIcon'/>
                        Account
                    </li>
                    <li className="sidebarListItem">
                        <TimelineIcon  className='sidebarIcon'/>
                        Analytics
                    </li>
                </ul>
            </div>
        </div>
    </div>
  )
}

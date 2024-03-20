import React from 'react'
import './Header.css'
import SearchIcon from '@mui/icons-material/Search';
import HeaderOption from './HeaderOption';
import HomeIcon from '@mui/icons-material/Home';
import SupervisorAccountIcon from '@mui/icons-material/SupervisorAccount';
import WorkIcon from '@mui/icons-material/Work';
import MessageIcon from '@mui/icons-material/Message';
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';
import PersonIcon from '@mui/icons-material/Person';
import { useDispatch } from 'react-redux';
import { logout, selectUser } from './features/userSlice';
import { auth } from './firebase';

function Header() {
  
const dispatch = useDispatch();

  const logoutOfApp = () =>{
dispatch(logout())
auth.signOut();
  }
  return (
    <div className='header'>
      


      <div className="header_left">
         <img src="https://i.pinimg.com/originals/49/32/80/49328097f84b5b6d80ffe0c104e4f429.jpg" alt="" />

         <div className="header_search">
         <SearchIcon />
          <input placeholder='Search' type="text" />
         </div>

      </div>

      <div className="header_right">
         <HeaderOption Icon={HomeIcon} title = 'Home' />
         <HeaderOption Icon={SupervisorAccountIcon} title = 'My Network' />
         <HeaderOption Icon={WorkIcon} title = 'Jobs' />
         <HeaderOption Icon={MessageIcon} title = 'Messaging' />
         <HeaderOption Icon={NotificationsActiveIcon} title = 'Notifications' />
         <HeaderOption 
         avatar={true}
         title= 'Me'
         onClick={logoutOfApp}
         />

      </div>


    </div>
  )
}

export default Header

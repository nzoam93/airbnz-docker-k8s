
import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import * as sessionActions from '../../store/session';
import './Navigation.css';
import assetImg from "../Listings/houseimgs/airbnzphoto.jpg"
import { NavLink } from 'react-router-dom';




function ProfileButton({ user }) {
  const dispatch = useDispatch();
  const [showMenu, setShowMenu] = useState(false);
  const defaultProfileImg = <img src={assetImg} alt="house"/>

  const sessionUser = useSelector(state => state.session.user);

  // const openMenu = () => {
  //   if (showMenu) return;
  //   setShowMenu(true);
  // };

  useEffect(() => {
    if (!showMenu) return;

    const closeMenu = () => {
      setShowMenu(false);
    };

    document.addEventListener('click', closeMenu);

    //cleanup for the useEffect
    return () => document.removeEventListener("click", closeMenu);
  }, [showMenu]);


  const logout = (e) => {
    // e.preventDefault(); I Need the default for the link to work...
    dispatch(sessionActions.logout());
  };

  return (
    <div className='login-links'>
      {/* !showmenu in order to make it not show up when the menu is open */}
      {/* {!showMenu && <button onClick={openMenu} className='icon'>
        <i className="fa-solid fa-user-circle fa-2x" />
      </button>} */}
      {!showMenu && (
        <div className="center-content">
          {sessionUser.profilePic ?
              <div id="profile-img"><img src={sessionUser.profilePic} alt="profilePic" /></div>
              :
              <div id="profile-img">{defaultProfileImg}</div>
          }
          {/* <div id="profile-img">{profileImg}</div> */}
          <ul id="profile-dropdown">
            <li>{user.username}</li>
            <div className="center-content">
              <NavLink exact to={`/users/${sessionUser.id}`} >
                <button className="user-link-button airbnz-button">My Page</button>
              </NavLink>
              <NavLink exact to={'/'}>
                <button className="user-link-button airbnz-button" onClick={logout}>Log Out</button>
              </NavLink>
            </div>
          </ul>
        </div>
      )}
    </div>
  );
}

export default ProfileButton;

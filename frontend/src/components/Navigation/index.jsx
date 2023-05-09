
import React, { useState } from 'react';
import { NavLink, useHistory } from 'react-router-dom';
import { useSelector } from 'react-redux';
import ProfileButton from './ProfileButton';
import './Navigation.css';
import DropdownModal from '../DropdownModal';
// import SearchModal from '../SearchModal';

function Navigation() {
  const sessionUser = useSelector(state => state.session.user);
  const history = useHistory();
  const [search, setSearch] = useState("");

  let sessionLinks;
  if (sessionUser) {
    sessionLinks = (
      <ProfileButton user={sessionUser} />
    );
  } else {
    sessionLinks = (
      <>
        <div className='login-links'>
            <DropdownModal />
        </div>
      </>
    );
  }

  const handleSearch = (e) => {
    e.preventDefault();
    // history.push is essentially a redirect to the specified page
    history.push(`/?search=${search.replaceAll(" ", "+")}`);
  }


  return (
    <nav>
      <div className='navbar'>
        <NavLink exact to="/" className='logo'>
          <i className="fa-brands fa-airbnb fa-2x" />
          <p className='bold'>AirbNZ</p>
        </NavLink>
        {/* <div >
          <p id='start-your-search'>Start your search</p>
          <SearchModal />
        </div> */}
        <form id="search-bar">
          <input onChange={(e) => setSearch(e.target.value)} type="text" id='start-your-search' value={search} placeholder='Search in the Bay Area...'/>
          <button onClick={handleSearch} className="btn-modal icon">
              <i className="fa-solid fa-magnifying-glass" id="search-bar-icon"/>
          </button>
        </form>

        {sessionLinks}
      </div>
    </nav>
  );
}

export default Navigation;

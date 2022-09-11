import { Link } from 'react-router-dom';
import * as userService from '../../utilities/users-service'
import './NavBar.css'

export default function NavBar({user, setUser}) {
  function handleLogOut() {
    userService.logOut(); 
    setUser(null); 
  }
  return (
    <nav className='navBar'>
      Welcome, {user.name}! &nbsp;
      <Link to='/bucketlist'>BUCKETLIST</Link>
      <div><img src="https://i.imgur.com/Ztg6TjJ.png" alt="" /></div>
      <Link to='/all'>BREWERIES</Link>
      <div>
      <Link to='' onClick={handleLogOut} >Log Out</Link>
      </div>
    </nav>
  );
}


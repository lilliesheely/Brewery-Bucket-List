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
      <Link to='/'><img src="https://i.imgur.com/RBb82T2.gif" alt="" /></Link>
      <Link to='/all'>BREWERIES</Link>
      <div>
      
      <Link to='' onClick={handleLogOut} >Log Out</Link>
      </div>
    </nav>
  );
}


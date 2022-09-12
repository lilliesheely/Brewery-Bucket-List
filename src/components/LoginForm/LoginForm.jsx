
import { useState } from 'react';
import * as usersService from '../../utilities/users-service';
import '../../pages/AuthPage/AuthPage.css';

export default function LoginForm({ setUser }) {
  const [credentials, setCredentials] = useState({
    email: '',
    password: ''
  });
  const [error, setError] = useState('');

  function handleChange(evt) {
    setCredentials({ ...credentials, [evt.target.name]: evt.target.value });
    setError('');
  }

  async function handleSubmit(evt) {
    evt.preventDefault();
    try {
      const user = await usersService.login(credentials);
      setUser(user);
      
    } catch {
      setError('Log In Failed - Try Again');
    }
  }

  return (
    <div>
      <div className="authFormContainer">
        <form autoComplete="off" onSubmit={handleSubmit} className='loginForm'>
          <label className='authLabel'>Email</label>
          <input type="text" name="email" value={credentials.email} onChange={handleChange} required />
          <label className='authLabel'>Password</label>
          <input type="password" name="password" value={credentials.password} onChange={handleChange} required />
          <button className='authBTN' type="submit">Log In</button>
        </form>
      </div>
      <p className="error-message">&nbsp;{error}</p>
    </div>
  );
}


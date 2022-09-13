import { useState } from 'react'; 
import SignUpForm from '../../components/SignUpForm/SignUpForm';
import LoginForm from '../../components/LoginForm/LoginForm';

export default function AuthPage({setUser}) {
  const [showLogin, setShowLogin] = useState(true);
  return (
    <main className='authPage'>
      <div>
      { showLogin ?
          <LoginForm setUser={setUser} />
          :
          <SignUpForm setUser={setUser} />
      }
      <button onClick={() => setShowLogin(!showLogin)} className='auth-btn'>
        {showLogin ? <p>New user? Sign up here!</p> : <p>Already a member? <br /> Log in here!</p>}
      </button>
      </div>
      <div>
        <img src='https://i.imgur.com/cM6S0lc.png' alt='logo' />
      </div>
    </main>
  );
}
import { useState } from 'react'; 
import SignUpForm from '../../components/SignUpForm/SignUpForm';
import LoginForm from '../../components/LoginForm/LoginForm';

export default function AuthPage({setUser}) {
  const [showLogin, setShowLogin] = useState(true);
  return (
    <main className='authPage'>
      
      { showLogin ?
          <LoginForm setUser={setUser} />
          :
          <SignUpForm setUser={setUser} />
      }
      <button onClick={() => setShowLogin(!showLogin)} className='auth-btn'>
        {showLogin ? 'New user? Sign up here!' : 'Already a member, log in here!'}
      </button>
    </main>
  );
}
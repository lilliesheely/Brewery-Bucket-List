import SignUpForm from '../../components/SignUpForm/SignUpForm';
import LoginForm from '../../components/LoginForm/LoginForm';

export default function AuthPage({setUser}) {
  return (
    <main>
      <button onClick={() => setShowLogin(!showLogin)}>
        {showLogin ? 'Sign Up' : 'Log In'}
      </button>
      { showLogin ?
          <LoginForm setUser={setUser} />
          :
          <SignUpForm setUser={setUser} />
      }
      
    </main>
  );
}
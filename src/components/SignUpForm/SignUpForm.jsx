import { Component } from 'react';
import { signUp } from '../../utilities/users-service';
import '../../pages/AuthPage/AuthPage.css';


export default class SignUpForm extends Component {
  state = {
    name: '',
    email: '',
    password: '',
    confirm: '',
    error: ''
  };

  handleChange = (evt) => {
    this.setState({
      [evt.target.name]: evt.target.value,
      error: ''
    });
  };

  handleSubmit = async (evt) => {
    evt.preventDefault();
    try {
      const formData = {...this.state};
      delete formData.confirm;
      delete formData.error;
      const user = await signUp(formData);
      this.props.setUser(user); 
    } catch {
      // An error occurred, like a dup email address
      this.setState({ error: 'Sign Up Failed - Try Again' });
    }
  };

  
  render() {
    const disable = this.state.password !== this.state.confirm;
    return (
      <div className='authFormContainer'>
        <div className='form-container'>
          <form autoComplete='off' onSubmit={this.handleSubmit} className='loginForm'>
            <label className='authLabel'>Name</label>
            <input type='text' name='name' value={this.state.name} onChange={this.handleChange}  className='auth-input' required />
            <label className='authLabel'>Email</label>
            <input type='email' name='email' value={this.state.email} onChange={this.handleChange} className='auth-input'  required />
            <label className='authLabel'>Password</label>
            <input type='password' name='password' value={this.state.password} onChange={this.handleChange}  className='auth-input' required />
            <label className='authLabel'>Confirm Password</label>
            <input type='password' name='confirm' value={this.state.confirm} onChange={this.handleChange} className='auth-input'  required />
            <button className='authBTN' type='submit' disabled={disable}>Sign In</button>
          </form>
        </div>
        <p className='error-message'>&nbsp;{this.state.error}</p>
      </div>
    );
  }
  
}

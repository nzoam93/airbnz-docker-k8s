import React, { useState } from 'react';
import * as sessionActions from '../../store/session';
import { useDispatch } from 'react-redux';
// import { Redirect } from 'react-router-dom';
import './LoginForm.css'

function LoginForm() {
  const dispatch = useDispatch();
  // const sessionUser = useSelector(state => state.session.user);
  const [credential, setCredential] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState([]);

  // if (sessionUser) return <Redirect to="/" />;

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrors([]);
    return dispatch(sessionActions.login({ credential, password }))
      .catch(async (res) => {
        let data;
        try {
          // .clone() essentially allows you to read the response body twice
          data = await res.clone().json();
        } catch {
          data = await res.text(); // Will hit this case if the server is down
        }
        if (data?.errors) setErrors(data.errors);
        else if (data) setErrors([data]);
        else setErrors([res.statusText]);
      });
  }



  return (
    <form onSubmit={handleSubmit}>
      <div id='login-signup-on-form'>Log In</div>
      {/* <div id='welcome-to-airbNZ'>Welcome to AirbNZ</div> */}
      <ul id='auth-errors'>
        {errors.map(error => <li key={error} id='auth-error'>{error}</li>)}
      </ul>
      <div className='login-signup-item-container'>
        <input
          className='login-signup-item'
          type="text"
          value={credential}
          onChange={(e) => setCredential(e.target.value)}
          required
          placeholder="username or email"
        />
      </div>
      <br />
      <div className='login-signup-item-container'>
        <input
          className='login-signup-item'
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          placeholder='password'
        />
      </div>
      <br />
      <div className='login-signup-item-container'>
        <button type="submit" className='login-signup-item airbnz-button' id='login-signup-submit-button'>Log In</button>
      </div>
    </form>
  );
}

export default LoginForm;

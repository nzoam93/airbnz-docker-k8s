import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Redirect } from "react-router-dom";
import * as sessionActions from "../../store/session";
import './SignupForm.css';

function SignupForm() {
  const dispatch = useDispatch();
  const sessionUser = useSelector(state => state.session.user);
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errors, setErrors] = useState([]);

  if (sessionUser) return <Redirect to="/" />;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password === confirmPassword) {
      setErrors([]);
      return dispatch(sessionActions.signup({ email, username, password }))
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
    return setErrors(['Confirm Password field must be the same as the Password field']);
  };

  return (
    <form onSubmit={handleSubmit}>
            <div id='login-signup-on-form'>Sign Up</div>
      <ul>
        {errors.map(error => <li key={error} id='auth-error'>{error}</li>)}
      </ul>
      <div className='login-signup-item-container'>
        <input
          className='login-signup-item'
          type="text"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          placeholder="email"
        />
      </div>
      <br />
      <div className='login-signup-item-container'>
        <input
          className='login-signup-item'
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
          placeholder="username"
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
          placeholder="password"
        />
      </div>
      <br />
      <div className='login-signup-item-container'>
        <input
          className='login-signup-item'
          type="password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          required
          placeholder="confirm password"
        />
      </div>
      <br />
      {/* <div id="icons-on-signup-container">
        <i tabIndex={1} className="fa-solid fa-kiwi-bird fa-2x user-icon" />
        <i tabIndex={1} className="fa-solid fa-otter fa-2x user-icon" />
        <i tabIndex={1} className="fa-solid fa-cat fa-2x user-icon" />
        <i tabIndex={1} className="fa-solid fa-dog fa-2x user-icon" />
      </div>
      <br /> */}
      <div className='login-signup-item-container'>
        <button type="submit" className='login-signup-item airbnz-button' id='login-signup-submit-button'>Sign Up</button>
      </div>
    </form>
  );
}

export default SignupForm;

import './LoginScreen.css'
import { useState } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';

const LoginScreen = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState(null);
  const navigate = useNavigate();

  const submitHandler = async (e) => {
    e.preventDefault();

    try {
      const config = {
        headers: { 'Content-Type': 'application/json' },
      };
      const response = await axios.post(process.env.REACT_APP_API_URL+'users/login', { email, password },config);
      const token = response.data.token; // Get token from the response
      localStorage.setItem("token", token); // Save token in localStorage
      navigate('/home');
    } catch (error) {
      setMessage(error.response?.data.message || error.message);
    }
  };

  return (
    <form className='login-form' onSubmit={submitHandler}>
      <h1>Login</h1>
      {message && <p>{message}</p>}
      <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
      <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
      <button type="submit">Login</button>
      <span>Don't have an account? <Link to={'/register'}>Register</Link></span>
    </form>
  );
};

export default LoginScreen;
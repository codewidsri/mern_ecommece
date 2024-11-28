import { useState } from 'react';
import axios from 'axios';
import "./RegisterScreen.css";
import { Link,useNavigate } from 'react-router-dom';

const RegisterScreen = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState(null);
  const navigate=useNavigate();
  
  const submitHandler = async (e) => {
    e.preventDefault();

    try {
      const config = {
        headers: { 'Content-Type': 'application/json' },
      };
      const { data } = await axios.post(process.env.REACT_APP_API_URL+'users/register', { name, email, password }, config);
      console.log('Registered:', data);
    } catch (error) {
      setMessage(error.response?.data.message || error.message);
    }

   navigate('/login');
  };

  return (
    <form className='register-form' onSubmit={submitHandler}>
      <h1>Register</h1>
      {message && <p>{message}</p>}
      <input type="text" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} />
      <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
      <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
      <button type="submit">Register</button>
      <span>Have an account <Link to={'/login'}>Login</Link></span>
    </form>
  );
};

export default RegisterScreen;

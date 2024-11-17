import { useState } from 'react';
import axios from 'axios';

const LoginScreen = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState(null);

  const submitHandler = async (e) => {
    e.preventDefault();

    try {
      const config = {
        headers: { 'Content-Type': 'application/json' },
      };

      const { data } = await axios.post('/api/users/login', { email, password }, config);
      console.log('Logged in:', data);
    } catch (error) {
      setMessage(error.response?.data.message || error.message);
    }
  };

  return (
    <form onSubmit={submitHandler}>
      <h1>Login</h1>
      {message && <p>{message}</p>}
      <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
      <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
      <button type="submit">Login</button>
    </form>
  );
};

export default LoginScreen;

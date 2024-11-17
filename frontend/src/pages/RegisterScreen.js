import { useState } from 'react';
import axios from 'axios';
import "./RegisterScreen.css";

const RegisterScreen = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState(null);

  const submitHandler = async (e) => {
    e.preventDefault();

    try {
      const config = {
        headers: { 'Content-Type': 'application/json' },
      };

      const { data } = await axios.post('/api/users/register', { name, email, password }, config);
      console.log('Registered:', data);
    } catch (error) {
      setMessage(error.response?.data.message || error.message);
    }
  };

  return (
    <form onSubmit={submitHandler}>
      <h1>Register</h1>
      {message && <p>{message}</p>}
      <input type="text" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} />
      <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
      <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
      <button type="submit">Register</button>
    </form>
  );
};

export default RegisterScreen;

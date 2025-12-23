import React from 'react';
import UserContext from '../context/UserContext';
import { useContext } from 'react';

function Login() {
  const [username, setUsername] = React.useState('');
  const [password, setPassword] = React.useState('');

  const { setUser } = useContext(UserContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    setUser({ username, password });
  };

  return (
    <div>
      <input type="text" value={username} placeholder="username" onChange={(e) => setUsername(e.target.value)} />
      <input type="text" value={password} placeholder="password" onChange={(e) => setPassword(e.target.value)} />
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
}

export default Login;

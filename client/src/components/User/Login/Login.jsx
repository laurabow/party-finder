import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { loginUser } from '../../../services/user';


export default function Login() {

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  return (
    <div>
      <form>
        <label>Username</label>
        <input
          required
          autoFocus
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <label>Password</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button>Login</button>
      </form>
    </div>
  )
}

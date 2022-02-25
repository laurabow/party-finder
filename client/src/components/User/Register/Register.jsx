import { useState } from 'react';
import { registerUser } from '../../../services/user';
import { useNavigate } from 'react-router-dom';

export default function Register(props) {

  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  
  const navigate = useNavigate();

  return (
    <div>
      <form onSubmit={async (e) => {
          e.preventDefault()
          const user = {
            username,
            email,
            password
          }
        const resp = await registerUser(user)
        props.setCurrentUser(resp)
        navigate('/')
        }
      }>
        <label>Username</label>
        <input
          required
          autoFocus
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <label>Email</label>
        <input
          required
          type="text"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <label>Password</label>
        <input
          required
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button>Register</button>
      </form>
    </div>
  )
}

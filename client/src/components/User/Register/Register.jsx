import { useState } from 'react';
import { registerUser } from '../../../services/user';
import { useNavigate } from 'react-router-dom';
import Layout from '../../UI/Layout/Layout';
import './Register.css';
import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';


const StyledTooltip = styled(({ className, ...props }) => (
  <Tooltip {...props} classes={{ popper: className }} />
))`
  & .MuiTooltip-tooltip {
    background: navy;
  }
`;

export default function Register(props) {

  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  
  const navigate = useNavigate();

  return (
    <Layout>
      <div className='register-page'>
        <h1 className='register-title'>Register</h1>
        <div className='register-form-container'>
          <form className='register-form'
            onSubmit={async (e) => {
              e.preventDefault()
              const user = {
                username,
                email,
                password
              }
            const resp = await registerUser(user)
            props.setCurrentUser(resp)
            navigate('/posts')
            }
          }>
            <label className='reg-username'>Username</label>
            <input
              required
              autoFocus
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
            <label className='reg-email'>Email</label>
            <input
              required
              type="text"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <label className='reg-password'>Password</label>
            <input
              required
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <button className='reg-form-btn'>Register</button>
          </form>
        </div>
      </div>
    </Layout>
  )
}

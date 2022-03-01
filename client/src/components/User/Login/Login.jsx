import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { loginUser } from '../../../services/user';
import Layout from '../../UI/Layout/Layout';
import './Login.css';
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


export default function Login(props) {

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  return (
    <Layout>
      <div className='login-page'>
        <h1 className='login-title'>Login</h1>
        <div className='login-form-container'>
          <form
            className='login-form'
            onSubmit={async (e) => {
              e.preventDefault()
              const user = {
                username,
                password
              }
              const resp = await loginUser(user)
              props.setCurrentUser(resp)
              navigate('/posts');
            }
          }>
            <label className='login-username'>Username</label>
            <input
              required
              autoFocus
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
            <label className='login-password'>Password</label>
            <input
              required
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <StyledTooltip title="Create Party">
              <Button
                id='login-form-btn'
                variant="contained"
                color="primary">
                Login
              </Button>
            </StyledTooltip>
          </form>
        </div>
      </div>
    </Layout>
  )
}

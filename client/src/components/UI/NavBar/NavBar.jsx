import React from 'react'
import './NavBar.css';
import { Link } from "react-router-dom";
import { D20 } from '../../../assets/index.js';
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

export default function NavBar(props) {
  return (
    <div className='navbar'>
      <div className='party-finder'>
        <Link to='/'>
          <div className='logo'>
            <img className='dice' src={D20} alt="red d 20" height='30px'/>
            <h1 className='pf-nav-title'>Party Finder</h1>
          </div>
        </Link>
      </div>
      <div className='welcome-buttons'>
        {props.currentUser ?
        <div className='welcome-buttons'>
            <h4>Welcome, {props.currentUser.username}!</h4>
            <Link to='/posts'>
              <StyledTooltip title="Find a Party">
                  <Button
                    variant="contained"
                    color="primary"
                    size="small">
                    Find a Party!
                  </Button>
                </StyledTooltip>
            </Link>
            <Link to='/posts/create'>
              <StyledTooltip title="Create a Party">
                <Button
                  variant="contained"
                  color="primary"
                  size="small">
                  Create a Party!
                </Button>
              </StyledTooltip>
            </Link>
              <StyledTooltip title="Logout">
                <Button
                  onClick={props.logout}
                  variant="contained"
                  color="primary"
                  size="small">
                    Logout
                  </Button>
                </StyledTooltip>
          </div>
          :
          <>
            <Link to='/posts'>
              <StyledTooltip title="Find a Party">
                <Button
                  variant="contained"
                  color="primary"
                  size="small">
                    Find a Party!
                </Button>
              </StyledTooltip>
            </Link>
            <Link to='/login'>
              <StyledTooltip title="Login">
                <Button
                  variant="contained"
                  color="primary"
                  size="small">
                    Login
                </Button>
              </StyledTooltip>
            </Link>
            <Link to='/register'>
              <StyledTooltip title="Register">
                <Button
                  variant="contained"
                  color="primary"
                  size="small">
                    Register
                </Button>
              </StyledTooltip>
            </Link>
          </>
          }
      </div>
    </div>
  )
}



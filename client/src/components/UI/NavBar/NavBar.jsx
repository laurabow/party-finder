import React from 'react'
import './NavBar.css';
import { Link } from "react-router-dom";
import { D20 } from '../../../assets/index.js';
// import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';
// import Tooltip from '@mui/material/Tooltip';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';

// const StyledTooltip = styled(({ className, ...props }) => (
//   <Tooltip {...props} classes={{ popper: className }} />
// ))`
//   & .MuiTooltip-tooltip {
//     background: navy;
//   }
// `;

export default function NavBar(props) {

  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

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
            <h4 className='welcome'>Welcome, {props.currentUser.username}!</h4>
            <Button
              id="basic-button"
              variant="contained"
              aria-controls={open ? 'basic-menu' : undefined}
              aria-haspopup="true"
              aria-expanded={open ? 'true' : undefined}
              onClick={handleClick}
            >
              Menu
            </Button>
            <Menu
              id="basic-menu"
              anchorEl={anchorEl}
              open={open}
              onClose={handleClose}
              MenuListProps={{
                'aria-labelledby': 'basic-button',
              }}
            >
            <Link to='/posts'>
              <MenuItem onClick={handleClose}>Find a Party!</MenuItem>
            </Link>
              
            <Link to='/posts/create'>
              <MenuItem onClick={handleClose}>Create a Party!</MenuItem>
            </Link>
              <MenuItem onClick={props.logout}>Logout</MenuItem>
            </Menu>
          </div>
          :
          <>
            <Button
              id="basic-button"
              aria-controls={open ? 'basic-menu' : undefined}
              aria-haspopup="true"
              aria-expanded={open ? 'true' : undefined}
              onClick={handleClick}
            >
              Menu
            </Button>
            <Menu
              id="basic-menu"
              anchorEl={anchorEl}
              open={open}
              onClose={handleClose}
              MenuListProps={{
                'aria-labelledby': 'basic-button',
              }}
            >
              <Link to='/posts'>
                <MenuItem onClick={handleClose}>Find a Party!</MenuItem>
              </Link>
              <Link to='/login'>
                <MenuItem onClick={handleClose}>Login</MenuItem>
              </Link>
              <Link to='/register'>
                <MenuItem onClick={handleClose}>Register</MenuItem>
              </Link>
            </Menu>
          </>
          }
      </div>
    </div>
  )
}



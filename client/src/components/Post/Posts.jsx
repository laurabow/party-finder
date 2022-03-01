import React from 'react'
import moment from 'moment';
import './Posts.css';
import { Link } from 'react-router-dom';
import Layout from '../UI/Layout/Layout';
import Card from '@mui/material/Card';
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

export default function Posts(props) {

  const getPostMoment = (post) => {
    return `${post.day}'s at ${moment(post.time.substring(0, 19)).format('LT')}`
  }

  return (
    <Layout>
      <div className='find-party'>
        <h1 className='find-party-title'>Find a Party!</h1>
        {
          props.currentUser &&
          // <Link to='/posts/create'><button>Create a Party!</button></Link>
          <div>
              <Link to='/posts/create'>
                <StyledTooltip title="Create">
                  <Button variant="contained" color="primary">
                    Create a Party!
                  </Button>
                </StyledTooltip>
              </Link>
          </div>
        }
        <div className='cards'>
          {
            props.posts.map(post => (
              <Link key={post.id} to={`/posts/${post.id}`}>
                <Card variant='outlined' className='post-card'>
                  <h2>{post.title}</h2>
                  <h3>Game Master: {post.user?.username}</h3>
                  <h3>{post.game_system}</h3>
                  <h3>{getPostMoment(post)}</h3>
                  <p>{post.description}</p>
                </Card>
              </Link>
            ))
          }
        </div>
      </div>
    </Layout>
  )
}

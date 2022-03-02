import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import Comments from '../Comment/Comments';
import CommentCreate from '../Comment/CommentCreate';
import Layout from '../UI/Layout/Layout';
// import PageNotFound from '../404/PageNotFound';
import { createComment, deleteComment, getPostComments } from '../../services/comments';
import './PostDetail.css';
import moment from 'moment';
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

export default function PostDetail(props) {

  const [post, setPost] = useState({});
  const [comments, setComments] = useState([]);
  const [toggle, setToggle] = useState(false);
  const { id } = useParams();

  useEffect(() => {
    const foundPost = props.posts.find(post => {
      return post.id === parseInt(id)
    })
    const fetchComments = async () => {
      const comments = await getPostComments(id);
      setComments(comments);
    }
    fetchComments();
    setPost(foundPost);
  }, [id, props.post, props.posts, toggle]);

  console.log(props.post)
  console.log(post);
  
  const handleCommentCreate = async (formData) => {
    await createComment(id, formData)
    setToggle(prevToggle => !prevToggle)
  }

  

  const handleCommentDelete = async (comment_id) => {
    await deleteComment(id, comment_id)
    setToggle(prevToggle => !prevToggle)
  }

  const getPostMoment = (post) => {
    return `${post.day}'s at ${moment(post.time.substring(0, 19)).format('LT')}`
  }

  return (
    <Layout>
      <div className='post-detail'>
        <h1 className='detail-title'>Party Details</h1>
        {
          post?.id ?
            <>
              <div className='post-detail-card'>
                <h2 className='card-h2'>{post.title}</h2>
                <h3>Game Master: {post.user?.username}</h3>
                <h3>{post.game_system}</h3>
                <h3>{getPostMoment(post)}</h3>
                <p>{post.description}</p>
              </div>
              {
                props.currentUser?.id === post.user_id ?
                <>
                    <Link to={`/posts/${post.id}/edit`}>
                      <StyledTooltip title="Edit">
                        <Button variant="contained" color="primary">
                          Edit
                        </Button>
                      </StyledTooltip>
                    </Link>

                      <StyledTooltip title="Delete">
                        <Button
                          onClick={() => props.handleDelete(post.id)}
                          variant="contained"
                          color="primary">
                            Delete
                        </Button>
                      </StyledTooltip>
                </>
                :
                null
              }
              {
                props.currentUser?.id ?
                <>
                  <CommentCreate handleCommentCreate={handleCommentCreate}/>
                </>
                  :
                  <div>
                    <p className='login-suggestion'>Login to leave a comment!</p>
                    <Link to='/login'>
                    <StyledTooltip title="Login">
                        <Button id='detail-login-btn'
                          variant="contained"
                          color="primary">
                          Login
                        </Button>
                      </StyledTooltip>
                    </Link>

                    <Link to='/register'>
                      <StyledTooltip title="Register">
                        <Button id='detail-register-btn'
                          variant="contained"
                          color="primary">
                          Register
                        </Button>
                      </StyledTooltip>
                    </Link>
                  </div>
              }
              <div className='comments'>
                <Comments
                  comments={comments}
                  post={post}
                  currentUser={props.currentUser}
                  handleCommentDelete={handleCommentDelete}
                />
              </div>
            </>
            :
            <div>
              <h3>Sorry, no party found!</h3>
            </div>
            
        }
      </div>
    </Layout>
  )
}

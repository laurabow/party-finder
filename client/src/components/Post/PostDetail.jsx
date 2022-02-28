import { useState, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import Comments from '../Comment/Comments';
import CommentCreate from '../Comment/CommentCreate';
import CommentEdit from '../Comment/CommentEdit';
import { createComment, deleteComment, getPostComments, updateComment } from '../../services/comments';
import './PostDetail.css';
import moment from 'moment';

export default function PostDetail(props) {

  const [post, setPost] = useState({});
  const [comments, setComments] = useState([]);
  const [toggle, setToggle] = useState(false);
  const { id } = useParams();

  const navigate = useNavigate();

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
  }, [id, props.post, toggle]);

  console.log(props.post)
  console.log(post);
  
  const handleCommentCreate = async (formData) => {
    await createComment(id, formData)
    setToggle(prevToggle => !prevToggle)
  }

  const handleCommentEdit = async (id, formData) => {
    await updateComment(id, formData)
    setToggle(prevToggle => !prevToggle)
    navigate(`/posts/${id}/comments/${id}`)
  }

  const handleCommentDelete = async (comment_id) => {
    await deleteComment(id, comment_id)
    setToggle(prevToggle => !prevToggle)
  }

  const getPostMoment = (post) => {
    return `${post.day}'s at ${moment(post.time.substring(0, 19)).format('LT')}`
  }

  return (
    
    <div>
      {
        post?.id ?
          <>
            <div className='post-detail-card'>
              <h2>{post.title}</h2>
              <h3>user: {post.user_id}</h3>
              <h3>{post.game_system}</h3>
              {/* <h3>{post.day}'s at {post.time.substring(11, 16)}</h3> */}
              <h3>{getPostMoment(post)}</h3>
              <p>{post.description}</p>
            </div>
            {
              props.currentUser?.id === post.user_id ?
              <>
                  <Link to={`/posts/${post.id}/edit`}>
                    <button>Edit</button>
                  </Link>
                <button onClick={() => props.handleDelete(post.id)}>Delete</button>
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
                  <p>Login to leave a comment!</p>
                  <Link to='/login'><button>Login</button></Link>
                  <Link to='/register'><button>Register</button></Link>
                </div>
            }
            <Comments
              comments={comments}
              currentUser={props.currentUser}
              handleCommentDelete={handleCommentDelete}
              handleCommentEdit={handleCommentEdit}
            />
          </>
          :
          <h3>Sorry, no party found!</h3>
      }
    </div>
  )
}

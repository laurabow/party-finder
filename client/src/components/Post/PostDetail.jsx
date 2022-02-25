import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import Comments from '../Comment/Comments';
import CommentCreate from '../Comment/CommentCreate';
import CommentEdit from '../Comment/CommentEdit';
import { createComment, deleteComment, getPostComments } from '../../services/comments';
// import comment stuff

export default function PostDetail() {

  const [post, setPost] = useState({});
  const [comments, setComments] = useState([]);
  const [toggle, setToggle] = useState(false);
  const { id } = useParams();

  useEffect(() => {
    const foundPost = props.post.find(post => {
      return post.id === parseInt(id)
    })
    const fetchComments = async () => {
      const comments = await getPostComments(id);
      setComments(comments);
    }
    fetchComments();
    setPost(foundPost);
  }, [id, props.posts, toggle]);

  const handleCommentCreate = async (formData) => {
    await createComment(id, comment_id)
    setToggle(prevToggle => !prevToggle)
  }

  handleCommentDelete = async (comment_id) => {
    await deleteComment(id, comment_id)
    setToggle(prevToggle => !prevToggle)
  }

  return (
    <div>
      {
        post?.id ?
          <>
            <h2>{post.title}</h2>
            <h3>{post.game_system}</h3>
            <h3>{post.day} at TIME</h3>
            <p>{post.description}</p>

            {
              props.currentUser?.id === post.user_id ?
              <>
                  <Link to={`/posts/${post.id}/edit`}>
                    <button>Edit</button>
                  </Link>
                <button onClick={() => props.handleDelete(product.id)}>Delete</button>
              </>
              :
              null
            }
            <CommentCreate handleCommentCreate={handleCommentCreate}/>
            <Reviews
              comments={comments}
              currentUser={props.currentUser}
              handleCommentDelete={handleCommentDelete}
            />
          </>
          :
          <h3>Sorry, no party found!</h3>
      }
    </div>
  )
}

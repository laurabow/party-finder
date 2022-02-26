import { useState, useEffect } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import { getAllPosts, createPost, updatePost, deletePost } from '../services/posts';
import PostDetail from '../components/Post/PostDetail';
import Posts from '../components/Post/Posts';
import PostCreate from '../components/Post/PostCreate';
import PostEdit from '../components/Post/PostEdit';

export default function PostContainer() {

  const [posts, setPosts] = useState([]);
  const [toggle, setToggle] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchPosts = async () => {
      const posts = await getAllPosts()
      setPosts(posts)
    }
    fetchPosts()
  }, [toggle]);

  const handleCreate = async (formData) => {
    await createPost(formData)
    setToggle(prevToggle => !prevToggle);
    navigate('/posts');
  }

  const handleEdit = async (id, formData) => {
    await updatePost(id, formData);
    setToggle(prevToggle => !prevToggle);
    navigate(`/posts/${id}`);
  }

  const handleDelete = async (id) => {
    await deletePost(id);
    setToggle(prevToggle => !prevToggle);
    navigate('/posts');
  }
  
  return (
    <div>
      
    </div>
  )
}

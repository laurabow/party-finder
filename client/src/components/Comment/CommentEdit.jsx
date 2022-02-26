import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

export default function CommentEdit(props) {

  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const { id } = useParams();

  return (
    <div>CommentEdit</div>
  )
}

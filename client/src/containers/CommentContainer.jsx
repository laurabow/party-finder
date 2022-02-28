import { useState, useEffect } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import CommentCreate from '../components/Comment/CommentCreate';
import CommentEdit from '../components/Comment/CommentEdit';
import Comments from '../components/Comment/Comments';

export default function CommentContainer() {
  return (
    <div>
      <Routes>
        {/* <Route path='' element={<PostEdit />} /> */}
      </Routes>
    </div>
  )
}

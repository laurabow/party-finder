import './App.css';
import { Routes, Route } from "react-router-dom";
import { useState, useEffect } from 'react';
import { verifyUser } from './services/user.js';
import Home from './components/Home/Home';
import Register from './components/User/Register/Register.jsx';
import Login from './components/User/Login/Login.jsx';
import PostContainer from './containers/PostContainer.jsx';
import NavBar from './components/UI/NavBar/NavBar';


function App() {

  const [currentUser, setCurrentUser] = useState(null);

  useEffect(() => {
    const getUser = async () => {
      const user = await verifyUser();
      setCurrentUser(user);
    }
    getUser();
  }, []);

  const logout = () => {
    localStorage.removeItem('authToken')
    setCurrentUser(null);
  }

  return (
    <div className="App">
      {currentUser && <NavBar currentUser={currentUser} logout={logout}/>}
      <Routes>
        
        <Route path='/register' element={<Register setCurrentUser={setCurrentUser}/>} />
        <Route path='/login' element={<Login setCurrentUser={setCurrentUser}/>} />
        <Route path='posts/*' element={<PostContainer currentUser={currentUser} />} />
        <Route path="*" element={<Home currentUser={currentUser} />} />
      </Routes>
    </div>
  );
}

export default App;

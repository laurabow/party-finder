import './App.css';
import { Routes, Route } from "react-router-dom";
import Home from './components/Home/Home';
import Register from './components/User/Register/Register.jsx';
import Login from './components/User/Login/Login.jsx';
import PostContainer from './containers/PostContainer.jsx';


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path='/register' element={<Register />} />
        <Route path='/login' element={<Login />} />
        <Route path='posts/*' element={<PostContainer />} />
      </Routes>
    </div>
  );
}

export default App;

import { useState } from 'react';
import { registerUser } from '../../../services/user';
import { useNavigate } from 'react-router-dom';

export default function Register() {

  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  
  const navigate = useNavigate();

  return (
    <div>
      <form>
        <label>Username</label>
        <input
          
        />
      </form>
    </div>
  )
}

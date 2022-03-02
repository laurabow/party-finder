import { useState } from 'react';
import Layout from '../UI/Layout/Layout';
import './PostCreate.css';



let days = [
	{ day: "Sunday", key: "SUN" },
	{ day: "Monday", key: "MON" },
  { day: "Tuesday", key: "TUES" },
  { day: "Wednesday", key: "WED" },
  { day: "Thursday", key: "THUR" },
  { day: "Friday", key: "FRI" },
  { day: "Saturday", key: "SAT" }
];

export default function PostCreate(props) {

  const [title, setTitle] = useState('');
  const [game_system, setGameSystem] = useState('')
  const [day, setDay] = useState("Select a Day");
  const [time, setTime] = useState('') // what state is time?
  const [description, setDescription] = useState('')

  const handleDateChange = e => {
    setDay(e.target.value);
  };

  return (
    <Layout>
      <div className='create-page'>
        <h1 className='create-title'>Create a Party Post</h1>
        <div className='form-container'>
          <form className='create-form'
            onSubmit={(e) => {
            e.preventDefault()
            const post = {
              title,
              game_system,
              day,
              time,
              description
            }
            props.handleCreate(post);
          }}>
            <label className='party-name'>Party Name</label>
            <input
              required
              autoFocus
              type="text"
              value={title}
              placeholder="Name your Party!"
              onChange={(e) => setTitle(e.target.value)}
            />
            <label className='game-system'>Game System</label>
            <input
              required
              type="text"
              value={game_system}
              placeholder="Dungeons and Dragons"
              onChange={(e) => setGameSystem(e.target.value)}
            />
            <label className='day'>Day</label>
            <select onChange={handleDateChange}>
              <option value={day}> -- Select a Day -- </option>
              {days.map(({ key, day }) => (
                <option key={key} value={key}>
                  {day}
                </option>
              ))}
            </select>
            <label className='time'>Time</label>
            <input
              required
              type="time"
              value={time}
              onChange={(e) => setTime(e.target.value)}
            />
            <label className='description'>Description</label>
            <textarea
              required
              type="text"
              value={description}
              placeholder="Describe your game and party"
              onChange={(e) => setDescription(e.target.value)}
            />
            <button className='create-form-btn'>Create Party Post</button>
          </form>
        </div>
      </div>
    </Layout>
  )
}





import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import './PostEdit.css';
import Layout from '../UI/Layout/Layout';



let days = [
	{ day: "Sunday", key: "SUN" },
	{ day: "Monday", key: "MON" },
  { day: "Tuesday", key: "TUES" },
  { day: "Wednesday", key: "WED" },
  { day: "Thursday", key: "THUR" },
  { day: "Friday", key: "FRI" },
  { day: "Saturday", key: "SAT" }
];

export default function PostEdit(props) {

  const [title, setTitle] = useState('');
  const [game_system, setGameSystem] = useState('');
  const [day, setDay] = useState("Select a Day");
  const [time, setTime] = useState('') // what state is time?
  const [description, setDescription] = useState('');

  const { id } = useParams();

  useEffect(() => {
    const foundPost = props.posts.find(post => {
      return post.id === parseInt(id);
    })
    if (foundPost) {
      setTitle(foundPost?.title)
      setGameSystem(foundPost?.game_system)
      setDay(foundPost?.day)
      // time goes here
      setDescription(foundPost?.description)
    }
  }, [id, props.posts]);

  const handleDateChange = e => {
    setDay(e.target.value);
  };


  return (
    <Layout>
      <div className='edit-post-page'>
        <h1 className='edit-post-title'>Edit Post</h1>
        <div className='edit-post-container'>
          <form
            className='edit-post-form'
            onSubmit={(e) => {
            e.preventDefault()
            const post = {
              title,
              game_system,
              day,
              // time,
              description
            }
            props.handleEdit(id, post)
          }}>
            <label className='edit-party-name'>Party Name</label>
            <input
              autoFocus
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
            <label className='edit-game-sys'>Game System</label>
            <input
              type="text"
              value={game_system}
              onChange={(e) => setGameSystem(e.target.value)}
            />
            <label className='edit-day'>Day</label>
            <select onChange={handleDateChange}>
              <option value={day}> -- Select a Day -- </option>
              {days.map(({ key, day }) => (
                <option key={key} value={key}>
                  {day}
                </option>
              ))}
            </select>
            <label className='edit-time'>Time</label>
            <input
                type="time"
                value={time}
                onChange={(e) => setTime(e.target.value)}
              />
            <label className='edit-description'>Description</label>
            <textarea
              type="text"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
            <button className='edit-form-btn'>Edit Party Post</button>
          </form>
        </div>
      </div>
    </Layout>
  )
}

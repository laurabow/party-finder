import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';


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
    <div>
      <form onSubmit={(e) => {
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
        <label>Party Name</label>
        <input
          autoFocus
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <label>Game System</label>
        <input
          type="text"
          value={game_system}
          onChange={(e) => setGameSystem(e.target.value)}
        />
        <label>Day</label>
        <select onChange={handleDateChange}>
          <option value={day}> -- Select a Day -- </option>
          {days.map(({ key, day }) => (
            <option key={key} value={key}>
              {day}
            </option>
          ))}
        </select>
        <label>Time</label>
        <input
            required
            type="time"
            value={time}
            onChange={(e) => setTime(e.target.value)}
          />
        <label>Description</label>
        <textarea
          type="text"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <button>Update</button>
      </form>
    </div>
  )
}

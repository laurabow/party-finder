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

export default function PostEdit() {

  const [title, setTitle] = useState('');
  const [game_system, setGameSystem] = useState('');
  const [day, setDay] = useState("Select a Day");
  // const [time, setTime] = useState() // what state is time?
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


  return (
    <div>PostEdit</div>
  )
}

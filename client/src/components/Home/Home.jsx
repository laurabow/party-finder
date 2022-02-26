import React from 'react'
import Layout from '../UI/Layout/Layout'

export default function Home() {
  return (
    <div>
      <Layout>
        <h1 className="homepage-title">Welcome to party finder!</h1>
        <p className='homepage-intro'>Party Finder is an online platform for players to find tabletop roleplaying games and Game Master who run them. Game masters also have a place to make posts about games they are running to find their party. Are you looking to play D&D online? Maybe you've always wanted to try Pathfinder or explore space with a rag tag crew in the world of Stars Without Number. We're one part player finder and one part party finder! If you have a grand adventure already planned and just need to find a party to make your vision come to life, make a post and find your party! If you're looking for a game, simply click on a post to leave a comment for the Game Master saying you'd like to join the party. Find a game that works for you and your schedule here at <strong>Party Finder!</strong></p>
      </Layout>
    </div>
  )
}

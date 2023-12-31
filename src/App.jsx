import React, { useState } from "react"
import { Party, UserForm, Playing } from "./components"
import { useData } from "./contexts"
import "./App.css"

export default function App() {
  const { turn, user1, user2 } = useData()

  return (
    <>
      {turn && <h1>{user1}'s turn to play! </h1>}
      {!turn && <h1>{user2}'s turn to play!</h1>}
      
      <Playing/>
      <div className="player">
        {user1 === "Player 1" && <UserForm player={user1} />}

        <Party player={user1} />
      </div>
      <div className="player">
        {user2 === "Player 2" && <UserForm player={user2} />}

        <Party player={user2} />
      </div>

    </>
  )
}
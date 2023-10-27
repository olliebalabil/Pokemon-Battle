import React, { useState } from "react"
import { Party, UserForm, Playing } from "./components"
import { useData } from "./contexts"

export default function App() {
  const { user1, user2 } = useData()

  return (
    <>
      <div className="player">
        {user1==="Player 1" && <UserForm player={user1} />}
        
        <Party player={user1}/>
        <Playing />
      </div>
      <div className="player">
        {user2==="Player 2" && <UserForm player={user2} />}
      
        <Party player={user2}/>
        <Playing />
      </div>
    </>
  )
}
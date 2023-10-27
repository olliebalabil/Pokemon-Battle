import React, { useState, useEffect } from "react"
import { useData } from "../../contexts"
export default function Playing({ player }) {
  const { user1, user2, pokemon1, pokemon2 } = useData()
  let image1 = ""
  let image2 = ""
  useEffect(()=> {
    image1 = pokemon1.sprite
    image2 = pokemon2.sprite
  },[pokemon1,pokemon2])
  return (
    <>
      
      {player===user1 && <img src={image1} />}
      {player === user2 && <img src={image2} />}

    </>
  )
}
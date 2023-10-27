import React, { useState, useEffect } from "react"
import { useData } from "../../contexts"
export default function Playing({ player }) {
  const { user1, user2, pokemon1, pokemon2,setPokemon1,setPokemon2 , party1,party2} = useData()

  useEffect(()=> {
    setPokemon1(party1[0])
    setPokemon2(party2[0])
  },[])
  
  return (
    <>
      
      {player===user1 && <img src={pokemon1.sprite} />}
      {player === user2 && <img src={pokemon2.sprite} />}

    </>
  )
}
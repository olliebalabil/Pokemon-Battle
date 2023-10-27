import React, { useState, useEffect } from "react"
import { useData } from "../../contexts"
export default function Playing({ player }) {
  const { user1, user2, pokemon1, pokemon2, setPokemon1, setPokemon2, party1, party2 } = useData()

  useEffect(() => {
    setPokemon1(party1[0])

  }, [user1])

  useEffect(() => {
    setPokemon2(party2[0])

  }, [user2])

  return (
    <>

      {player === user1 && user1 != "Player 1" && <div>
        <img src={pokemon1.sprite} />
        <p>{user1}'s {pokemon1.name}</p>
        <p>HP: {pokemon1.currentHP}</p>
        <div>
          {user1 != "Player 1" &&
            <div>{pokemon1.moves.map((el) => <button>{el.name}</button>)}</div>
          }
        </div>

      </div>}
      {player === user2 && user2 != "Player 2" && <div>
        <img src={pokemon2.sprite} />
        <p>{user2}'s {pokemon2.name}</p>
        <p>HP: {pokemon2.currentHP}</p>
        {user2 != "Player 2" &&
            <div>{pokemon2.moves.map((el) => <button>{el.name}</button>)}</div>
          }

      </div>
      }

    </>
  )
}
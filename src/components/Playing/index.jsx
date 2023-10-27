import React, { useState, useEffect } from "react"
import { useData } from "../../contexts"
export default function Playing({ player }) {
  const { turn, setTurn, user1, user2, pokemon1, pokemon2, setPokemon1, setPokemon2, party1, party2 } = useData()
  const [hp1,setHp1] = useState(0)
  const [hp2,setHp2] = useState(0)

  useEffect(() => {
    setPokemon1(party1[0])
  }, [user1])

  useEffect(() => {
    setPokemon2(party2[0])
  }, [user2])

  useEffect(()=> {
    setHp1(pokemon1.currentHP)
  },[pokemon1])
  useEffect(()=> {
    setHp2(pokemon2.currentHP)
  },[pokemon2])


  const handleMove = (e) => {
    if ((player == user1 && turn) || (player == user2 && !turn)) {
      // get power of clicked move
      const getPower = async () => {
        const response = await fetch(e.target.attributes[0].nodeValue)
        const data = await response.json()
        console.log(data.power)
        setHp2(prevState => prevState - data.power)
        console.log(hp2)
        setTurn(!turn)
      }
      getPower()
      //minus power from opponents hp
    }
  }


  return (
    <>

      {player === user1 && user1 != "Player 1" && <div>
        <img src={pokemon1.sprite} />
        <p>{user1}'s {pokemon1.name}</p>
        <p>HP: {hp1}</p>
        <div>
          {user1 != "Player 1" &&
            <div>{pokemon1.moves.map((el, i) => <button url={el.url} onClick={handleMove} key={i}>{el.name}</button>
            )}</div>
          }
        </div>

      </div>}
      {player === user2 && user2 != "Player 2" && <div>
        <img src={pokemon2.sprite} />
        <p>{user2}'s {pokemon2.name}</p>
        <p>HP: {hp2}</p>
        {user2 != "Player 2" &&
          <div>{pokemon2.moves.map((el, i) => <button url={el.url} key={i} onClick={handleMove}>{el.name}</button>
          )}</div>
        }

      </div>
      }

    </>
  )
}
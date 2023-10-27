import React, { useState, useEffect } from "react"
import { useData } from "../../contexts"
export default function Playing() {
  const { turn, setTurn, user1, user2, pokemon1, pokemon2, setPokemon1, setPokemon2, party1, party2, setParty1,setParty2 } = useData()
  const [hp1, setHp1] = useState(0)
  const [hp2, setHp2] = useState(0)
  const [message, setMessage] = useState("")
  useEffect(() => {
    setPokemon1(party1[0])
  }, [user1])

  useEffect(() => {
    setPokemon2(party2[0])
  }, [user2])

  useEffect(() => {
    setHp1(pokemon1.currentHP)
  }, [pokemon1])
  useEffect(() => {
    setHp2(pokemon2.currentHP)
  }, [pokemon2])

  useEffect(() => {
    if (hp1 < 0) {
      setMessage(`${pokemon1.name} has fainted!!`)
    }
    setParty1(party1.filter((el)=> el.name!=pokemon1.name))
  }, [hp1])
  useEffect(() => {
    if (hp2 < 0) {
      setMessage(`${pokemon2.name} has fainted!!`)
    }
    setParty1(party2.filter((el)=> el.name!=pokemon2.name))

  }, [hp2])

  const handleMove = (e) => {
    // get power of clicked move
    if (turn) {
      const getPower = async () => {
        const response = await fetch(e.target.attributes[0].nodeValue)
        const data = await response.json()

        setHp2(prevState => prevState - data.power)
        console.log(data.power, hp2)
        setMessage(`${user1}: ${pokemon1.name}, use ${e.target.value}!`)
        setTurn(!turn)
      }
      getPower()
    }
    if (!turn) {
      const getPower = async () => {
        const response = await fetch(e.target.attributes[0].nodeValue)
        const data = await response.json()
        setHp1(prevState => prevState - data.power)
        console.log(data.power, hp1)


        setMessage(`${user2}: ${pokemon2.name}, use ${e.target.value}!`)

        setTurn(!turn)
      }
      getPower()
    }
  }


  return (
    <>

      {user1 != "Player 1" && <div>
        <img src={pokemon1.sprite} />
        <p>{user1}'s {pokemon1.name}</p>
        <p>HP: {hp1}</p>
        <div>

          <div>{pokemon1.moves.map((el, i) => <button url={el.url} onClick={handleMove} key={i} value={el.name}>{el.name}</button>
          )}</div>

        </div>

      </div>}
      {user2 != "Player 2" && <div>
        <img src={pokemon2.sprite} />
        <p>{user2}'s {pokemon2.name}</p>
        <p>HP: {hp2}</p>

        <div>{pokemon2.moves.map((el, i) => <button url={el.url} key={i} onClick={handleMove} value={el.name}>{el.name}</button>
        )}</div>
        <p>{message}</p>

      </div>
      }

    </>
  )
}
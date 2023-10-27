import React, { useState, useEffect } from "react"
import { useData } from "../../contexts"

export default function Party({ player }) {
  const { user1, user2, party1, setParty1, party2, setParty2 } = useData()

  useEffect(() => {
    const getParty = async () => {
      if (player = user1) {

        const pokemon = ["gyarados", "dragonite", "jolteon", "venusaur", "charizard", "blastoise"
        ]

        let pokemonData = []

        for (let i = 0; i < pokemon.length; i++) {
          const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon[i]}`)
          const data = await response.json()
          pokemonData.push({
            id: data.id,
            name: data.species.name,
            sprite: data.sprites.front_default,
            backSprite: data.sprites.back_default,
            currentHP: data.stats[0].base_stat,
            fainted: false,
            moves: [
              { name: data.moves[0].move.name, url: data.moves[0].move.url },
              { name: data.moves[1].move.name, url: data.moves[0].move.url },
              { name: data.moves[2].move.name, url: data.moves[0].move.url },
              { name: data.moves[3].move.name, url: data.moves[0].move.url }
            ]
          })
        }
        console.log(pokemonData)
        setParty1(pokemonData)
      }

      if (player = user2) {

        const pokemon = ["tyranitar", "mantine", "scizor", "meganium", "typhlosion", "feraligatr"
        ]

        let pokemonData = []

        for (let i = 0; i < pokemon.length; i++) {
          const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon[i]}`)
          const data = await response.json()
          pokemonData.push({
            id: data.id,
            name: data.species.name,
            sprite: data.sprites.front_default,
            backSprite: data.sprites.back_default,
            currentHP: data.stats[0].base_stat,
            fainted: false,
            moves: [
              { name: data.moves[0].move.name, url: data.moves[0].move.url },
              { name: data.moves[1].move.name, url: data.moves[0].move.url },
              { name: data.moves[2].move.name, url: data.moves[0].move.url },
              { name: data.moves[3].move.name, url: data.moves[0].move.url }
            ]
          })
        }
        setParty2(pokemonData)
      }

    }
    getParty()

  }, [])

  return (
    <>
      <h2>{player}'s Party</h2>
      <div className="party">

      {player===user1 && party1.map((el, i)=> 
        <div className="pokemon-sprite">
          <img  src={party1[i].sprite} alt={party1[i].name} />
        </div>
      )}
      {player===user2 && party2.map((el, i)=> 
        <div className="pokemon-sprite">
          <img  src={party2[i].sprite} alt={party2[i].name} />
        </div>
      )}
      </div>

    </>
  )
}
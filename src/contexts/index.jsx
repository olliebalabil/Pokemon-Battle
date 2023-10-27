import React, { createContext, useState, useContext } from "react";

const DataContext = createContext();

export const DataProvider = ({ children }) => {
  const [turn, setTurn] = useState(true) //if true, user1's turn, if false, user2's turn
  const [user1, setUser1] = useState("Player 1");
  const [user2, setUser2] = useState("Player 2");
  const [party1, setParty1] = useState([
    {
      name: "",
      sprite: "",
      backsprite: "",
      currentHP: null,
      fainted: false,
      moves: [
        {
          move: "",
          power: null
        }
      ]
    },
    {
      name: "",
      sprite: "",
      backsprite: "",
      currentHP: null,
      fainted: false,
      moves: [
        {
          move: "",
          power: null
        }
      ]
    },
    {
      name: "",
      sprite: "",
      backsprite: "",
      currentHP: null,
      fainted: false,
      moves: [
        {
          move: "",
          power: null
        }
      ]
    },
    {
      name: "",
      sprite: "",
      backsprite: "",
      currentHP: null,
      fainted: false,
      moves: [
        {
          move: "",
          power: null
        }
      ]
    },
    {
      name: "",
      sprite: "",
      backsprite: "",
      currentHP: null,
      fainted: false,
      moves: [
        {
          move: "",
          power: null
        }
      ]
    },
    {
      name: "",
      sprite: "",
      backsprite: "",
      currentHP: null,
      fainted: false,
      moves: [
        {
          move: "",
          power: null
        }
      ]
    }
  ])
  const [party2, setParty2] = useState([
    {
      name: "",
      sprite: "",
      backsprite: "",
      currentHP: null,
      fainted: false,
      moves: [
        {
          move: "",
          power: null
        }
      ]
    },
    {
      name: "",
      sprite: "",
      backsprite: "",
      currentHP: null,
      fainted: false,
      moves: [
        {
          move: "",
          power: null
        }
      ]
    },
    {
      name: "",
      sprite: "",
      backsprite: "",
      currentHP: null,
      fainted: false,
      moves: [
        {
          move: "",
          power: null
        }
      ]
    },
    {
      name: "",
      sprite: "",
      backsprite: "",
      currentHP: null,
      fainted: false,
      moves: [
        {
          move: "",
          power: null
        }
      ]
    },
    {
      name: "",
      sprite: "",
      backsprite: "",
      currentHP: null,
      fainted: false,
      moves: [
        {
          move: "",
          power: null
        }
      ]
    },
    {
      name: "",
      sprite: "",
      backsprite: "",
      currentHP: null,
      fainted: false,
      moves: [
        {
          move: "",
          power: null
        }
      ]
    }
  ])
  const [pokemon1,setPokemon1] = useState({})
  const [pokemon2,setPokemon2] = useState({})




  return (
    <DataContext.Provider value={{ turn, setTurn, user1, setUser1, user2, setUser2, party1, setParty1, party2, setParty2 , pokemon1,setPokemon1,pokemon2,setPokemon2}}>
      {children}
    </DataContext.Provider>
  );
};

export const useData = () => useContext(DataContext);

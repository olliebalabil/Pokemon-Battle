import React, {useState} from "react"
import { useData } from "../../contexts"

export default function UserForm ({player}) {
  const {user1, setUser1, user2,setUser2} = useData()
  const [inputText,setInputText] = useState("")
  const handleInput = (e) => {
    setInputText(e.target.value)
  }
  const handleSubmit = (e) => {
    e.preventDefault()
    if (player===user1) {
      setUser1(inputText)
    } else if (player===user2) {
      setUser2(inputText)
    }
  }
  return(
    <>
    <form onSubmit={handleSubmit}>
      <input type="text" placeholder={`${player}! Enter your name...`} onChange={handleInput}/>
      <input type="submit"  value="Enter"/>
    </form>
    </>
  )
}
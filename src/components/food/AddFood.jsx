import React, { useState } from "react"
import { FaPlus } from "react-icons/fa"

function AddFood({ handleAddFoodItem }) {
  const [name, setName] = useState("")
  const [serving, setServing] = useState("")
  const [protein, setProtein] = useState("")
  const [calories, setCalories] = useState("")
  const [sugar, setSugar] = useState("")

  const handleSubmit = (e) => {
    e.preventDefault()
    handleAddFoodItem(name, serving, protein, calories, sugar)
    setName("")
    setServing("")
    setProtein("")
    setCalories("")
    setSugar("")
  }

  return (
    <div style={{ textAlign: "center" }}>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">New Food</label>
        <input
          type="text"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        
        />
        <input
          type="number"
          id="serving"
          value={serving}
          onChange={(e) => setServing(e.target.value)}
        />
        <input
          type="number"
          id="protein"
          value={protein}
          onChange={(e) => setProtein(e.target.value)}
        />
        <input
          type="number"
          id="calories"
          value={calories}
          onChange={(e) => setCalories(e.target.value)}
        />
        <input
          type="number"
          id="sugar"
          value={sugar}
          onChange={(e) => setSugar(e.target.value)}
        />
        <button type="submit" onClick={handleSubmit}>
          Add Food
        </button>
      </form>
      <h3>Add food </h3>
      <br></br>
      <h1>
        <FaPlus />
      </h1>
    </div>
  )
}

export default AddFood

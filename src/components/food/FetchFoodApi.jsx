import { useState } from "react"
import React from "react"

export default function FetchFoodApi() {
  const API_KEY = "XlbmfvBoP5wat3i76hIV0RZzstoaPCp9M52WGasf"
  const [typedFood, setTypedFood] = useState(null)
  const [fetchedFood, setFetchedFood] = useState("")
  const [fetchError, setFetchError] = useState("")

  const fetchData = () => {
    if (typedFood === " ") {
      return
    }
    fetch(
      `https://api.nal.usda.gov/fdc/v1/foods/search?api_key=${API_KEY}&query=${typedFood}&pageSize=6`
    )
      .then((response) => {
        if (!response.ok) return "Did not receive expected food data"
        return response.json()
      })
      .then((data) => {
        setFetchedFood(data.foods)
        console.log(data)
        setFetchError(null)
      })
      .catch((err) => {
        console.log(err.message)
        setFetchError(err.message)
      })
  }

  return (
    <div>
      <h2>Search for specific food nutrients</h2>
      <br></br>
      <div
        className="searchFood"
        style={{ outline: "3px solid #1f6e77", borderRadius: "6px" }}
      >
        <input
          style={{ width: "100%" }}
          placeholder="Type food to load..."
          onChange={(event) => {
            setTypedFood(event.target.value)
          }}
          required
        ></input>
        <button
          onClick={fetchData}
          style={{ borderRadius: "6px", padding: "2px", color:'white' }}
        >
          Fetch food
        </button>
      </div>

      {fetchError && <p style={{ color: "red" }}>{`Error: ${fetchError}`}</p>}

      {fetchedFood ? (
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: "10px",
            marginTop: "20px",
          }}
        >
          {fetchedFood.map((result, index) => {
            return (
              <div style={{ display: "flex", flexWrap: "wrap", flex: "1" }}>
                {/* <Food
                                    key={result.id}
                                    food={result}
                                /> */}
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    flexWrap: "wrap",
                    minWidth: "12rem",
                    maxWidth: "12rem",
                    padding: "0.3rem",
                    border: "1px solid black",
                  }}
                >
                  <br></br>
                  {!typedFood === " " ? <p>{typedFood}</p> : ""}
                  <p>{result.description}&nbsp;&nbsp;&nbsp;</p>
                  <br></br>
                  key={index}
                  <p>Size&nbsp;{result.packageWeight}g&nbsp;&nbsp;&nbsp;</p>
                  <p>
                    Protein&nbsp;{result.foodNutrients[0].value}
                    g&nbsp;&nbsp;&nbsp;
                  </p>
                  <p>
                    Carbs&nbsp;{result.foodNutrients[2].value}
                    g&nbsp;&nbsp;&nbsp;
                  </p>
                  <p>
                    Sugars&nbsp;{result.foodNutrients[4].value}
                    g&nbsp;&nbsp;&nbsp;
                  </p>
                  <br></br>
                </div>
              </div>
            )
          })}
        </div>
      ) : (
        <p>
          <br></br>Fetch items to display
        </p>
      )}
    </div>
  )
}
// https://api.nal.usda.gov/fdc/v1/foods/search?query=apple&pageSize=2&api_key=XlbmfvBoP5wat3i76hIV0RZzstoaPCp9M52WGasf

/* eslint-disable jsx-a11y/img-redundant-alt */
import React, { useState, useEffect } from "react"
// import "../../App.css"

import "../../styles/searchFood.css"

import CalculateNutrients from "../../components/food/CalculateNutrients"
import FoodContext, { FoodProvider } from "../../contexts/FoodContext.jsx"
import SearchFood from "../../components/food/SearchFood"
import FetchFoodApi from "../../components/food/FetchFoodApi"
import SetTargets from '../../components/SetTargets.jsx'


import FoodList from "../../components/food/FoodList"
import { useContext } from "react"
import SavedMealsList from "../../components/savedMeals/SavedMealsList"

const TotalCalories = () =>{
  
  const { foods } = useContext(FoodContext)

  const [searchText, setSearchText] = useState("")
  const [mealItems, setMealItems] = useState([]) //totalNutrients is [] empty array

  const [targetProtein, setTargetProtein] = useState("")
  const [targetCalories, setTargetCalories] = useState("")
  const [targetSugar, setTargetSugar] = useState("")
  // Add an item from Food List using add meal btn to right column calculate nutrients tab
  const handleAddTargets = (prot, cal, sug) => {
    setTargetProtein(prot)
    setTargetCalories(cal)
    setTargetSugar(sug)

    localStorage.setItem("prot", JSON.stringify(prot))
    localStorage.setItem("cal", JSON.stringify(cal))
    localStorage.setItem("sug", JSON.stringify(sug))
  }

  useEffect(() => {
    setTargetProtein(
      localStorage.getItem("prot")
        ? JSON.parse(localStorage.getItem("prot"))
        : ""
    )
    setTargetCalories(
      localStorage.getItem("cal") ? JSON.parse(localStorage.getItem("cal")) : ""
    )
    setTargetSugar(
      localStorage.getItem("sug") ? JSON.parse(localStorage.getItem("sug")) : ""
    )
  }, [])

  // Add an item from Food List using add meal btn to right column calculate nutrients tab
  const onAdd = (meal) => {
    //get a meal and add to mealItems
    const exists = mealItems.find((x) => x.id === meal.id)

    if (exists) {
      //increase it by 1 qty
      const newMealItems = mealItems.map(
        (x) => (x.id === meal.id ? { ...exists, qty: exists.qty + 1 } : x) //if meal in calc is == to meal id else don't change qty
      )
      setMealItems(newMealItems)
      localStorage.setItem("mealItems", JSON.stringify(newMealItems))
      // console.log(mealItems);
    } else {
      const newMealItems = [...mealItems, { ...meal, qty: 1 }]
      setMealItems(newMealItems)
      localStorage.setItem("mealItems", JSON.stringify(newMealItems))
    }
  }

  // Remove an item from mealItems using minus meal btn inside right column calculate nutrients tab
  const onRemove = (meal) => {
    const exists = mealItems.find((x) => x.id === meal.id)

    if (exists.qty === 1) {
      const newMealItems = mealItems.filter((x) => x.id !== meal.id)
      setMealItems(newMealItems)
      localStorage.setItem("mealItems", JSON.stringify(newMealItems))
    } else {
      const newMealItems = mealItems.map((x) =>
        x.id === meal.id ? { ...exists, qty: exists.qty - 1 } : x
      )
      setMealItems(newMealItems)
      localStorage.setItem("mealItems", JSON.stringify(newMealItems))
    }
  }

  useEffect(() => {
    setMealItems(
      localStorage.getItem("mealItems")
        ? JSON.parse(localStorage.getItem("mealItems"))
        : []
    )
  }, [])
  //let today = new Date().toLocaleDateString()
  var day = new Date().toString().split(" ").splice(1, 3).join(" ")

  return (

    <div className="container flex items-center justify-center flex-col mx-auto py-3">
      <div style={{ display: "flex", flexDirection: "column" }}>
        <div className="wrapper-card">
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <h2>Track today's meals</h2>
            <h3>{day}</h3>
          </div>
          <SetTargets handleAddTargets={handleAddTargets} />
        </div>
        <div className="row">
          <div className="col-left">
            <div className="wrapper-card-food-list">
              <SearchFood handleSearchFood={setSearchText} />
              <FoodList
                food_data={foods.filter((food) =>
                  food.name.toLowerCase().includes(searchText)
                )}
                onAdd={onAdd}
                onRemove={onRemove}
                mealItems={mealItems}
              />
            </div>
          </div>{" "}
          {/* left col */}
          <div className="col-right">
            <div className="wrapper-card-calculate-rightCol">
              <CalculateNutrients
                onAdd={onAdd}
                onRemove={onRemove}
                mealItems={mealItems}
                countMealItems={mealItems.length}
                targProtein={targetProtein}
                targCalories={targetCalories}
                targSugar={targetSugar}
              />
            </div>
          </div>{" "}
          {/* bottom long col */}
          <div className="col-bot">
            <div className="wrapper-card">
              <FetchFoodApi />
            </div>
          </div>
          <div className="col-bot">
            <div className="wrapper-card">
              <SavedMealsList
                countMealItems={mealItems.length}
                mealItems={mealItems}
              />
            </div>
          </div>
        </div>{" "}
        {/* container end */}
      </div>{" "}
      {/* row end */}
      {/* <footer
        style={{ color: "gray", borderRadius: "0px", marginBottom: "1rem" }}
      >
        <br></br>
        <br></br>
        <small>
          Developed by <a href="https://github.com/Vasil1001">Vasil.</a>
        </small>
        <small>
          &nbsp;&nbsp;Illustration by Icons 8 from{" "}
          <a href="https://icons8.com/">Ouch!</a>
        </small> 
      </footer> */}
    </div>


  )

}

export default TotalCalories;
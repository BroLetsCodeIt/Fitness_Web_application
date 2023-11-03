import { FoodProvider } from "../../contexts/FoodContext"
import TotalCalories from "./TotalCalories"
import React from 'react'
// import '../../App.css';
const CalorieTracker = () => {
  return (
    
    <FoodProvider>
       <TotalCalories/>
    </FoodProvider>
    
  )
}

export default CalorieTracker

import React from 'react';

const Result = (props) => (
  <div className="result bg-gray-100 p-4 rounded-lg shadow-md w-[20rem]">
    <h3 className="text-xl font-semibold mb-4">{props.calories} calories per day</h3>
    <div className="macronutrients grid grid-cols-3 gap-4">
      <div className="bg-blue-100 p-4 text-center rounded-lg">
        <span className="text-lg font-semibold">Protein</span>
        <p>{props.protein}g</p>
      </div>
      <div className="bg-green-100 p-4 text-center rounded-lg">
        <span className="text-lg font-semibold">Fat</span>
        <p>{props.fat}g</p>
      </div>
      <div className="bg-yellow-100 p-4 text-center rounded-lg">
        <span className="text-lg font-semibold">Carbs</span>
        <p>{props.carbs}g</p>
      </div>
    </div>
  </div>
);

export default Result;

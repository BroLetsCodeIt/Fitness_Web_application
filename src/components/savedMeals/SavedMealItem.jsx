import React from 'react'

export default function SavedMealItem({ countMealItems, mealItems, totalProtein, totalCal, totalSugar }) {
  return (
    <div >
      <div style={{ display: 'flex', flexDirection: 'column', border: '1px solid black', padding: '0.75rem'}}>
        <h2>31/01/23 Card</h2>
        <p>Foods eaten: {countMealItems} </p>
        <div>
          <div className="totals-row"> {/* Title names for table like look */}
          </div>
          <hr />
        </div>

        {mealItems.map((item) =>
          <div key={item.id} className="totals-row">
            <div className="" style={{ textAlign: 'left' }}><small>x{item.qty}</small> {item.name}</div>
          </div>
        )}
      </div>
    </div>
  )
}

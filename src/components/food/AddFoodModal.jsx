import React, { useState } from "react"
import { FaPlus } from "react-icons/fa"
import Modal from "react-modal"
import {GiOpenedFoodCan} from 'react-icons/gi'
import {AiFillCloseCircle} from 'react-icons/ai'
export default function AddFoodModal({ handleAddFoodItem }) {
  const [name, setName] = useState("")
  const [serving, setServing] = useState("")
  const [protein, setProtein] = useState("")
  const [calories, setCalories] = useState("")
  const [sugar, setSugar] = useState("")

  Modal.setAppElement()

  const handleSubmit = (e) => {
    e.preventDefault()
    handleAddFoodItem(name, serving, protein, calories, sugar)
    setName("")
    setServing("")
    setProtein("")
    setCalories("")
    setSugar("")
    setIsOpen(false)
  }

  Modal.setAppElement()
  const customStyles = {
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
      width: "500px",
      height: "600px",
      // backgroundColor: "#2e3039",
      backgroundColor:'white'
    },
  }
  let subtitle
  const [modalIsOpen, setIsOpen] = React.useState(false)

  function openModal() {
    setIsOpen(true)
  }

  function afterOpenModal() {
    // references are now sync'd and can be accessed.
    subtitle.style.color = "#f00"
  }

  function closeModal() {
    setIsOpen(false)
  }

  return (
    <div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <p style={{fontWeight:'bold'}}>Add Food</p>
        <button onClick={openModal}>
          <h1
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              backgroundColor:'white',
              padding:'0.2rem',
              borderRadius:'50%',
              width:'3rem',
              height:'3rem',
            }}
          >
            {/* <FaPlus /> */}
            <GiOpenedFoodCan/>
          </h1>
        </button>
      </div>

      <Modal
        isOpen={modalIsOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      
      >
        <div className="modal-title">
          <h2 ref={(_subtitle) => (subtitle = _subtitle)}>
            Add new food to list
          </h2>
          <button onClick={closeModal}><AiFillCloseCircle/></button>
        </div>
        <br></br>
        <div style={{}}>
          <form
            onSubmit={handleSubmit}
            style={{
              display: "flex",
              flexDirection: "column",
              textAlign: "left",
              gap: "10px",
              backgroundColor:'white',
              padding:'0.4rem',
              borderRadius:'0.3rem',
             
            }}
          >
            {/* <img src="images/breakfast.svg" alt="Logo" style={{ width: }} /> */}
            <label htmlFor="name">Food name</label>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                textAlign: "left",
                gap: "10px",
              }}
            >
              <input
                style={{ padding: "0.5rem" }}
                type="text"
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
               className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              />

              <label>Serving size</label>
              <input
                style={{ padding: "0.5rem" }}
                type="number"
                id="serving"
                value={serving}
                onChange={(e) => setServing(e.target.value)}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              />

              <label>Protein amount</label>
              <input
                style={{ padding: "0.5rem" }}
                type="number"
                id="protein"
                value={protein}
                onChange={(e) => setProtein(e.target.value)}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              />

              <label>Calories</label>
              <input
                style={{ padding: "0.5rem" }}
                type="number"
                id="calories"
                value={calories}
                onChange={(e) => setCalories(e.target.value)}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              />

              <label>Sugar</label>
              <input
                style={{ padding: "0.5rem" }}
                type="number"
                id="sugar"
                value={sugar}
                onChange={(e) => setSugar(e.target.value)}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              />
            </div>
          </form>
          <br></br>
          <button
            style={{ padding: "0.5rem" ,backgroundColor:"#04AA6D" , borderRadius:'0.4rem' , marginLeft:'0.3rem'}}
            type="submit"
            onClick={handleSubmit}
          >
            Add Food
          </button>
        </div>
      </Modal>
    </div>
  )
}

import { Routes, Route } from "react-router-dom"
import { useAuth0 } from "@auth0/auth0-react"
import Home from "./pages/Exericses/Home"
import ExerciseDetail from "./pages/Exericses/ExerciseDetail"
import Calorie from "./pages/Calorie/Calorie.jsx"
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
// import MealPl from "./pages/Meals/Meals"
import MealPlanning from "./pages/Meals/Meals"
import { AiFillCloseCircle } from 'react-icons/ai'
import "./App.css"
import Culinary from "./pages/Culinary/Culinary.jsx"
import RecipeDetail from "./pages/Culinary/RecipeDetail"
import CalorieTracker from "./pages/Tracker/CalorieTracker"
import FrontPage from "./pages/FrontPage/FrontPage"
import { Dna } from "react-loader-spinner"
import { FoodProvider } from "./contexts/FoodContext"
import Popup from 'reactjs-popup'

// import 'reactjs-popup/dist/index.css';
import Modal from 'react-modal'
import { useState } from "react"
import { Button } from "@material-tailwind/react"

function App() {
  const { loginWithRedirect, logout, isAuthenticated, isLoading, user } = useAuth0();
  Modal.setAppElement()
  const customStyles = {
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
      minWidth: "500px",
      minHeight: "70px",
    
      
      // backgroundColor: "#2e3039",
      backgroundColor: 'white',
      display: 'flex',
      alignItems: 'center',
      flexDirection : "column",
      justifyContent: 'space-between',
      // borderRadius:'0.9rem',

      border: '1px solid red'

    },
  }
  const [modalIsOpen, setIsOpen] = useState(true)


  function openModal() {
    setIsOpen(true)
  }

  function afterOpenModal() {
    // references are now sync'd and can be accessed.
    subtitle.style.color = "#f00"
  }

  function closeModal() {
    setIsOpen(false)
    // isOPEN = false;
  }
  if (isLoading) {
    return <div className="flex items-center justify-center h-screen">
      <Dna
        visible={true}
        height="80"
        width="80"
        ariaLabel="dna-loading"
        wrapperStyle={{}}
        wrapperClass="dna-wrapper"
      />
    </div>;
  }
  if (!isAuthenticated) {

    return (
      <>
        <Modal
          isOpen={modalIsOpen}
          onAfterOpen={afterOpenModal}
          onRequestClose={closeModal}
          style={customStyles}
          contentLabel="Example Modal"

        >

          <h2 className="tracking-tighter font-bold text-xl">
            You're almost there! 🔏
            Sign in to access the features.
           </h2>
           <img src="https://img.freepik.com/premium-vector/concept-data-protection-laptop-shield-with-lock-computer_349999-343.jpg" alt="lock image" className="w-96"/>

          <Button onClick={closeModal}>Close</Button>
          {/* <button onClick={closeModal} >Close</button> */}
        </Modal>
        <Navbar />
        <FrontPage />
        <Footer />
      </>
    )
  }
  else {
    return (

      <div>
        <Navbar />
        <Routes>
          <Route path="/exercise" element={<Home />} />
          <Route path="/" element={<FrontPage />} />
          <Route path="/exercise/:id" element={<ExerciseDetail />} />
          <Route path="/calorie" element={<Calorie />} />
          <Route path="/meals" element={<MealPlanning />} />
          <Route path="/culinary" element={<Culinary />} />
          <Route path='recipes/:id' element={<RecipeDetail />} />
          <Route path="/tracker" element={<CalorieTracker />} />
        </Routes>
        <Footer />
      </div>
    )
  }
}

export default App

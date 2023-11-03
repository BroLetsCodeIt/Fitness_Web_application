import { Link } from "react-router-dom"
import ThemeMode from "./ThemeMode"
import Profile from "./Profile"
import Logo from "../assets/images/Logo.svg"
import { useAuth0 } from "@auth0/auth0-react";
const Navbar = () => {
  const { loginWithRedirect,logout,isAuthenticated} = useAuth0();
  const checking = () =>{
     if(!isAuthenticated){
      window.location.reload(false);
     }
  }
  return (
    <>
     
      <header className="text-gray-600 body-font w-full shadow dark:border-b dark:border-b-slate-700">
        <div className="container mx-auto flex flex-wrap px-5 py-1 md:flex-row justify-between items-center pb-3 flex-col md:pb-0">
          <div className="flex title-font font-medium items-center text-gray-900 mb-2 md:mb-0">
            <Link to="/">
              <img src={Logo} alt="Fitness Craze" className="w-8, h-8 mx-0 my-5" />
            </Link>
            <Link to="/">
              <span className="ml-3 text-2xl dark:text-gray-100">Fitness Fast</span>
            </Link>
          </div>
          <nav className="flex flex-wrap items-center text-base justify-center">
          <Link to="/" className="mr-2 p-2 hover:text-indigo-800 dark:text-gray-100 dark:hover:text-indigo-400" >
              Home
            </Link>
            <Link to='/calorie' className="mr-2 p-2 hover:text-indigo-800  dark:text-gray-100 dark:hover:text-indigo-400" onClick={checking}>BMR</Link>
           <Link to='/tracker' className="mr-2 p-2 hover:text-indigo-800 dark:text-gray-100 dark:hover:text-indigo-400" onClick={checking}>Calorie Tracker</Link>
           {/* <a href="https://meals-nutrition-tracker.netlify.app/" className="mr-2 p-2 hover:text-indigo-800 dark:text-gray-100 dark:hover:text-indigo-400">Calorie Tracker</a> */}
            <Link to='/meals' className="mr-2 p-2 hover:text-indigo-200 dark:text-gray-100 dark:hover:text-indigo-400" onClick={checking}> Meals</Link>
            <Link to='/culinary' className="mr-2 p-2 hover:text-indigo-200 dark:text-gray-100 dark:hover:text-indigo-400" onClick={checking}>Culinary</Link>
           
            <Link to="/exercise" className="hover:text-indigo-800 p-2 dark:text-gray-100 dark:hover:text-indigo-400" onClick={checking}>
              Exercises
            </Link>
            <Profile/>
     
            { isAuthenticated ? (
        <button  onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })  }
          className="loginn"
          // href="#Login"
          style={{
            backgroundColor: "orangered",
            textDecoration: "none",
            padding: "0.2rem 0.9rem",
            borderRadius: "1rem",
            color: "white",
            boxShadow: "1rem 1rem 6rem orange",
            border: "2px solid white",
            cursor:'pointer',
            // display:'none'
            marginLeft:"2rem",
            fontSize:'1.1rem'
            }}
        >
          Sign Out
        </button>
        ) : (
        <button onClick={() => loginWithRedirect()}
          className="loginn"
          style={{
            backgroundColor: "#0096FF",
            textDecoration: "none",
            padding: "0.2rem 0.9rem",
            borderRadius: "0.3rem",
            color: "white",
            boxShadow: "1rem 1rem 6rem orange",
            border: "2px solid white",
            cursor:'pointer',
            fontSize:'1.3rem',
          }}
        >
          Login
        </button> 
        )
}
            <div className="mx-2">
              <ThemeMode />
            </div>
          
          </nav>
        </div>
      </header>
    </>
  )
}

export default Navbar

import { StrictMode } from "react"
import ReactDOM from "react-dom/client"
import { BrowserRouter } from "react-router-dom"
import { ExercisesDataProvider } from "./contexts/ExercisesDataContext"
import App from "./App"
import { Auth0Provider } from "@auth0/auth0-react"
import { FoodProvider } from "./contexts/FoodContext"
import { ThemeProvider } from "@material-tailwind/react"

ReactDOM.createRoot(document.getElementById("root")).render(
  // <React.StrictMode>

  <ExercisesDataProvider>
    <ThemeProvider>

    <BrowserRouter>
        <Auth0Provider
        domain={import.meta.env.VITE_REACT_APP_DOMAIN}
        clientId={import.meta.env.VITE_REACT_APP_CLIENT_ID}
        authorizationParams={{ redirect_uri: window.location.origin}}
        > 
         <App />
      </Auth0Provider>
    </BrowserRouter>

    </ThemeProvider>
  </ExercisesDataProvider>
  // </React.StrictMode>
)

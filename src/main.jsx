import { StrictMode } from "react"
import ReactDOM from "react-dom/client"
import { BrowserRouter } from "react-router-dom"
import { ExercisesDataProvider } from "./contexts/ExercisesDataContext"
import App from "./App"
import { Auth0Provider } from "@auth0/auth0-react"
import { FoodProvider } from "./contexts/FoodContext"

ReactDOM.createRoot(document.getElementById("root")).render(
  // <React.StrictMode>

  <ExercisesDataProvider>

    <BrowserRouter>
     <Auth0Provider
     domain="dev-ysdt6rygj48hyvg8.us.auth0.com"
     clientId="O6LHsrU84nnX8n8xNQZXER32Jlytoood"
     authorizationParams={{
       redirect_uri: window.location.origin
     }}
     
     > 
     
         <App />
     
      </Auth0Provider>
    </BrowserRouter>

  </ExercisesDataProvider>
  // </React.StrictMode>
)

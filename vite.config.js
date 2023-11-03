import { defineConfig } from "vite"
import react from "@vitejs/plugin-react"
import dotenv from 'dotenv';
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  define:{
    'process.env.VITE_REACT_APP_RAPID_API_KEY':JSON.stringify(process.env.VITE_REACT_APP_RAPID_API_KEY),
    'process.env.VITE_REACT_APP_RAPID_YOUTUBE_API_KEY':JSON.stringify(process.env.VITE_REACT_APP_RAPID_YOUTUBE_API_KEY),
    'process.env.VITE_REACT_APP_EDAMAM_API_KEY':JSON.stringify(process.env.VITE_REACT_APP_EDAMAM_API_KEY),
    'process.env.VITE_REACT_APP_EDAMAM_APP_ID':JSON.stringify(process.env.VITE_REACT_APP_EDAMAM_APP_ID),
    'process.env.VITE_REACT_APP_EMAILJS_PUBLIC_KEYP':JSON.stringify(process.env.VITE_REACT_APP_EMAILJS_PUBLIC_KEY),
    'process.env.VITE_REACT_APP_EMAILJS_SERVICE_ID':JSON.stringify(process.env.VITE_REACT_APP_EMAILJS_SERVICE_ID),
    'process.env.VITE_REACT_APP_EMAILJS_TEMPLATE_ID':JSON.stringify(process.env.VITE_REACT_APP_EMAILJS_TEMPLATE_ID)
  }
})

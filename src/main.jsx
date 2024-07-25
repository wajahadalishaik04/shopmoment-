import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Provider } from 'react-redux'
import Store from './store/StoreFile.js'
import heroImageStore from './store/StoreFile.js'
import { BrowserRouter, Routes } from 'react-router-dom'
import HomeScreen from './Screens/HomeScreen.jsx'
// import NavBar from './Components/NavBar.jsx'




ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <Provider store={Store }   >
   <App/>
    
    </Provider>
   
    
      </React.StrictMode>
)

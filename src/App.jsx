import React from 'react';
import HomeScreen from './Screens/HomeScreen';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import UserScreen from './Screens/UserScreen';
import ProductScreen from './Screens/ProductScreen';
const App = () =>
  {
    return(
      <>

      <BrowserRouter>
      <Routes>
        
        <Route  path='/' element={<HomeScreen/>}/>
        <Route path='/Users' element={<UserScreen/>}/>
        <Route path='/Products' element={<ProductScreen/>}/>

      </Routes>
      </BrowserRouter>
      
      
      </>
    )
  }
  export default App;
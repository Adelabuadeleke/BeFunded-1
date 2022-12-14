import React from 'react';
import logo from './logo.svg';
import './App.css'
import { Routes, Route } from 'react-router-dom'

import Signup from './Pages/SignUp/Signup';
import Dashboard from './Pages/EDashboard/EDashboard';
import Verify from './Pages/Verify/Verify';
import Home from './Pages/Home/Home';
import Footer from './component/footer/Footer';
import Project from './Pages/Project/Project';
import SignIn from './Pages/SignIn/SignIn';
import Idashboard from './Pages/Investors/Dashboard/Dashboard';
import Invest from './Pages/Investors/invest/Invest';
import EDashboard from './Pages/EDashboard/EDashboard';
import WalletPage from './Pages/EDashboard/WalletPage/WalletPage';
import MediaPage from './Pages/EDashboard/MediaPage/MediaPage';
import SettingPage from './Pages/EDashboard/SettingPage/SettingPage';
import ProductPage from './Pages/EDashboard/ProductPage/ProductPage';
import EMainPage from './Pages/EDashboard/EMainPage/EMainPage';
import ProductReg from './Pages/EDashboard/ProductReg/ProductReg';

import ProductReg2 from './Pages/EDashboard/ProductReg/ProductReg2';


import  { getUser } from './auth';
import {useState, useEffect} from "react"
import { userInfo } from 'os';
import RegistrationSteps from './Pages/Investors/Registration/RegistrationSteps';
import NotFound from './Pages/NotFound/NotFound';
import ProductReg3 from './Pages/EDashboard/ProductReg/ProductReg3';
import ProductReg4 from './Pages/EDashboard/ProductReg/ProductReg4';
import TransactionSuccess from './Pages/TransactionSuccess/TransactionSuccess';



function App() {
  const [user, setUser] = useState(null  || {})
  useEffect(() => {
    const userInfo =  getUser()
     setUser({...user, name :userInfo.name,
       email: userInfo.email, role:userInfo.role,
       wallet_balance: userInfo.wallet_balance
      })
    }, [])
    const userI =  getUser()
   

  return (
    <div className="app">
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/signUp' element={<Signup />} />
        <Route path="/project/:productId" element={<Project />} />
        <Route path='/verify' element={<Verify />}/>
        <Route path='/login' element={<SignIn/>} />
        {userI.name   ? 
        <Route path='/idashboard' element={userI.role == "investor" ?
        <Idashboard  user={user}/>   :  <EDashboard user={user}/>} />
        :  

        <Route path='/idashboard' element={   <h1>Loading...... refresh page or log in</h1>} />    
      } 
      <Route path="/iregistration"   element={<RegistrationSteps/>}/>
          <Route path='/invest'  element={<Invest/>}/>

          
        <Route path='*' element={<NotFound />} />
        <Route path='/success' element={<TransactionSuccess/>}/>
      </Routes>
     
    </div>
  );
}

export default App;

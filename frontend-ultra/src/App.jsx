import React, { useEffect, useState } from 'react';
import Header from './components/Header';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Services from './components/Services';
import Footer from './components/Footer';
import Products from './components/Products';
import Pricing from './components/Pricing';
import SignUp from './components/SignUp';
import SignIn from './components/SignIn';
import Protected from './components/Protected';
import Rounting from './components/Rounting';
import ScrollTop from './components/ScrollTop';
import axios from 'axios';  

const App = () => {
  const [data, setData] = useState();
  
  const getData = async () => {
    try {
      const response = await axios.get("http://localhost:5000/getData");
      setData(response.data);
    } catch (error) {
      console.error("Error fetching data: ", error);
    }
  }

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <BrowserRouter>
        <Header />
        <ScrollTop />
        <Routes>
          <Route path='/' element={<Protected Component={Home} />} />
          <Route path='service' element={<Protected Component={Services} />} />
          <Route path='products' element={<Protected Component={Products}  />} />
          <Route path='pricing' element={<Protected Component={Pricing}  />} />
          <Route path='signUp' element={<SignUp />} />
          <Route path='signIn' element={<SignIn />} />
          <Route path='rounting' element={<Protected Component={Rounting} />} />
        </Routes>
        <Footer />
      </BrowserRouter>
      <div>{data&& data.message}</div>
    </>
  );
}

export default App;
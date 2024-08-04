import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

const Protected = (props) => {
    const {Component} = props;
    const navigate = useNavigate();
    useEffect(()=>{
        let signUp = localStorage.getItem('signUp')
        if(!signUp){
navigate('/signUp')
        }
    });
    
  return (
    <>
 <Component />
 
    </>
  )
}

export default Protected

import React,{useState,useEffect} from 'react'
import Logo from '../atoms/Logo'
import Avatar from '../atoms/Avatar'

import './Molecules.css'

function NavBar() {
  
  const [show, handleShow] = useState(false)

  useEffect(() => {
    window.addEventListener("scroll", ()=>{
      if (window.scrollY > 100){
        handleShow(true)
      }else handleShow(false)
    });
    return () =>{
      window.removeEventListener("scroll")
    }
  }, [])


  return (
    <div className={`nav ${show && "nav__black"}`}>
      <Logo/>
      <Avatar/>
    </div>
  )
}

export default NavBar

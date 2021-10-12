import React, { useEffect,useState } from 'react'
import './NavBar.css'

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
      <img 
        className="nav__logo"
        src="https://upload.wikimedia.org/wikipedia/commons/6/67/NewNetflixLogo.png"
        alt="Netflix Logo"    
      />

      <img
      className="nav__avatar"
      src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/0b/Netflix-avatar.png/640px-Netflix-avatar.png"
      alt="User Avatar"
      />

      
    </div>
  )
}

export default NavBar

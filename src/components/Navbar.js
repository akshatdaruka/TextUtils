import React, {useState} from 'react'
import PropTypes from 'prop-types'
import DarkModeButton from './DarkModeButton'
import { Link } from "react-router-dom"

export default function Navbar(props) {
    const [darkmodecolor, setdarkmodecolor] = useState({color:"black", bgColor: "white"})

    const modeChange = ()=>{
        if(darkmodecolor.color==="white"){
            setMode("Enable Dark Mode");
            setdarkmodecolor({color:"black", bgColor:"white"})
        }else{
            setMode("Disable Dark Mode");
            setdarkmodecolor({color:"white", bgColor:"black"})
        }
    }
    const [mode, setMode] = useState("Enable Dark Mode")
  return (
    <nav className={`navbar navbar-expand-lg bg-${darkmodecolor.bgColor}`}>
  <div className="container-fluid" >
    <Link className="navbar-brand" to="/" style={darkmodecolor}><b>{props.title}</b></Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon" ></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link active" style={darkmodecolor} aria-current="page" to="/">{props.homeText}</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" style={darkmodecolor} to="/about">{props.aboutText}</Link>
        </li>
      </ul>
      <DarkModeButton modeprop={mode} modefunction = {modeChange} darkmodeclr = {darkmodecolor}/>
    </div>
  </div>
</nav>
  )
}
  Navbar.propTypes = {
    title: PropTypes.string,
    homeText : PropTypes.string,
    aboutText : PropTypes.string
  }

  Navbar.defaultProps = {
    title : "Set Tile Here",
    homeText : "Set Home text here",
    aboutText : "Set about text here"
  }


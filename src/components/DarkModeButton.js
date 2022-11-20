import React from 'react'

export default function DarkModeButton(props) {
    
  return (
    <div className="form-check form-switch" onChange={props.modefunction}>
  <input className="form-check-input" type="checkbox" onClick={props.modefunction} role="switch" id="flexSwitchCheckDefault"/>
  <label className="form-check-label"  htmlFor="flexSwitchCheckDefault">{props.modeprop}</label>
</div>
  )
}

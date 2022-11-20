import React, {useState} from 'react'

export default function TextForm(props) {
    const [myStyle , setMyStyle] = useState({
        color : 'black',
        backgroundColor : 'white',
    })
    const [btntxt, setBtnTxt] = useState("Enable Dark Mode");
    const darkAndLightMode = () => {
        if(myStyle.color === 'black'){
            setMyStyle({
                color : 'white',
                backgroundColor : 'black'
            })
            setBtnTxt('Enable Light Mode')
        } else {
            setMyStyle({
                color : 'black',
                backgroundColor : 'white'
            })
            setBtnTxt('Enable Dark Mode')
        }
    }
    const handleUpClick = ()=>{
        console.log("Upper Case Button Clicked");
        let newUpperText = text.toUpperCase();
        updateText(newUpperText);
    }
    const handleLowClick = ()=>{
        console.log("Lower Case Button Clicked");
        let lowerText = text.toLowerCase();
        updateText(lowerText);
    }
    const handleOnChange = (event)=>{
        console.log("Text Area Changed");
        updateText(event.target.value);
    }
    const clearText = ()=>{
        let newClearText = '';
        updateText(newClearText);
    } 
  const [text, updateText] = useState(''); // inside the parantheses we can put default value of text variable
  return (
    <div>
        <div className="mb-3" style = {myStyle}>
            <label htmlFor="myBox" className="form-label"><b>{props.headerText}</b></label>
            <textarea className="form-control" id="myBox" value = {text} onChange = {handleOnChange} rows="8"></textarea>
            <div className = "container my-3" style = {myStyle}>
            <button className="btn btn-primary mx-2" onClick = {handleUpClick} >
                Convert To UpperCase
            </button>
            <button className = "btn btn-primary mx-2" onClick = {handleLowClick} >
                Convert To LowerCase
            </button>
            <button className = 'btn btn-primary mx-2' onClick = {darkAndLightMode} >
                {btntxt}
            </button>
            <button className = 'btn btn-primary mx-2' onClick = {clearText} >
                Clear
            </button>
            </div>
            <div className='container my-3' style = {myStyle}>
                <h2>Your Text Summary</h2>
                <p>Your text contains <b>{text.split(" ").length} </b> Words and <b>{text.length} characters</b></p>
                <p>{0.008*text.split(" ").length} minutes to read</p>
                <h2>Preview</h2>
                <p>{text}</p>
            </div>
        </div>
    </div>
  )
}

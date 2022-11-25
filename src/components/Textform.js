import React, {useState} from 'react'



export default function Textform(props) {
    const handleUpClick = () =>{
        console.log("Uppercase was clickd")
        let newText = text.toUpperCase();
        setText(newText)
    }
    const handleLoClick = () =>{
        console.log("Lowercase was clickd")
        let newText = text.toLowerCase();
        setText(newText)
    }
    const handleOnChange = () =>{
        setText(event.target.value)
       
    }
    const [text, setText] = useState('Enter text here');
  return (
      <>
    <div>
         <div className="mb-3">
             <h1 className="mb-4">{props.heading}</h1>
                <textarea className="form-control" value = {text} onChange={handleOnChange} id="myBox" rows="8"></textarea>
          </div>
          <button disabled={text.length===0} className="btn btn-primary mx-2" onClick={handleUpClick}>Convert to Uppercase</button>
          <button disabled={text.length===0} className="btn btn-primary mx-2" onClick={handleLoClick}>Convert to Lowercase</button>
    </div>
        <div className="container my-3">
            <h2>Your text summary</h2>
            <p>{text.split(/\s+/ ).filter((element)=>{return element.length!==0}).length} word and {text.length} characters</p>
            <p>{ 0.008 * text.split(" ").filter((element)=>{return element.length!==0}).length} Minutes read</p>   
        </div>
    </>
  )
}

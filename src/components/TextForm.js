
import React, {useState} from 'react'

export default function TextForm(props) {
    const handleUpClick = () =>{
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to upper case ","success")
    }

    const handleLowClick = () =>{
        let newText = text.toLowerCase();
        setText(newText)
        props.showAlert("Converted to lower case ","success")

    }

    const handleClrClick =()=>{
        let newText = "";
        setText(newText);
        props.showAlert("Cleard ","success")

    }

    const handleCopyClick = () =>{
        let newText = document.getElementById("myBox");
        newText.select();
        navigator.clipboard.writeText(newText.value);
        props.showAlert("Copied to clipboard","success")

    }
    const handleOnChange = (event) =>{
        setText(event.target.value);
        
        
    }
    const [text, setText] = useState(""); 
    return (
        <>
        <div className="container my-2" style={{color:props.mode === 'dark'?'white':'black'}}>
            <h1>{props.heading}</h1>
            <div className="mb-3">
                <textarea id="myBox" rows="8" value={text} onChange={handleOnChange} style={{backgroundColor:props.mode === 'dark'?'grey':'white',color:props.mode === 'dark'?'white':'black'}} className="form-control" ></textarea>
            </div>
            <button className="btn btn-primary mx-2" onClick ={handleUpClick}>Convert to UpperCase</button>
            <button className="btn btn-primary mx-2" onClick={handleLowClick}>Convert to LowerCase</button>
            <button className="btn btn-primary mx-2" onClick={handleClrClick}>Clear All</button>
            <button className="btn btn-primary" onClick={handleCopyClick}>Copy to Clipboard</button>
        </div>
        <div className="container" style={{color:props.mode === 'dark'?'white':'black'}}>
            <h1>Your Text Summary</h1>
            <p>{text.split(" ").length-1} Words and {text.length} characters</p>
            <p>{0.008 * (text.split(" ").length -1)} Minutes required to read this</p>
          

        </div>
        </>
    )
}

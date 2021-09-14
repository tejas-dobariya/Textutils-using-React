import React,{ useState } from 'react'

export default function TextForm(props) {
    const handleUpClick=()=>{
        // console.log("Uppercase was clicked" + Text);
        let newText = text.toUpperCase();
        setText(newText)
    }

    const handleLowClick=()=>{
        // console.log("Uppercase was clicked" + Text);
        let newText = text.toLowerCase();
        setText(newText)
    }

    const handleClearClick=()=>{

        let newText = ('');
        setText(newText)
    }

    const handleCopyClick=()=>{
        var text = document.getElementById("myBox")
        text.select();
        navigator.clipboard.writeText(text.value)
    }

    const handleExtraSpace=()=>{
        let newText = text.split(/[]+/);
        setText(newText.join(" "))
    }

    const handleOnChange=(event)=>{
        // console.log('On Change');
        setText(event.target.value);
    }

    const[text,setText]=useState('Enter text here')
    return (
        <>
        <div className="container">
            <form>
                <h1>{props.heading}</h1>
                <div className="form-group my-3">
                <textarea className="form-control" value={text} onChange={handleOnChange} id="myBox" rows="6"></textarea>
                </div>
                <button className="btn btn-primary" onClick={handleUpClick}>Convert to Uppercase</button>
                <button className="btn btn-primary mx-3 my-1" onClick={handleLowClick}>Convert to Lowercase</button>
                <button className="btn btn-primary" onClick={handleClearClick}>Clear</button>
                <button className="btn btn-primary mx-3" onClick={handleCopyClick}>Copy text</button>
                <button className="btn btn-primary" onClick={handleExtraSpace}>Remove extra spaces</button>
            </form>
        </div>
        <div className="container my-3">
            <h2>Your text summary</h2>
            <p>{text.split(" ").length} words and {text.length} characters</p>
            <p>Will take {0.008 * text.split(" ").length} Minutes to read</p>
            <h2>Preview</h2>
            <p>{text}</p>
        </div>
        </>
    )
}


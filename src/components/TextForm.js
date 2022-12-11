import React , {useState} from 'react'

export default function TextForm(props) {
    const handleUpClick = () => {
        // console.log("Upper-Case was clicked" + text);
        let newText = text.toUpperCase();
        setText(newText)
        props.showAlert("Converted to Uppercase" , "success");
    }
    const handleLowClick = () => {
      // console.log("Upper-Case was clicked" + text);
      let newText = text.toLowerCase();
      setText(newText)
      props.showAlert("Converted to LowerCase" , "success");
    }
    const handleClearText = () => {
      // console.log("Upper-Case was clicked" + text);
      let newText = "";
      setText(newText)
      props.showAlert("Text Clear" , "success");
    }
    const removeExtraSpaces = () => {
      let newText = text.split(/[ ]+/);
      setText(newText.join(" "));   
      props.showAlert("Extra Spaces clear" , "success");
    }

    const speak = () => {
      let msg = new SpeechSynthesisUtterance();
      msg.text = text;
      window.speechSynthesis.speak(msg);
    }

    const handleOnChange = (event) => {
        // console.log("On Change"); these are console output
        setText(event.target.value)
    }
    const[text,setText] = useState('Enter text here');

  return (
    <>
    <div className=  "container" style={{color: props.mode === 'dark'?'white':'#042743'}}>
        <h1>{props.heading}</h1>
        <div className="mb-3">
        <textarea className="form-control" value={text} onChange={handleOnChange} style = {{backgroundColor: props.mode === 'dark'?'#13466e':'white' , color: props.mode === 'dark'?'white':'#042743'}} id="MyBox" rows="8"></textarea>
        </div>
        <button disabled = {text.length===0}  className="btn btn-primary mx-1 my-1 " onClick={handleUpClick}>Convert to upperCase</button>
        <button disabled = {text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleLowClick}>Convert to lowerCase</button>
        <button disabled = {text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleClearText}>Clear text</button>
        <button disabled = {text.length===0} className="btn btn-primary mx-1 my-1" onClick={speak}>Speak</button>
        <button disabled = {text.length===0} className="btn btn-primary " onClick={removeExtraSpaces}>Remove Extra Spaces</button>
    </div>
    <div className="container my-2" style={{color: props.mode === 'dark'?'white':'#042743'}}>
      <h1>Your text summary</h1>
      <p>{text.split(/\s+/).filter((element)=> {return element.length!==0}).length} and {text.length }</p>
      <p>{0.08 * text.split(" ").length} Minutes read</p>
      <h2>Preview</h2>
      <p>{text.length > 0 ? text:"Enter something to preview it here and Enable the Buttons"}</p>
    </div>
    </>
  )
}


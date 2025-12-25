import React,{useState} from 'react';

function Textform(props) {
  const handleUpClick = ()=>{
    console.log("Uppercase was Clicked"+ text);
    let newtext = text.toUpperCase();
    setText(newtext)
    props.showAlert("converted to uppercase!", "success")
  }
  const handleloClick = ()=>{
    console.log("Uppercase was Clicked"+ text);
    let newtext = text.toLowerCase();
    setText(newtext)
        props.showAlert("converted to Lowercase!", "success")
  }
  const handleinverseClick = () => {
    console.log("inverse click is triggered");
    let newtext = "";
    for (let i = text.length - 1; i >= 0; i--) {
      newtext += text[i];
    }
        setText(newtext);
            props.showAlert("converted to inverse Text!", "success")
      }
    const handleclearClick = ()=>{
    console.log("Uppercase was Clicked"+ text);
    let newtext = "";
    setText(newtext)
        props.showAlert("Text Cleared", "success")
  }

   const handleOnChange = (event)=>{
    console.log("On change");
    setText(event.target.value);
  }
   const handleCopyClick = () => {
    var text = document.getElementById("mybox");
    text.select();
    navigator.clipboard.writeText(text.value);
        props.showAlert("Copied To Clipboard!", "success")
   }
    const handleExtraSpaces = () => {
      let newText = text.split(/[ ]+/);
      setText(newText.join(" "))
          props.showAlert(" ExtraSpaces Removed !", "success")
    }
  const [text,setText] = useState('');
  // text = "new text"; // Wrong Way to Change the state
  //setText("new text"); // correct way to change state
  return (
    <>
    <div className='container' style = {{color: props.mode==='dark'?'white':'#042743'}}>
      <h1>{props.heading} </h1>
<div className="mb-3">

  <textarea className="form-control" value = {text} onChange={handleOnChange} style={{backgroundColor:props.mode==='dark'?'grey':'white',color: props.mode==='dark'?'white':'#042743'}} id="mybox" rows="8"></textarea>
</div>
<button className="btn btn-primary mx-2" onClick = {handleUpClick}>Convert to uppercase</button>
<button className="btn btn-primary mx-2" onClick = {handleloClick}>Convert to lowercase</button>
<button className="btn btn-primary mx-2" onClick = {handleinverseClick}>Inverse Text</button>
<button className="btn btn-primary mx-2" onClick = {handleclearClick}>Clear Text</button>
<button className="btn btn-primary mx-2" onClick = {handleCopyClick}>Copy Text</button>
<button className="btn btn-primary mx-2" onClick = {handleExtraSpaces}>Remove Extra Spaces</button>
        </div>
    <div className="container my-3" style = {{color: props.mode==='dark'?'white':'#042743'}}>
      <h2>Your Text Summary</h2>
      {/* <p>{text.split(" ").length-1} words and {text.length} characters </p> */}
      <p>{0.008 * text.split(" ").length }Minutes read</p>
      <h2>Preview</h2>
      <p>{text.length>0?text:"Enter Something in the textbox above to preview it"}</p>
          <p>
          {text.trim().length>0?text.trim().split(" ").length:"0"} words and {text.trim().length} total
          characters.
        </p>


    </div>
    
    </>
  );
}

export default Textform;

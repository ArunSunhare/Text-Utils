 import React,{useState} from 'react'
 
 
 function TextForm(props) {
    const [text,setText]= useState('');
    const handleUpClick =()=>{
      // console.log("Uppercase was clicked" + text);
      let newText = text.toUpperCase();
      setText(newText)
    }
    const handleLoClick =()=>{
      // console.log("Uppercase was clicked" + text);
      let newText = text.toLowerCase();
      setText(newText)
    }
    const handleClearClick =()=>{
      // console.log("Uppercase was clicked" + text);
      let newText =" ";
      setText(newText)
    }
    const handleonChange =(event)=>{
      // console.log("OnChange");
      setText(event.target.value);
    }
   return (
    <>
     <div className='container'>
   <h1>{props.heading}</h1>
<div class="mb-3">

  <textarea className="form-control my-2" value={text} onChange={handleonChange} id="myBox" rows="15">

  </textarea>
  <button className='btn btn-primary mx-2'onClick={handleUpClick}>Convert to Upercase</button>
  <button className='btn btn-primary mx-2'onClick={handleLoClick}>Convert to Lowercase</button>
  <button className='btn btn-primary mx-2'onClick={handleClearClick}>Clear Text</button>
  
</div>
     </div>
    
    <div className='contianer my-2'> 
     <h3>Your text summary</h3>
     <p>{ text.split (" ").length} words and {text.length}characters</p>
     <p>{0.008 * text.split (" ").length} Minutes read</p>
     <h2>Preview</h2>
     <p>{text}</p>
    </div>
</>
     
   )
 }
 
 export default TextForm
 
 import React,{useState} from 'react'
 
 
 function TextForm(props) {
    const [text,setText]= useState('Enter text here2');
    const handleUpClick =()=>{
      // console.log("Uppercase was clicked" + text);
      let newText = text.toUpperCase();
      setText(newText)
    }
    const handleonChange =(event)=>{
      // console.log("OnChange");
      setText(event.target.value);
    }
   return (
     <div>
   <h1>{props.heading}</h1>
<div class="mb-3">

  <textarea className="form-control" value={text} onChange={handleonChange} id="myBox" rows="15">

  </textarea>
  <button className='btn btn-primary my-3'onClick={handleUpClick}>Convert to Upercase</button>
</div>
     </div>
   )
 }
 
 export default TextForm
 
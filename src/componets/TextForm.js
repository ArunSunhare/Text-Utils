 import React,{useState} from 'react'
 
 
 function TextForm(props) {
    const [text,setText]= useState('Enter text here');

   return (
     <div>
   <h1>{props.heading}</h1>
<div class="mb-3">

  <textarea className="form-control" id="myBox" rows="15"></textarea>
  <button className='btn btn-primary my-3'>Convert to Upercase</button>
</div>
     </div>
   )
 }
 
 export default TextForm
 
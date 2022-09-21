import React from 'react'
import './Write.css'

export default function Write() {
  return (
    <div className='write'>

       <img 
            src="https://images.unsplash.com/photo-1621146027714-e8921770f8d0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fGJhY2tncm91bmQlMjBpbWFnZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60" 
            alt="" 
            className='writeImg'/> 
         <form  className="writeForm">
          <div className="writeFormGroup">
           
            
            <label htmlFor="fileInput">
              <i className="writeIcon fa-solid fa-plus"></i>
            </label>
            <input type="file" id='fileInput' style={{display:"none"}} />
             <input type="text" id='textInput' placeholder='Title'
              className='writeInput' autoFocus={true} />
          </div>
          <div className="writeFormGroup">
            <textarea className='writeInput writeText' placeHolder='Tell your story...' type='text'></textarea>
           
          </div>
           <button type='submit' className='writeSubmit'>Publish</button>
          
         </form>

                  
        </div>
  )
}

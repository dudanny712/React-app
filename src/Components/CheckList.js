import React from 'react'
import './CheckList.css'

function ToDo(){
    return(

      <> 
      <div className='List'>
      <p >This is my To-Do List</p>
      <input type="Checkbox" />
      <label>Groceries</label>
      <input type="Checkbox" />
      <label>Study</label>
      <input type="Checkbox" />
      <label>Jog</label>
      <input type="Checkbox"/>
      <label>Code</label>
      
      </div>
      
   </>
      
      
            
      
    )
  }

  export default ToDo
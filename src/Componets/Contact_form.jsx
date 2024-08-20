import React from 'react'
import { useState } from 'react'

export default function Contact_form({addcontact}) {

    const[contactdata , setcontactdata] = useState({name:"" , email:" "})

    const handlechange = (e)=> {

        if(e.target.name ==="name"){
            setcontactdata({...contactdata, name: e.target.value})
        }
        else{
             setcontactdata({...contactdata, email: e.target.value})
     }
    }

     const handleAdd = ()=>{
        if(contactdata.name ===" " || contactdata.email===" "){
        alert("please enter all field")  
          
        }

        else {
            addcontact(contactdata);
        }

     }
  return (
  <> 
  <div>
        <h1 className='text-3xl ml-4 mt-4 font-bold'>ADD CONTACT</h1>


        <form className='mt-4 bg-amber-200'>
        <label  className='text-2xl '>NAME :</label>
     
        <input type="text"  placeholder='Enter name'  name='name' value={contactdata.name}  onChange={handlechange} className='border-black border-2 w-64 ml-2 pl-2'/>
        
        <br /><br />

        <label className='text-2xl'>EMAIL :</label>
        <input type="text" placeholder ='Enter email' name='email' value={contactdata.email} onChange={handlechange} className='border-black border-2 w-64 ml-2 pl-2'/>

        </form>
    <button   onClick={handleAdd} className='bg-amber-200   text-2xl font-bold text-red-700 mt-4 ml-[85px] p-2'>Add Contact</button>

   </div>
  </>

)

}

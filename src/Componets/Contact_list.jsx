import React from 'react'
import DeleteIcon from '@mui/icons-material/Delete';

export default function Contact_list(props) {

const{contact , removecontact} = props

const contactlist = contact.map((val)=>{
  return(
 <div className='border-2 border-black flex justify-between bg-pink-100 mt-2 mb-2 '>

    <div className='pl-2 '>{val.data.name}</div>
    <div className='pr-2'>{val.data.email}</div>
    <span  onClick={()=>removecontact(val.id)}><DeleteIcon/></span>
  </div>
  )
}
)

  return (
  <>

<div>{contactlist}</div>

  </>
    )

}

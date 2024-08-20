import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './Componets/header'
import Contact_list from './Componets/Contact_list'
import Contact_form from './Componets/Contact_form'
import uuid4 from 'uuid4';
import { useRef } from 'react'

function App() {
  const localStorageKey = "contact";

  const[contact , setcontact] = useState(()=>{
    return JSON.parse(localStorage.getItem(localStorageKey))||
    []}); 

useEffect(()=>{
localStorage.setItem(localStorageKey ,JSON.stringify(contact))

},[contact])



  
  const addcontact = (data) =>{
setcontact([...contact, {id: uuid4(), data}]);
}

const removecontact =(id)=> {

  const updatedlist = contact.filter((val)=>{
    return val.id !== id
  })
setcontact(updatedlist);

}

  return (
    <>
  <div  className='bg-amber-200 w-full h-screen'>
    <Header/>
    <Contact_form addcontact = {addcontact}/>
    <Contact_list contact = {contact} removecontact= {removecontact}/>
</div>
</>
  )
}

export default App

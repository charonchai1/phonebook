import React from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

const Add = () => {

    const [book,setBook] = useState({
        gender:"",
        first_name:"",
        last_name:"",
        age:"",
        contact:null,
        position:""
    })

    const navigate = useNavigate()

    const handleChange = (e) => {
        setBook(prev=>({...prev, [e.target.name]: e.target.value }))
    }

    const handleClick = async e => {  
        e.preventDefault()
        try {
            await axios.post("http://localhost:8800/phonebook2", book)
            navigate("/")
        }catch(err){
            console.log(err)
        }
    }
    console.log(book)

  return (
    <div className='form'>
        <input type="text" placeholder='gender' onChange={handleChange}  name="gender" />
        <input type="text" placeholder='first name' onChange={handleChange} name="first_name"/>
        <input type="text" placeholder='last name' onChange={handleChange} name="last_name" />
        <input type="number" placeholder='age' onChange={handleChange} name="age" />
        <input type="number" placeholder='contact' onChange={handleChange} name="contact" />
        <input type="text" placeholder='position' onChange={handleChange} name="position" />

    <button onClick={handleClick}>Add</button>
    </div>
  )
}

export default Add
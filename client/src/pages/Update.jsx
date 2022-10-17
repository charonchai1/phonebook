import React from 'react'
import { useState } from 'react'
import { useNavigate, useLocation} from 'react-router-dom'
import axios from 'axios'


const Update = () => {


    
    const navigate = useNavigate()
    const location = useLocation()

    const [book,setBook] = useState({
        
        gender:location.state.gender,
        first_name:location.state.fname,
        last_name:location.state.lname,
        age:location.state.age,
        contact:location.state.contact,
        position:location.state.position
    })




    

    

    console.log(location.state)

    const bookId = location.pathname.split('/')[2]
    

    const handleChange = (e) => {
        setBook(prev=>({...prev, [e.target.name]: e.target.value }))
    }

    const handleClick = async e => {  
        e.preventDefault()
        try {
            await axios.put("http://localhost:8800/phonebook2/"+ bookId, book)
            navigate("/")
        }catch(err){
            console.log(err)
        }
    }
    



  return (
    <div className='form'>
        <h1>Update Phonebook</h1>
        {/* <input type="text" placeholder='gender' onChange={handleChange} value={book.gender}  name="gender" /> */}
        <select value={book.gender} onChange={handleChange} name="gender" placeholder='Select gender'>
            <option value="" disabled>Gender</option>
            <option value="Female">Female</option>
            <option value="Male">Male</option>

        </select>
        <input type="text" placeholder='first name' onChange={handleChange}   value={book.first_name} name="first_name"/>
        <input type="text" placeholder='last name' onChange={handleChange} value={book.last_name} name="last_name" />
        <input type="number" placeholder='age' onChange={handleChange} value={book.age} name="age" />
        <input type="number" placeholder='contact' onChange={handleChange} value={book.contact} name="contact" />
        <input type="text" placeholder='position' onChange={handleChange} value={book.position} name="position" />

    <button onClick={handleClick}>Update</button>
    </div>
  )
}

export default Update;
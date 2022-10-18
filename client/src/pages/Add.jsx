import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "./Add.css";

const Add = () => {
  const [book, setBook] = useState({
    gender: "",
    first_name: "",
    last_name: "",
    age: "",
    contact: null,
    position: "",
  });

  const [error, setError] = useState({})

//   const Validation = (book) => {
//     let error = {}
//     console.log("into error")
//     console.log(book.first_name)
//     if(!book.gender){
//         error.gender = "Gender Required";
//     }else if(book.first_name = ""){
//         error.first_name = "First Name Required";
//         console.log("this shoud error",book.first_name)
//     }else if(!book.last_name){
//         error.last_name = "Last Name Required";
//     }else if(!book.age){
//         error.age = "Age Required";
//     }else if(!book.contact){
//         error.contact = "Contact Required";
//     }else if(!book.position){
//         error.position = "Position Required";
//     }

//     return error;
//   }




  const navigate = useNavigate();
  

  const handleChange = (e) => {
    console.log(e.target.value);
    setBook((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleClick = async (e) => {
    e.preventDefault();
        //setError(Validation(book))
    if(!book.first_name || !book.last_name || !book.gender || !book.contact || !book.position || !book.age){
        alert("Please enter all field")

    }else{
        try {
            await axios.post("http://localhost:8800/phonebook2", book);
            navigate("/");
          } catch (err) {
            console.log(err);
          }
    }

   
  };

  return (
    // <div className='form'>
    //     {/* <input type="text" placeholder='gender' onChange={handleChange}  name="gender" /> */}
    //     <h3>ADD NEW PHONEBOOK</h3>
    //     <select onChange={handleChange} name="gender" placeholder='Select gender'>
    //         <option value="" disabled>Gender</option>
    //         <option value="Female">Female</option>
    //         <option value="Male">Male</option>

    //     </select>

    //     <input type="text" placeholder='first name' onChange={handleChange} name="first_name"/>
    //     <input type="text" placeholder='last name' onChange={handleChange} name="last_name" />
    //     <input type="number" placeholder='age' onChange={handleChange} name="age" />
    //     <input type="number" placeholder='contact' onChange={handleChange} name="contact" />
    //     <input type="text" placeholder='position' onChange={handleChange} name="position" />

    // <button onClick={handleClick}>Add</button>
    // </div>

    <div className="container">
      <form id="form" className="form">
        <h2>ADD NEW PHONEBOOK</h2>
        {/* <div className="form-control">
       <label>Gender</label>
        <select
          onChange={handleChange}
          name="gender"
          placeholder="Select gender"
        >
        <option>Select gender</option>
          <option value="Female">Female</option>
          <option value="Male">Male</option>
        </select>
       </div> */}
       
       <div className="inputGender">
        <input type="radio" value="Male" name="gender" onChange={handleChange} /> Male
        <input type="radio" value="Female" name="gender" onChange={handleChange} /> Female
        {error.name && <p>{error.name}</p>}

       </div>
        <div className="form-control">
          <label>first name</label>
          {/* <input type="text" id="fname" placeholder="Enter first name"></input> */}
          <input
            type="text"
            id="fname"
            placeholder="first name"
            onChange={handleChange}
            name="first_name"
          />
          <small> Error Message</small>
        </div>
        <div className="form-control">
          <label>last name</label>
          {/* <input type="text" id="lname" placeholder="Enter last name"></input> */}
          <input
            type="text"
            id="lname"
            placeholder="last name"
            onChange={handleChange}
            name="last_name"
          />
          <small> Error Message</small>
        </div>
        <div className="form-control">
          <label>age</label>
          {/* <input type="number" id="age" placeholder="enter age"></input> */}
          <input
            type="number"
            id="age"
            placeholder="age"
            onChange={handleChange}
            name="age"
          />
          <small> Error Message</small>
        </div>
        <div className="form-control">
          <label>contact</label>
          {/* <input type="number" id="email" placeholder="Enter contact"></input> */}
          <input
            type="number"
            id="contact"
            placeholder="contact"
            onChange={handleChange}
            name="contact"
          />
          <small> Error Message</small>
        </div>
        <div className="form-control">
          <label>position</label>
          {/* <input type="text" id="fname" placeholder="Enter position"></input> */}
          <input
            type="text"
            id="position"
            placeholder="position"
            onChange={handleChange}
            name="position"
          />
          <small> Error Message</small>
        </div>
        <button onClick={handleClick}>Submit</button>
      </form>
    </div>
  );
};

export default Add;

import React from "react";
import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import axios from "axios";

const Update = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const [book, setBook] = useState({
    gender: location.state.gender,
    first_name: location.state.fname,
    last_name: location.state.lname,
    age: location.state.age,
    contact: location.state.contact,
    position: location.state.position,
  });



  const bookId = location.pathname.split("/")[2];

  const handleChange = (e) => {
    setBook((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleClick = async (e) => {
    // e.preventDefault();
    // try {
    //   await axios.put("http://localhost:8800/phonebook2/" + bookId, book);
    //   navigate("/");
    // } catch (err) {
    //   console.log(err);
    // }
    e.preventDefault();
    //setError(Validation(book))
if(!book.first_name || !book.last_name || !book.gender || !book.contact || !book.position || !book.age){
    alert("Please enter all field")

}else{
    try {
        await axios.put("http://localhost:8800/phonebook2/" + bookId, book);
        navigate("/");
      } catch (err) {
        console.log(err);
      }
}
  };

  console.log(book)

  return (
    // <div className='form'>
    //     <h1>Update Phonebook</h1>
    //     {/* <input type="text" placeholder='gender' onChange={handleChange} value={book.gender}  name="gender" /> */}
    //     <select value={book.gender} onChange={handleChange} name="gender" placeholder='Select gender'>
    //         <option value="" disabled>Gender</option>
    //         <option value="Female">Female</option>
    //         <option value="Male">Male</option>

    //     </select>
    //     <input type="text" placeholder='first name' onChange={handleChange}   value={book.first_name} name="first_name"/>
    //     <input type="text" placeholder='last name' onChange={handleChange} value={book.last_name} name="last_name" />
    //     <input type="number" placeholder='age' onChange={handleChange} value={book.age} name="age" />
    //     <input type="number" placeholder='contact' onChange={handleChange} value={book.contact} name="contact" />
    //     <input type="text" placeholder='position' onChange={handleChange} value={book.position} name="position" />

    // <button onClick={handleClick}>Update</button>
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

            
          <input
            type="radio"
            value="Male"
            name="gender"
            onChange={handleChange}
            checked={book.gender === 'Male'}
          />
          Male
          <input
            type="radio"
            // value={book.gender}
            value="Female"
            name="gender"
            onChange={handleChange} 
            checked={book.gender === 'Female'}
          />
          Female
        </div>
        <div className="form-control">
          <label>first name</label>
          {/* <input type="text" id="fname" placeholder="Enter first name"></input> */}
          <input
            type="text"
            id="fname"
            value={book.first_name}
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
            value={book.last_name} 
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
            value={book.age} 
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
            value={book.contact} 
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
            value={book.position} 
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

export default Update;

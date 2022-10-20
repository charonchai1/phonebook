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
   
    e.preventDefault();
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
    
    <div className="container">
      <form id="form" className="form">
        <h2>ADD NEW PHONEBOOK</h2>
      
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
            value="Female"
            name="gender"
            onChange={handleChange} 
            checked={book.gender === 'Female'}
          />
          Female
        </div>
        <div className="form-control">
          <label>first name</label>
          <input
            type="text"
            id="fname"
            value={book.first_name}
            placeholder="first name"
            onChange={handleChange}
            name="first_name"
          />
        </div>
        <div className="form-control">
          <label>last name</label>
          <input
            type="text"
            id="lname"
            placeholder="last name"
            value={book.last_name} 
            onChange={handleChange}
            name="last_name"
          />
        </div>
        <div className="form-control">
          <label>age</label>
          <input
            type="number"
            id="age"
            placeholder="age"
            value={book.age} 
            onChange={handleChange}
            name="age"
          />
        </div>
        <div className="form-control">
          <label>contact</label>
          <input
            type="number"
            id="contact"
            placeholder="contact"
            value={book.contact} 
            onChange={handleChange}
            name="contact"
          />
        </div>
        <div className="form-control">
          <label>position</label>
          <input
            type="text"
            id="position"
            placeholder="position"
            value={book.position} 
            onChange={handleChange}
            name="position"
          />
        </div>
        <button onClick={handleClick}>Submit</button>
      </form>
    </div>
  );
};

export default Update;

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

  const navigate = useNavigate();
  

  const handleChange = (e) => {
    console.log(e.target.value);
    setBook((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleClick = async (e) => {
    e.preventDefault();
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
    
    <div className="container">
      <form id="form" className="form">
        <h2>ADD NEW PHONEBOOK</h2>
       <div className="inputGender">
        <input type="radio" value="Male" name="gender" onChange={handleChange} /> Male
        <input type="radio" value="Female" name="gender" onChange={handleChange} /> Female
      
       </div>
        <div className="form-control">
          <label>first name</label>
          <input
            type="text"
            id="fname"
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
            onChange={handleChange}
            name="position"
          />
        </div>
        <button onClick={handleClick}>Submit</button>
      </form>
    </div>
  );
};

export default Add;

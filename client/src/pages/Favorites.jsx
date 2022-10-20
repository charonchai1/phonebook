import React from 'react'
import { useEffect } from "react";
import { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "./Books.css";
import StarIcon from '@mui/icons-material/Star';
import { useNavigate } from "react-router-dom";




function Favorite() {

  const [books, setBooks] = useState([]);
  const navigate = useNavigate();


  useEffect(() => {
    const fetchAllBooks = async () => {
      try {
        const res = await axios.get("http://localhost:8800/favorites");
        setBooks(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchAllBooks();
  }, []);




  const handleDelete = async (id) => {
    if (window.confirm("Are you sure you want to delete this")) {
      try {
        await axios.delete("http://localhost:8800/phonebook2/" + id);
        window.location.reload();
      } catch (err) {
        console.log("handle error", err);
      }
    }
  };


  const handleFavorite = async (id,value) => {
    try {
      await axios.put("http://localhost:8800/phonebook2/add-favorite/" + id,{favorite: !value});
      window.location.reload();
    } catch (err) {
      console.log("handle error favorite",err);
    }
  }


  return (
    <div style={{ marginTop: "150px" }}>
    <h2>FAVORITE</h2>
    <table className="styled-table">
      <thead>
        <tr>
        <th style={{ textAlign: "center" }}>Favorite</th>

          <th style={{ textAlign: "center" }}>No</th>
          <th style={{ textAlign: "center" }}>Gender</th>
          <th style={{ textAlign: "center" }}>First name</th>
          <th style={{ textAlign: "center" }}>Last name</th>
          <th style={{ textAlign: "center" }}>Age</th>
          <th style={{ textAlign: "center" }}>Contact</th>
          <th style={{ textAlign: "center" }}>Postion</th>
          <th style={{ textAlign: "center" }}>Action</th>
        </tr>
      </thead>
      <tbody>
        {books.map((book, index) => {
          return (
            <tr key={book.id}>
         <td><StarIcon onClick={() => handleFavorite(book.id, book.favorite)} style={{ color: book.favorite ? "#fcda77" : "black" }}/></td>

              <th scope="row">{index + 1}</th>
              
              <td>{book.gender}</td>
              <td>{book.first_name}</td>
              <td>{book.last_name}</td>
              <td>{book.age}</td>
              <td>{book.contact}</td>
              <td>{book.position}</td>
              <td>
            

              <button
                    className="btn btn-edit"
                    onClick={() => {
                      navigate(`/update/${book.id}`, {
                        state: {
                          gender: book.gender,
                          fname: book.first_name,
                          lname: book.last_name,
                          age: book.age,
                          contact: book.contact,
                          position: book.position,
                        },
                      });
                    }}
                  >
                    Update
                  </button>
                <button
                  className="btn btn-delete"
                  onClick={() => handleDelete(book.id)}
                >
                  delete
                </button>
              
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  </div>
  )
}

export default Favorite
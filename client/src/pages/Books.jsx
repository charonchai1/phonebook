import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "./Books.css";
import { useNavigate } from "react-router-dom";
import StarIcon from '@mui/icons-material/Star';

const Books = () => {
  const [books, setBooks] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchAllBooks = async () => {
      try {
        const res = await axios.get("http://localhost:8800/phonebook2");
        setBooks(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchAllBooks();
  }, []);

  const handleDelete = async (id) => {
    try {
      await axios.delete("http://localhost:8800/phonebook2/" + id);
      window.location.reload();
    } catch (err) {
      console.log("handle error", err);
    }
  };

  const handleFavorite = async (id, value) => {
    try {
      await axios.put("http://localhost:8800/phonebook2/add-favorite/" + id, {
        favorite: !value,
      });
      window.location.reload();
    } catch (err) {
      console.log("handle error favorite", err);
    }
  };

  return (
    
    <div style={{ marginTop: "150px" }}>
      
      <i className="fa fa-amazon"></i>
      <Link to="/add">
        <button className="btn btn-contact">Add new Phonebook</button>
      </Link>
      <Link to="/favorites">
        <button className="btn btn-favorite">favorite</button>
      </Link>
      <table className="styled-table">
        <thead>
          <tr>
          <th style={{ textAlign: "center" }}>Favorite.</th>
            <th style={{ textAlign: "center" }}>No.</th>
            <th style={{ textAlign: "center" }}>gender</th>
            <th style={{ textAlign: "center" }}>first-name</th>
            <th style={{ textAlign: "center" }}>last-name</th>
            <th style={{ textAlign: "center" }}>age</th>
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
                  {/* <Link to={`/update/${book.id}`}>
                            <button className='btn btn-edit'>Edit</button>
                            </Link>
                            <button className='btn btn-delete'>Delete</button>
                            <Link to={`/view/${book.id}`}>
                            <button className='btn btn-view'>View</button>
                            </Link> */}

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
                          position: book.position
                        },
                      });
                    }}
                  >
                    {/* <Link to={`/update/${book.id}`}>Update</Link> */}
                    Update
                  </button>
                  <button
                    className="btn btn-delete"
                    onClick={() => handleDelete(book.id)}
                  >
                    delete
                  </button>
                  {/* <button
                    className={`btn btn-view ${
                      book.favorite ? "bg-red-500" : "bg-black-500"
                    }`}
                    onClick={() => handleFavorite(book.id, book.favorite)}
                  >
                    {book.favorite ? "Unfavorite" : "favorite"}
                  </button> */}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Books;

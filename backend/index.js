import express from "express";
import mysql from "mysql";
import cors from "cors";

const app = express();

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "1234",
  database: "phonebook2",
});

app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  res.json("hello world");
});

app.get("/phonebook2", (req, res) => {
  const q = "SELECT * FROM phonebook2 ";
  db.query(q, (err, data) => {
    if (err) return res.json(err);
    return res.json(data);
  });
});


app.post("/phonebook2", (req, res) => {
  const q =
    "INSERT INTO phonebook2 (`gender`,`first_name`,`last_name`, `age`, `contact`, `position`) VALUES (?)";
  const values = [
    req.body.gender,
    req.body.first_name,
    req.body.last_name,
    req.body.age,
    req.body.contact,
    req.body.position,
    // "female",
    // "adam",
    // "silver",
    // "adamsilver@gmail.com",
    // "1234516678",
    // "superhero"
  ];
  db.query(q, [values], (err, data) => {
    if (err) return res.json(err);
    return res.json("complete");
  });
});




//get favorites
app.get("/favorites", (req, res) => {
  const q = "SELECT * FROM phonebook2 WHERE favorite = true ";
  db.query(q, (err, data) => {
    if (err) return res.json(err);
    return res.json(data);
  });
});







app.delete("/phonebook2/:id", (req, res) => {
  const bookId = req.params.id;
  const q = "DELETE FROM phonebook2 WHERE id = ? ";

  db.query(q, [bookId], (err, data) => {
    if (err) return res.json(err);
    return res.json("complete delete");
  });
});

app.put("/phonebook2/:id", (req, res) => {
    const bookId = req.params.id;
    const q = "UPDATE phonebook2 SET `gender` = ?, `first_name` = ?, `last_name` = ?, `age` = ?, `contact` = ?, `position` = ? WHERE id = ? ";

    const values = [
        req.body.gender,
        req.body.first_name,
        req.body.last_name,
        req.body.age,
        req.body.contact,
        req.body.position,
    ]
  
    db.query(q, [...values,bookId], (err, data) => {
      if (err) return res.json(err);
      return res.json("Complete updated");
    });
  });


  app.put("/phonebook2/add-favorite/:id", (req, res) => {
    const bookId = req.params.id;
    const q = "UPDATE phonebook2 SET  `favorite` = ? WHERE id = ? ";

    const values = [
        req.body.favorite
    ]
    console.log(req.body.favorite)
    console.log(req.params.id)


    db.query(q, [...values,bookId], (err, data) => {
      if (err) return res.json(err);
      return res.json("Complete updated");
    });
  });




  



app.listen(8800, () => {
  console.log("connect to backend server");
});

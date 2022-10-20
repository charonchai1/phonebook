import './App.css';
import {
  BrowserRouter,
  Route,
  Routes
} from "react-router-dom";
import Add from "./pages/Add"
import Update from "./pages/Update"
import Books from "./pages/Books"
import Favorites from "./pages/Favorites"


function App() {
  return (
    <div className="App">
        <BrowserRouter>
          <Routes>
            <Route path = "/" element={<Books/>}/>
            <Route path = "/add" element={<Add/>}/>
            <Route path = "/Favorites" element={<Favorites/>}/>
            <Route path = "/update/:id" element={<Update/>}/>


          </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;

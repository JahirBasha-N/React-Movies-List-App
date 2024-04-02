import Layout from "./components/common/Layout";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Customers from "./components/Customers";
import Rentals from "./components/Rentals";
import NavBar from "./components/common/NavBar";
import MovieForm from "./components/common/MovieForm";
import Login from "./components/Login";
import AddMovies from "./components/AddMovies";

function App() {
  return (
    <div className="container">
      <Router>
        <NavBar />
        <Routes>
          <Route path="/addMovie" element={<AddMovies />} />
          <Route path="/login" element={<Login />} />
          <Route path="/movies/:id" element={<MovieForm />} />
          <Route path="/movies" element={<Layout />} />
          <Route path="/customers" element={<Customers />} />
          <Route path="/rentals" element={<Rentals />} />
          <Route path="*" element={<Layout />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;

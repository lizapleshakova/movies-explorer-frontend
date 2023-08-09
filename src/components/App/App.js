import React from "react";
import {Route, Routes} from "react-router-dom";



import "./App.css";
import Main from "../Main/Main";
import Movies from "../Movies/Movies";
import SavedMovies from "../SavedMovies/SavedMovies";
import NotFound from "../NotFound/NotFound";
import Login from "../Login/Login";
import Register from "../Register/Register";
import Profile from "../Profile/Profile";


function App() {
  return (
    <div className="page">
    <Routes>
      <Route path="/" element={<Main/>}/>
      <Route path="/movies" element={<Movies/>}/>
      <Route path="/saved-movies" element={<SavedMovies/>}/>
      <Route path="*" element={<NotFound/>}/>
      <Route path="/signin" element={<Login />} />
      <Route path="/signup" element={<Register />} />
      <Route path="/profile" element={<Profile />} />
      

    </Routes>
    
    </div>
  );
}

export default App;

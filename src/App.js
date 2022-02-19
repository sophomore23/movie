import React, { useState, useEffect } from "react";
import "./App.css";
import Header from "./components/Header";
import Search from "./components/Search";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";
import Card from "react-bootstrap/Card";
import axios from "axios";
import { getApiURL } from "./utils/api";
const defaultImage =
  "https://static.zerochan.net/Uchiha.Obito.full.1393104.jpg";
const App = () => {
  const [loading, setLoading] = useState(true);
  const [movies, setMovies] = useState([]);

  //   useEffect(() => {
  //   getApiURL()
  //     .then(response => response.json())
  //     .then(res => {
  //       const data=res.data;
  //       console.log(data);
  //       setMovies(res.Search);
  //       setLoading(false);
  //     });
  // }, []);

  const search = (searchValue) => {
    
      setLoading(true);
    
      
        getApiURL(searchValue)
        // fetch(`https://www.omdbapi.com/?s=${searchValue}&apikey=3f607a82`)
        // .then((response) => response.json())
        .then((res) => {
          console.log(res.data);
          console.log(res.data.Response);
          //  setLoading(false);
          // setMovies(res.Search);
          // if (res.data.Response === "True") {
          //   setLoading(false);
          //   setMovies(res.data.Search);
          //   // console.log(loading)
          //   // console.log(movies);
          // } else {
          //   setLoading(true);
          // }
        })
    
    
  };

  return (
    <div className="App">
      <style>{"body { background-color: black; }"}</style>
      <Header text="NetFlix" />
      <Search search={search} />
    
      <div className="movies">
        {loading ? (
          <div style={{ paddingLeft: "50%", paddingTop: "10rem" }}>
            <Box sx={{ display: "flex" }}>
              <CircularProgress color="primary" />
            </Box>
          </div>
        ) : (
          movies.map((movie) => (
        
            <Card
              style={{
                width: "12rem",
                paddingTop: "2rem",
                paddingLeft: "5rem",
              }}
            >
              <Card.Img
                width="250"
                alt={`The movie titled: ${movie.Title}`}
                src={movie.Poster}
              />
              <Card.Body style={{ color: "red" }}>
                <Card.Title as="h3">{movie.Title}</Card.Title>
                <Card.Text>{movie.Year}</Card.Text>
              </Card.Body>
            </Card>
          ))
        )}
      </div>
      
    </div>
  );
};

export default App;

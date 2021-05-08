import './App.css';
import React, { useState } from "react"; 

// import { CSSTransition } from 'react-transition-group'; 

import SearchBar from "./components/SearchBar"; 
import Nominations from "./components/Nominations"; 
import SearchResults from "./components/SearchResults"; 

const App = () => {

  const API_KEY = process.env.REACT_APP_OMDB_KEY; 

  const [results, setResults] = useState([]); 
  const [noms, setNoms] = useState([]); 
  const [banner, setBanner] = useState(false); 

  async function loadResults(term) {
    await fetch(`https://www.omdbapi.com/?s=${term}&apikey=${API_KEY}`)
    .then(res => res.json())
    .then(data => {
      if (data.Search) {
        let resultList = []; 
        data.Search.forEach(item => {
           const title = item.Title; 
           const year = item.Year; 
           const entry = `${title} (${year})`; 
           resultList.push(entry); 
        })
        setResults([...resultList]); 
      } else {
        setResults([]); 
      }
    })
  }


  return (
    <div className="App">

      {banner && 
        <div class="warning-banner">
        <p>{banner ? "You've already got five nominees!" : ""}</p>
      </div>
      }
        <SearchBar loadResults={loadResults} />

      <div className="results-nominations">
        <SearchResults results={results} setNoms={setNoms} noms={noms} setBanner={setBanner}
          />
        <Nominations noms={noms}  setNoms={setNoms} setBanner={setBanner} />
      </div>
    </div>
  );
}

export default App;

import React from "react"; 

const SearchBar = (props) => {

  const loadResults  = props.loadResults; 

  function handleEnter(e) {
    e.preventDefault(); 
    loadResults(e.target.value); 
  }

  return (
    <div className="search box">
        <h1>The Shoppies</h1>
        <p>Search for your favorite movie. </p>
        <input onChange={handleEnter} type="text" placeholder="Enter title or keyword"></input>
    </div>
  )
}

export default SearchBar; 
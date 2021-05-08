import React from "react"; 

const SearchResults = (props) => {

  const { results, setNoms, noms, setBanner } = props; 

  function handleAdd(result) {
    if (noms.length >=5) {
      setBanner(true); 
    } else {
      setNoms(noms => [...noms, result]); 
    }
  }

  function isAlreadyNominated (result, noms) {
    if (noms.includes(result)) {
      return true; 
    }
  }

  function printResults(results) {

    const resultsList = results.map((result, idx) => {

      let buttonDisabled = false; 

      if (isAlreadyNominated(result, noms)) {
        buttonDisabled = true; 
      }
      return (
        <li key={idx}>
         {result}
         <button disabled={buttonDisabled} onClick={() => handleAdd(result, idx)}>Nominate</button>
        </li>
      )
    })

    return (
      <div className="results-list">
        <ul>{resultsList}</ul>
      </div>
    )
  }

  return (
    <div className="container box">
      <h2>Search Results</h2>
      {results.length ? 
         printResults(results)
      :
        <p>No results to show - enter one in the search (or check your spelling!)</p>
      }

    </div>
  )
}

export default SearchResults; 
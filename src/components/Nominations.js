import React from "react"; 

const Nominations = (props) => {

  const { noms, setNoms, setBanner } = props; 

  function handleDelete(nom) {
    setNoms(noms => noms.filter(item => item !== nom))
    if (noms.length <= 5) {
      setBanner(false); 
    }
  }

  function printNoms(noms) {
    const nomList = noms.map((nom, idx) => {
      return (
        <li key={idx}>
          {nom}
          <button onClick={() => handleDelete(nom)}>Delete Nomination</button>
        </li>
      )
    })

    return (
      <div className="noms-list">
        <ul>{nomList}</ul>
      </div>
    )
  }

  return (
    <div className="container">
      <h2>Nominations <span>(up to five)</span></h2>
      {noms.length 
      ? 
      printNoms(noms)
      : 
      <p>There are no nominations to show - add some from the search results!</p>
      }
    
    </div>
  )
}

export default Nominations; 
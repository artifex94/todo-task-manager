import React from 'react';
import './TodoSearch.css';

function TodoSearch({searchValue, setSearchValue, loading}) {

  return (   
    <input 
    placeholder= "Buscar..."
    className="searchbar"
    value={searchValue}
    onChange={(event)=> {
      setSearchValue(event.target.value);
      }
    }
    disabled={loading}
    />
  )
}

export {TodoSearch};
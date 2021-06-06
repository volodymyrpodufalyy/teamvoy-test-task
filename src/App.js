import React, { useState, useEffect, useRef } from "react";
import { PokemonsList } from "components"
import { pokemonApi } from "utils/api";

const App = () => {
  const [pokemons, setPokemons] = useState([]);
  const [filtered, setFiltered] = useState(false);
  const [pageSize, setPageSize] = useState(24);
  const [types, setTypes] = useState();
  const selectRef = useRef();
  useEffect(() => {
    pokemonApi.getTypes().then(({data}) => setTypes(data.results));
  }, [])

  const filterByType = () => {
    if(selectRef.current.value !== 'All'){
      pokemonApi.filterByType(selectRef.current.value).then(({data}) => setPokemons(data.pokemon.map(i => i.pokemon)));
      setFiltered(true);
    } 
    else {
      pokemonApi.getAll(pageSize).then(({data}) => setPokemons(data.results)); 
      setFiltered(false)   
    }
  };

  if(!types) return null;

  return (
    <div className="wrapper">
      <header>
        <div className="pokedex-title">
          <h1 >Pokedex</h1>
        </div>
        <div className="filter"> 
        <label htmlFor="type-select">Choose a type:</label>
        <select onChange={filterByType} ref={selectRef} name="types" id="type-select">
            <option value="All">All</option>
            {types.map(item => (
              <option 
              key={item.url} 
              value={item.name}
              >{item.name}
              </option>
            ))}
        </select>
        </div>
      </header>
      <main>
        <PokemonsList pageSize={pageSize} setPageSize={setPageSize} filtered={filtered} pokemons={pokemons} setPokemons={setPokemons} />
      </main>
    </div>
  );
}

export default App;

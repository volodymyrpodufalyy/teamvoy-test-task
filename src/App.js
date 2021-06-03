import React from "react";
import { PokemonsList } from "components"

const App = () => {
  

  return (
    <div className="wrapper">
      <header>
        <div className="pokedex-title">
          <h1>Pokedex</h1>
        </div>
      </header>
      <main>
            <PokemonsList/>
      </main>
    </div>
  );
}

export default App;

import { axios } from "core";

const pokemonApi = {
    getAll: (offset) => axios.get(`https://pokeapi.co/api/v2/pokemon?limit=30&offset=${offset}`),
    index: (url) => axios.get(`${url}`),
};
  
export default pokemonApi;
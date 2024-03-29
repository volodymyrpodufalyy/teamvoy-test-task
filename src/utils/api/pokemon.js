import { axios } from "core";

const pokemonApi = {
    getAll: (pageSize) => axios.get(`https://pokeapi.co/api/v2/pokemon?limit=${pageSize}&offset=0`),
    getPokemonData: (url) => axios.get(`${url}`),
    filterByType: (type) => axios.get(`https://pokeapi.co/api/v2/type/${type}`),
    getTypes: () => axios.get(`https://pokeapi.co/api/v2/type`),
};
  
export default pokemonApi;
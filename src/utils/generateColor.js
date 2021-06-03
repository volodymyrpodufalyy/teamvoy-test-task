const colors = {
	fire: '#FDDFDF',
	grass: '#DEFDE0',
	electric: '#FCF7DE',
	water: '#DEF3FD',
	ground: '#f4e7da',
	rock: '#d5d5d4',
	fairy: '#fceaff',
	poison: '#98d7a5',
	bug: '#f8d5a3',
	dragon: '#97b3e6',
	psychic: '#eaeda1',
	flying: '#F5F5F5',
	fighting: '#E6E0D4',
	normal: '#F5F5F5'
};

const pokemonColorTypes = Object.keys(colors);

const generateColor = (pokemonTypes) => {
    const diff = (arr1, arr2) => {
        const match = []
        for(const i in arr1) {   
            if(arr2.indexOf(arr1[i]) > -1){
                match.push(Object.values(colors)[i])
            }
        }
        return match;
    }
    const matchedColors = diff(pokemonColorTypes, pokemonTypes);
    return matchedColors;
    
}

export default generateColor;

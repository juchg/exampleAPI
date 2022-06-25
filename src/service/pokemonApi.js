const POKEMON_API = "https://pokeapi.co/api/v2/pokemon/";

export const PokemonApiGet = async (path) => {
    const url = POKEMON_API + path;
    let response = await fetch(url);
    if (response.ok || response.status === 400)
        return {
            result: await response.json(),
            status: response.status
        }
    else
        throw new Error(response.status);
}
import { PokemonApiGet } from '../service/pokemonApi';
import { useState, useRef } from 'react';

const Request = () => {

    const [search, setSearch] = useState("");
    const [result, setResult] = useState("Waiting");

    const SearchPoke = async (e) => {
        e.preventDefault();
        try {
            const res = await PokemonApiGet(search);
            setResult(JSON.stringify(res));
        }
        catch (err) {
            alert(`Error: ${err}`);
        }
    };

    return (
        <div>
            <form onSubmit={SearchPoke}>
                <input type="text" onChange={(e) => setSearch(e.target.value)} />
                <input type="submit" value="Search" />
            </form>
            <h1>Search {search}</h1>
            <h1>Result: {result}</h1>
        </div>
    );
}

export default Request;
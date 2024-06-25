import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function DetalhesFilme() {
    console.log(useParams())
    const {id} = useParams()
    const [filme, setFilme] = useState({})

    useEffect( () =>{
        fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=8234742848a50687c3dd698358ccc65d&language=pt-BR`)
        .then( response => response.json())
        .then(response => setFilme(response))
        .catch(error => console.log(error))
    },[])
    
    return (
        <>  
        <img className="" src={`https://image.tmdb.org/t/p/w1280/${filme.backdrop_path}`} alt="" />
        <p>{filme.title}</p>
        <p>{filme.vote_average}</p>
        </>
    );
}

export default DetalhesFilme;
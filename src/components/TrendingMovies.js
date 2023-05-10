import React,{useEffect, useState} from "react"
import AddIcon from '@mui/icons-material/Add';
import './TrendingMovies.css'
import { CircularProgress } from "@mui/material";

const placeHolderImage = 'https://images.squarespace-cdn.com/content/v1/5af1eeffa9e02865d9c12c16/1553063866563-IR4O9KIBIUWK50AY77TE/IMDB_Black.png?format=750w';
const apiKey = ''
function TrendingMovies(props){

const {searchText,genre} = props

const [movies,setMovies] = useState([])
const [loading,setLoading] = useState(false)

async function fetchMovies(genre){
    setLoading(true)

    const baseUrl = 'https://moviesdatabase.p.rapidapi.com/titles?year=2023';

    let url = genre ? baseUrl.concat(`&genre=${genre}`) : baseUrl

    const options = {
	    method: 'GET',
	    headers: {
		    'X-RapidAPI-Key': `${apiKey}`,
		    'X-RapidAPI-Host': 'moviesdatabase.p.rapidapi.com'
	    }
    };

    try {
	    const response = await fetch(url, options);
	    const result = await response.json();
        setMovies(result.results)
        setLoading(false)
    } catch (error) {
	console.error(error);
    setLoading(false)
    }
}

useEffect(()=>{
    fetchMovies(genre)
},[genre])

return <div>
        <div className="sub-heading">
            <h2>TrendingMovies</h2>
            <h4>See all</h4>
        </div>
        
        {loading? <div className="loader"><CircularProgress color="success" /></div> :<div className="movies-grid">
        {
            movies.filter((m)=>m.titleText.text.toLowerCase().indexOf(searchText.toLowerCase()) > -1).map((movie)=><div className="trending-movie-card" key={movie.id}>
            <img src={movie.primaryImage ? movie.primaryImage.url : placeHolderImage} alt='preview'/>
            <div className="body-content">
                <h2>{movie.titleText.text}</h2>
                <h4>{movie.releaseYear.year}</h4>
                <div className="rating">
                    <div className="imdb">IMDb</div>
                    <span>7.8 rating</span>
                </div>
            </div>
            <div className="actions">
                    <button className="watch-button">Watch</button>
                    <button className="add-button">{<AddIcon/>}</button>
                </div>
        </div>)
        }
        </div>}
    </div>
}

export default TrendingMovies
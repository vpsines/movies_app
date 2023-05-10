import React from "react"
import TrendingMovies from "./TrendingMovies"

function Movies(props){
    const {searchText,genre} = props
    return <div>
        <TrendingMovies searchText={searchText} genre={genre}/>
    </div>
}

export default Movies
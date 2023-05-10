import React from "react"
import '../App.css'
import './Bookmarks.css'
import StarIcon from '@mui/icons-material/Star';
import AddIcon from '@mui/icons-material/Add';
function Bookmarks(props){
    const {isExtended} = props

    return <div>
        <div className="sub-heading">
            <h3>Bookmarked</h3>
            <h5>See all</h5>
        </div>
        <div className="movie-card">
            <img src='https://assets.rocketstock.com/uploads/2016/03/Ant-Man-Title-Example.jpg' alt='preview'/>
            <div className="body-content">
                <div className="rating">{<StarIcon/>} 7.8</div>
                <h3>Ant Man</h3>
                <h5>2020</h5>
                <div className="actions">
                    <button>Watch</button>
                    <button className="add-button">{<AddIcon/>}</button>
                </div>
            </div>
        </div>
    </div>
}

export default Bookmarks
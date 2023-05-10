import React, { useEffect, useState } from "react";
import "./SideBar.css";
import { Toolbar } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import DoneIcon from "@mui/icons-material/Done";
import AddIcon from "@mui/icons-material/Add";
import RecentDownload from "./RecentDownload";
import Bookmarks from "./Bookmarks";

let genreList = [
  { genre: "Action", isSelected: false },
  { genre: "Comedy", isSelected: false },
  { genre: "Crime", isSelected: false },
  { genre: "Adventure", isSelected: false },
  { genre: "Drama", isSelected: false },
  { genre: "Mystery", isSelected: false },
  { genre: "Fantasy", isSelected: false },
  { genre: "Sci-Fi", isSelected: false },
];

function SideBar(props) {
  const { onSearch,onGenreChange} = props;

  const [genres, setGenres] = useState(genreList);
  const [text, setText] = useState("");

  function onGenreSelected(genre) {
    setGenres((oldGeneres) => {
      const index = oldGeneres.findIndex((item) => item.genre === genre);
      let newGenre = {...oldGeneres[index],isSelected:!oldGeneres[index].isSelected}
      
      let newValue = [...genreList]
      newValue[index] = newGenre
      onGenreChange(newGenre.genre)
      return newValue;
    });
  }

  return (
    <div className="side-bar">
      <Toolbar />
      <div className="search-bar">
        <SearchIcon />
        <input
          type="text"
          placeholder="Search Movies"
          value={text}
          onChange={(event) => {
            setText(event.target.value);
            onSearch(event.target.value);
          }}
        />
      </div>

      <div className="genre-filter">
        <h3>GENRE</h3>
        {genres.map((item, index) =>
          item.isSelected ? (
            <button
              key={item.genre}
              onClick={() => onGenreSelected(item.genre)}
              className="selected"
            >
              {item.genre}
              {<DoneIcon />}
            </button>
          ) : (
            <button
              key={item.genre}
              onClick={() => onGenreSelected(item.genre)}
              className="unselected"
            >
              {item.genre}
              {<AddIcon />}
            </button>
          )
        )}
      </div>

      <RecentDownload isExtended="false" />
      <Bookmarks isExtended="false" />
    </div>
  );
}

export default SideBar;

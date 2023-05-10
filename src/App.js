import './App.css';
import NavigationBar from './components/NavigationBar'; 
import CssBaseline from '@mui/material/CssBaseline';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';

import Typography from '@mui/material/Typography';
import Content from './components/Home';
import SideBar from './components/SideBar';
import { useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Bookmarks from './components/Bookmarks';
const drawerWidth = 240

function App() {

  // const [searchText,setSearchText] = useState('')

  // function onSearchInputChange(value){
  //   setSearchText(value)
  // }

  return (
    <div className="App">
      <BrowserRouter>
      <Box sx={{ display: 'flex' ,background:'#0d0c0f'}}>
          <CssBaseline />
          <AppBar
            position="fixed"
            sx={{ width: `calc(100% - ${drawerWidth}px)`, ml: `${drawerWidth}px` }}
          >
          </AppBar>
      <NavigationBar/>
      <Routes>
      <Route path='/' exact element={<Content/>} />
      <Route path='/bookmarks' exact element={<Bookmarks/>}/>
      </Routes>
      </Box>
      </BrowserRouter>
    </div>
  );
}

export default App;

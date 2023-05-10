import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Movies from './Movies';
import Series from './Series';
import TvShows from './TvShows';
import SideBar from './SideBar';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

export default function Home(props) {

  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const [searchText,setSearchText] = React.useState('')

  const [currentGenre,setGenre] = React.useState('')

  function onSearchInputChange(value){
    setSearchText(value)
  }

  function onGenreChange(value){
    setGenre(value)
  }

  return (
    <Box sx={{width:'100%',display:"inline-flex",height:'100%'}}>
    <Box sx={{ width: '75%'}}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider'}}>
        <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
          <Tab label="Movies" {...a11yProps(0)} style={{color:'white'}}/>
          <Tab label="Series" {...a11yProps(1)} style={{color:'white'}}/>
          <Tab label="TV Shows" {...a11yProps(2)} style={{color:'white'}}/>
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
        <Movies searchText={searchText} genre={currentGenre}/>
      </TabPanel>
      <TabPanel value={value} index={1}>
        <Series/>
      </TabPanel>
      <TabPanel value={value} index={2}>
        <TvShows/>
      </TabPanel>
    </Box>
    <SideBar onSearch={(val)=>onSearchInputChange(val)} onGenreChange={(val)=>onGenreChange(val)}/>
    </Box>
  );
}

import React from "react"
import Drawer from '@mui/material/Drawer';

import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import HomeIcon from '@mui/icons-material/Home';
import ExploreIcon from '@mui/icons-material/Explore';
import GroupsIcon from '@mui/icons-material/Groups';
import AccessAlarmIcon from '@mui/icons-material/AccessAlarm';
import SettingsIcon from '@mui/icons-material/Settings';
import InfoIcon from '@mui/icons-material/Info';
import DownloadIcon from '@mui/icons-material/Download';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import BookmarksIcon from '@mui/icons-material/Bookmarks';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import { Link } from "react-router-dom";
const drawerWidth = 240

const items = [
    {name:'Home',icon:<HomeIcon />,label:'menu',route:'/home'},
    {name:'Discover',icon:<ExploreIcon />,label:'menu',route:'/'},
    {name:'Community',icon:<GroupsIcon />,label:'menu',route:'/'},
    {name:'Coming Soon',icon:<AccessAlarmIcon />,label:'menu',route:'/'},
    {name:'Recent',icon:<AccessTimeIcon />,label:'library',route:'/'},
    {name:'Bookmarked',icon:<BookmarksIcon />,label:'library',route:'/bookmarks'},
    {name:'Top Rated',icon:<StarBorderIcon />,label:'library',route:'/'},
    {name:'Downloaded',icon:<DownloadIcon />,label:'library',route:'/'},
    {name:'Settings',icon:<SettingsIcon />,label:'other',route:'/'},
    {name:'Help',icon:<InfoIcon />,label:'other',route:'/'},
]

const listItemStyle = {color:'white'}
const listIconStyle = {color:'#9d1823'}

function NavigationBar(){
    return (
          <Drawer
            sx={{
              width: drawerWidth,
              flexShrink: 0,
              '& .MuiDrawer-paper': {
                width: drawerWidth,
                boxSizing: 'border-box',
                padding:'0 15px',
                background:'#1a161f',
                color:'white'
              },
            }}
            variant="permanent"
            anchor="left"
          >
            <Toolbar />
            <Divider />
            <List>
              {items.filter((item)=>item.label === 'menu').map((item, index) => (
                <ListItem key={item.name} disablePadding component={Link} to={item.route}  style={listItemStyle}>
                  <ListItemButton >
                    <ListItemIcon  style={listIconStyle}>
                      {item.icon}
                    </ListItemIcon>
                    <ListItemText primary={item.name} />
                  </ListItemButton>
                </ListItem>
              ))}
            </List>
            <Divider />
            <List>
              {items.filter((item)=>item.label === 'library').map((item, index) => (
                <ListItem key={item.name} disablePadding component={Link} to={item.route}>
                  <ListItemButton  style={listItemStyle}>
                    <ListItemIcon  style={listIconStyle}>
                      {item.icon}
                    </ListItemIcon>
                    <ListItemText primary={item.name} />
                  </ListItemButton>
                </ListItem>
              ))}
            </List>
            <Divider />
            <List>
              {items.filter((item)=>item.label === 'other').map((item, index) => (
                <ListItem key={item.name} disablePadding component={Link} to={item.route}>
                  <ListItemButton  style={listItemStyle}>
                    <ListItemIcon  style={listIconStyle}>
                      {item.icon}
                    </ListItemIcon>
                    <ListItemText primary={item.name} />
                  </ListItemButton>
                </ListItem>
              ))}
            </List>
          </Drawer>
      );
}

export default NavigationBar
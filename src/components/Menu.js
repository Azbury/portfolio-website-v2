import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import PersonIcon from '@mui/icons-material/Person';
import BuildIcon from '@mui/icons-material/Build';
import CodeIcon from '@mui/icons-material/Code';
import PhoneIcon from '@mui/icons-material/Phone';
import MenuIcon from '@mui/icons-material/Menu';
import HomeIcon from '@mui/icons-material/Home';

export default function Menu(props) {
  const [open, setOpen] = React.useState(false);

  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };

  const DrawerList = (
    <Box sx={{ width: 250 }} role="presentation" onClick={toggleDrawer(false)}>
      <List>
        <ListItem key={'Home'} 
                  disablePadding 
                  onClick={(e) => { 
                            e.preventDefault();
                            window.scrollTo({
                              top: 0,
                              behavior: "smooth"
                            });
                          }}
        >
          <ListItemButton>
            <ListItemIcon>
              <HomeIcon/>
            </ListItemIcon>
            <ListItemText primary={'Home'} />
          </ListItemButton>
        </ListItem>
        <ListItem key={'About'} 
                  disablePadding 
                  onClick={(e) => { 
                            e.preventDefault()
                            props.aboutMeScrollReference.current.scrollIntoView({
                              behavior: "smooth"
                            })}} 
        >
          <ListItemButton>
            <ListItemIcon>
              <PersonIcon/>
            </ListItemIcon>
            <ListItemText primary={'About'} />
          </ListItemButton>
        </ListItem>
        <ListItem key={'Experience'} 
                  disablePadding
                  onClick={(e) => { 
                            e.preventDefault()
                            props.experienceScrollReference.current.scrollIntoView({
                              behavior: "smooth"
                            })}} 
        >       
          <ListItemButton>
            <ListItemIcon>
              <BuildIcon/>
            </ListItemIcon>
            <ListItemText primary={'Experience'} />
          </ListItemButton>
        </ListItem>
        <ListItem key={'Projects'} 
                  disablePadding
                  onClick={(e) => { 
                            e.preventDefault()
                            props.projectsScrollReference.current.scrollIntoView({
                              behavior: "smooth"
                            })}} 
        >
          <ListItemButton>
            <ListItemIcon>
              <CodeIcon/>
            </ListItemIcon>
            <ListItemText primary={'Projects'} />
          </ListItemButton>
        </ListItem>
        <ListItem key={'Contact'} 
                  disablePadding
                  onClick={(e) => { 
                            e.preventDefault()
                            props.contactScrollReference.current.scrollIntoView({
                              behavior: "smooth"
                            })}}
        >
          <ListItemButton>
            <ListItemIcon>
              <PhoneIcon/>
            </ListItemIcon>
            <ListItemText primary={'Contact'} />
          </ListItemButton>
        </ListItem>
      </List>
    </Box>
  );

  return (
    <div>
      <button className='menu-button' onClick={toggleDrawer(true)}>
        <MenuIcon fontSize='large'/>
      </button>
      <Drawer open={open} onClose={toggleDrawer(false)}>
        {DrawerList}
      </Drawer>
    </div>
  );
  
}
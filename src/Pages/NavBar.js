import Header from '../components/Header';
import Sidebar from '../components/Sidebar';
import {Box} from '@mui/material';
import { useState } from 'react';

const drawerWidth = 240;
function NavBar ({children}){

const [mobileOpen,setmobileOpen ] = useState(false);

const DrawerTogg = () => {
    setmobileOpen(!mobileOpen);
};

return(
 <>
   <Box  sx={{ display: 'flex',
     flexGrow: 1,
     p: 3,
     ml: { sm: `${drawerWidth}px` },
     mt: '64px',
     backgroundColor: (theme) => theme.palette.background.default,
     color: (theme) => theme.palette.text.primary, 
     minHeight: '100vh',


    }} >
  <Header
     toggleDrawer={DrawerTogg}
  />
  <Sidebar
  drawerWidth={drawerWidth}
  mobileOpen={mobileOpen}
  handleDrawerToggle={DrawerTogg}
  
  />
  <Box
    component = 'main' 
    sx =  {{

flexGrow: 1,
          p: 3,
          ml: { sm: `${drawerWidth}px` },
          mt: '64px', 
          backgroundColor: '#f9f9f9',
          minHeight: '100vh',
    }}
  
  >
    {children}
  </Box>
   
   </Box>

    </>
)

}
export default NavBar;
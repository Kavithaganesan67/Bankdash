import PropTypes from 'prop-types';

// material-ui
import { useTheme } from '@mui/material/styles';
import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';
import ButtonBase from '@mui/material/ButtonBase';
import { FaSearch } from "react-icons/fa";
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import Profile from "../assets/profile.png"

import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import DirectionsIcon from '@mui/icons-material/Directions';
// assets
import { IconBell, IconMenu2 } from '@tabler/icons-react';
import Logo from './Logo';
import { Input, useMediaQuery } from '@mui/material';

// ==============================|| MAIN NAVBAR / HEADER ||============================== //

const Header = ({ handleLeftDrawerToggle }) => {
  const theme = useTheme();
  const mob = useMediaQuery('(max-width:600px)')

  return (
    <>
      {/* logo & toggler button */}
      <Box
        sx={{
          width: 228,
          display: 'flex',
          [theme.breakpoints.down('md')]: {
            width: 'auto'
          }
        }}
      >
        <Box component="span" sx={{ display: { xs: 'none', md: 'block' }, flexGrow: 1,marginLeft:"-0.7rem" }}>
          <Logo/>
        </Box>
       { mob &&<ButtonBase sx={{ borderRadius: '8px', overflow: 'hidden' }}>
          <Avatar
            variant="rounded"
            sx={{
              ...theme.typography.commonAvatar,
              ...theme.typography.mediumAvatar,
              transition: 'all .2s ease-in-out',
              background: "#CCE7FFFF",
              color: "#1E88E5FF",
              '&:hover': {
                background: "#1E88E5FF",
                color: "#CCE7FFFF"
              }
            }}
            onClick={handleLeftDrawerToggle}
            color="inherit"
          >
            <IconMenu2 stroke={1.5} size="1.3rem" />
          </Avatar>
        </ButtonBase>}
      </Box>
      <h5>Overview</h5>

      {/* header search */}
      
      <Box sx={{ flexGrow: 1 }} />
      <Box sx={{ flexGrow: 1 }} />

      {/* notification & profile */}
      <Paper
      component="form"
      sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', width: 200 }}
    >
      
      <InputBase
        sx={{ ml: 1, flex: 1 }}
        placeholder="Search for Something"
        inputProps={{ 'aria-label': 'search google maps' }}
      />
      <IconButton type="button" sx={{ p: '10px' }} aria-label="search">
        <SearchIcon />
      </IconButton>
      
    </Paper>
    <Box
        sx={{
          ml: 2,
          mr: 0,
         
        }}
      >
        <ButtonBase sx={{ borderRadius: "12px" }}>
          <Avatar
            variant="rounded"
            sx={{
             
              transition: "all .2s ease-in-out",
              background: "white",
              color: "black",
              '&[aria-controls="menu-list-grow"],&:hover': {
                background: "white",
                color: "black",
              },
            }}

            aria-haspopup="true"

            color="inherit"
          >
            <SettingsOutlinedIcon stroke={1.5} size="1.3rem" />
          </Avatar>
        </ButtonBase>
      </Box>
      <Box
        sx={{
          ml: 2,
          mr: 0,
         
        }}
      >
        <ButtonBase sx={{ borderRadius: "12px" }}>
          <Avatar
            variant="rounded"
            sx={{
             
              transition: "all .2s ease-in-out",
              background: "white",
              color: "black",
              '&[aria-controls="menu-list-grow"],&:hover': {
                background: "white",
                color: "black",
              },
            }}

            aria-haspopup="true"

            color="inherit"
          >
            <IconBell stroke={1.5} size="1.3rem" />
          </Avatar>
        </ButtonBase>
      </Box>
      <Avatar
        src={Profile}
        sx={{
         
          margin: "8px 0 8px 8px !important",
          cursor: "pointer",
        }}
       
      
        color="inherit"
       
      />
    </>
  );
};

Header.propTypes = {
  handleLeftDrawerToggle: PropTypes.func
};

export default Header;

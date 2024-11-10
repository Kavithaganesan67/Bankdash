import React, { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import { useMediaQuery, useTheme, styled, Drawer, AppBar, Box, Toolbar, CssBaseline } from '@mui/material';
import Header from "./Headernew";
import SideBar from "./SideBar";

// Constants
const drawerWidth = 260;

// Main styled component
const Main = styled('main', { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    ...theme.typography.mainContent,
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: open ? 0 : '-210px',
    width: `calc(100% - ${open ? drawerWidth : 0}px)`,
    [theme.breakpoints.down('md')]: {
      marginLeft: open ? drawerWidth : 20,
      width: `calc(100% - ${drawerWidth}px)`,
      padding: '16px',
    },
    [theme.breakpoints.down('sm')]: {
      marginLeft: open ? drawerWidth : 10,
      width: `calc(100% - ${drawerWidth}px)`,
      padding: '16px',
      marginRight: 10,
    },
  })
);

const FullLayout = () => {
  const theme = useTheme();
  const matchDownMd = useMediaQuery(theme.breakpoints.down('md'));
  const matchDownSm = useMediaQuery(theme.breakpoints.down('sm'));
  const [leftDrawerOpened, setLeftDrawerOpened] = useState(true);

  const handleLeftDrawerToggle = () => {
    setLeftDrawerOpened(prev => !prev);
  };

  useEffect(() => {
    if (matchDownSm) {
      setLeftDrawerOpened(false);  // Automatically close on small screens
    } else {
      setLeftDrawerOpened(true);  // Reopen on larger screens
    }
  }, [matchDownSm, matchDownMd]);

  return (
    <Box sx={{ display: 'flex' }}>
      <AppBar
        enableColorOnDark
        position="fixed"
        color="inherit"
        elevation={0}
        sx={{
          bgcolor: theme.palette.background.default,
          transition: leftDrawerOpened ? theme.transitions.create('width') : 'none',
        }}
      >
        <Toolbar>
          <Header handleLeftDrawerToggle={handleLeftDrawerToggle} />
        </Toolbar>
      </AppBar>

      <SideBar drawerOpen={leftDrawerOpened} drawerToggle={handleLeftDrawerToggle} />

      {/* Main Content */}
      <Main theme={theme} open={leftDrawerOpened}>
        <Box>
          <Outlet />
        </Box>
      </Main>
    </Box>
  );
};

export default FullLayout;

import React, {
  useState,
  useEffect,
  forwardRef,
  startTransition,
  useContext,
  useRef,
} from "react";
import home from "../assets/images/Sidebar/home.svg"
import HomeIcon from '@mui/icons-material/Home';
import ReceiptLongIcon from '@mui/icons-material/ReceiptLong';
import PersonIcon from '@mui/icons-material/Person';
import transfer from  "../assets/images/Sidebar/transfer.svg"
import user from  "../assets/images/Sidebar/user.svg"
import settings from  "../assets/images/Sidebar/settings.svg"
import service from  "../assets/images/Sidebar/service.svg"
import loan from  "../assets/images/Sidebar/loan.svg"
import investment from  "../assets/images/Sidebar/investment.svg"
import econometrics from  "../assets/images/Sidebar/econometrics.svg"
import creditcard from  "../assets/images/Sidebar/creditcard.svg"
import PropTypes from "prop-types";
import { Link, useLocation, useNavigate } from "react-router-dom";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import { useTheme } from "@mui/material/styles";
import Avatar from "@mui/material/Avatar";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import Grid from "@mui/material/Grid";
import { Drawer } from "@mui/material";
import RepoIcon from "../assets/images/icons/repo_icon";
import AcedoIcon from "../assets/images/icons/acedo_icon";
import Document from "../assets/images/icons/doc";
import Studio from "../assets/images/icons/studio";
import Bird from "../assets/images/icons/bird";
import LinearProgress, {
  linearProgressClasses,
} from "@mui/material/LinearProgress";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import ListItemButton from "@mui/material/ListItemButton";

import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Typography from "@mui/material/Typography";
import Collapse from "@mui/material/Collapse";
import useMediaQuery from "@mui/material/useMediaQuery";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";
import { IconChevronDown, IconChevronUp } from "@tabler/icons-react";
import {
  IconLayoutDashboard,
  IconCashRegister,
  IconDashboard,
  IconChartDots3,
  IconBrandMetabrainz,
  IconBowlSpoon,
  IconUsersGroup,
  IconTool
} from "@tabler/icons-react";
// import IconChartDots3 from "../assets/images/icons/Acedo.svg";
import TableChartOutlinedIcon from "@mui/icons-material/TableChartOutlined";
import PerfectScrollbar from "react-perfect-scrollbar";
import MuiChip from "@mui/material/Chip";
import Divider from '@mui/material/Divider';
import { alpha } from "@mui/material/styles";
import { IconBrandChrome, IconHelp } from "@tabler/icons-react";
import Logo from "./Logo";

import { BrowserView, MobileView } from "react-device-detect";
import Stack from "@mui/material/Stack";
import "@fortawesome/fontawesome-free/css/all.css";

// import logos from "./../assets/images/logos/logo.png";
import axios from "axios";
import Modal from "@mui/material/Modal";
import Tooltip from "@mui/material/Tooltip";
import CopilotIcon from "../assets/images/icons/copilot_config";
import Diversity3Icon from '@mui/icons-material/Diversity3';
import { LuUnplug } from "react-icons/lu";
import { GrUserPolice } from "react-icons/gr";
import LocalAtmIcon from '@mui/icons-material/LocalAtm';
const apiUrl = process.env.REACT_APP_API_URL;
const copilotUrl = process.env.REACT_APP_COPILOT_API_URL;
const path = process.env.REACT_APP_ACE_AI;
const swagger = process.env.REACT_APP_SWAGGER;
const dse = process.env.REACT_APP_DSE_STUDIO;

const Chip = ({ chipcolor, disabled, sx = {}, variant, ...others }) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const modelStyle = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    bgcolor: "background.paper",
    borderRadius: "5px",
    boxShadow: 24,
    width: isMobile ? "90%" : 400,
  };

  let defaultSX = {
    color: "primary.main",
    bgcolor: "primary.light",
    ":hover": {
      color: "primary.light",
      bgcolor: "primary.dark",
    },
  };

  let outlineSX = {
    color: "primary.main",
    bgcolor: "transparent",
    border: "1px solid",
    borderColor: "primary.main",
    ":hover": {
      color: "primary.light",
      bgcolor: "primary.dark",
    },
  };

  switch (chipcolor) {
    case "secondary":
      variant === "outlined"
        ? (outlineSX = {
            color: "secondary.main",
            bgcolor: "transparent",
            border: "1px solid",
            borderColor: "secondary.main",
            ":hover": {
              color: "secondary.main",
              bgcolor: "secondary.light",
            },
          })
        : (defaultSX = {
            color: "secondary.main",
            bgcolor: "secondary.light",
            ":hover": {
              color: "secondary.light",
              bgcolor: "secondary.main",
            },
          });
      break;
    case "success":
      variant === "outlined"
        ? (outlineSX = {
            color: "success.dark",
            bgcolor: "transparent",
            border: "1px solid",
            borderColor: "success.dark",
            ":hover": {
              color: "success.dark",
              bgcolor: alpha(theme.palette.success.light, 0.6),
            },
          })
        : (defaultSX = {
            color: "success.dark",
            bgcolor: alpha(theme.palette.success.light, 0.6),
            ":hover": {
              color: "success.light",
              bgcolor: "success.dark",
            },
          });
      break;
    case "error":
      variant === "outlined"
        ? (outlineSX = {
            color: "error.main",
            bgcolor: "transparent",
            border: "1px solid",
            borderColor: "error.main",
            ":hover": {
              color: "error.dark",
              bgcolor: "error.light",
            },
          })
        : (defaultSX = {
            color: "error.dark",
            bgcolor: alpha(theme.palette.error.light, 0.6),
            ":hover": {
              color: "error.light",
              bgcolor: "error.dark",
            },
          });
      break;
    case "orange":
      variant === "outlined"
        ? (outlineSX = {
            color: "orange.dark",
            bgcolor: "transparent",
            border: "1px solid",
            borderColor: "orange.main",
            ":hover": {
              color: "orange.dark",
              bgcolor: "orange.light",
            },
          })
        : (defaultSX = {
            color: "orange.dark",
            bgcolor: "orange.light",
            ":hover": {
              color: "orange.light",
              bgcolor: "orange.dark",
            },
          });
      break;
    case "warning":
      variant === "outlined"
        ? (outlineSX = {
            color: "warning.dark",
            bgcolor: "transparent",
            border: "1px solid",
            borderColor: "warning.dark",
            ":hover": {
              color: "warning.dark",
              bgcolor: "warning.light",
            },
          })
        : (defaultSX = {
            color: "warning.dark",
            bgcolor: "warning.light",
            ":hover": {
              color: "warning.light",
              bgcolor: "warning.dark",
            },
          });
      break;
    default:
  }

  if (disabled) {
    variant === "outlined"
      ? (outlineSX = {
          color: "grey.500",
          bgcolor: "transparent",
          border: "1px solid",
          borderColor: "grey.500",
          ":hover": {
            color: "grey.500",
            bgcolor: "transparent",
          },
        })
      : (defaultSX = {
          color: "grey.500",
          bgcolor: "grey.50",
          ":hover": {
            color: "grey.500",
            bgcolor: "grey.50",
          },
        });
  }

  let SX = defaultSX;
  if (variant === "outlined") {
    SX = outlineSX;
  }
  SX = { ...SX, ...sx };
  return <MuiChip {...others} sx={SX} />;
};

Chip.propTypes = {
  sx: PropTypes.object,
  chipcolor: PropTypes.string,
  variant: PropTypes.string,
  disabled: PropTypes.bool,
};

// ==============================|| SIDEBAR COMPONENT ||============================== //

const SideBar = ({ drawerOpen, drawerToggle, window }) => {
  const VITE_APP_VERSION = "v3.5.0";
  const theme = useTheme();
  const matchUpMd = useMediaQuery(theme.breakpoints.up("md"));
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const userRole = JSON.parse(sessionStorage.getItem("user"));
  const drawer = (
    <>
      <Box sx={{ display: { xs: "block", md: "none" } }}>
        <Box sx={{ display: "flex", p: 2, mx: "auto" }}>
          <Logo />
        </Box>
      </Box>

      <BrowserView>
        
          <div style={{display:"flex"}}>
          <Box sx={{background:"#0A06F4",color:"#0A06F4",height:"45px",marginTop:"15px"}}>|</Box>
            <ListItemButton
                      
                      
                        
                        sx={{
                          borderRadius: `8px`,
                          marginTop:"0.7rem",
                          padding:" 0.3rem",
                          paddingLeft:"1rem",
                          alignItems: "flex-start",
                       
                            // selectedItemId === menu.id ? "red" : "transparent",
                          "&:hover": {
                            backgroundColor: "transparent",
                           
                           
                            
                          },
                        }}
                        // selected={selectedItemId === menu.id}
                        // onClick={() => handleItemClick(menu.id)}
                      >
                      
                        <ListItemIcon
                          sx={{ my: "auto",
                            "&:hover": {
                              fill:"#fff"
                            }
                           }}
                        
                        >
                       <img src={home} alt="home"/>
                        
                        </ListItemIcon>
                        <ListItemText
                          primary={
                            <Typography
                              // variant={selectedItemId === menu.id ? "h5" : "body1"}
                              color="inherit"
                              sx={{
                                mt:"5px",
                                fontFamily: "Roboto, sans-serif",
                                fontWeight: "500",
                                lineHeight: "1.66",
                                // margin: "0px 0px 4px",
                              color:"#0A06F4"
                              
                              }}
                              // style={{
                              //   color: selectedItemId === menu.id ? "#fff" : "rgb(54, 65, 82)",
                              // }}
                            >
                           Dashboard
                            </Typography>
                          }
                        />
                      </ListItemButton>
          </div>
           
                      <ListItemButton
                       disabled
                      
                        
                      sx={{
                        borderRadius: `8px`,
                        marginTop:"0.5rem",
                        padding:" 0.3rem",
                        paddingLeft:"1rem",
                        alignItems: "flex-start",
                        // backgroundColor:
                          // selectedItemId === menu.id ? "red" : "transparent",
                       
                      }}
                      // selected={selectedItemId === menu.id}
                      // onClick={() => handleItemClick(menu.id)}
                    >
                      <ListItemIcon
                        sx={{ my: "auto",
                          "&:hover": {
                            fill:"#fff"
                          }
                         }}
                      
                      >
                     
                     <img src={transfer} alt="home"/>
                      </ListItemIcon>
                      <ListItemText
                        primary={
                          <Typography
                            // variant={selectedItemId === menu.id ? "h5" : "body1"}
                            color="inherit"
                            sx={{
                              fontFamily: "Roboto, sans-serif",
                              fontWeight: "500",
                              lineHeight: "1.66",
                              margin: "0px 0px 4px",
                              // color: selectedItemId === menu.id ? "#fff" : "rgb(54, 65, 82)",
                              "&:hover": {
                                color: "#FFF", // Sets the text color to white on hover
                              },
                            }}
                            // style={{
                            //   color: selectedItemId === menu.id ? "#fff" : "rgb(54, 65, 82)",
                            // }}
                          >
                         Transaction
                          </Typography>
                        }
                      />
                    </ListItemButton>
                    <ListItemButton
                      
                      disabled
                        
                      sx={{
                        borderRadius: `8px`,
                        marginTop:"0.5rem",
                        padding:" 0.3rem",
                        paddingLeft:"1rem",
                        alignItems: "flex-start",
                        // backgroundColor:
                          // selectedItemId === menu.id ? "red" : "transparent",

                      }}
                      // selected={selectedItemId === menu.id}
                      // onClick={() => handleItemClick(menu.id)}
                    >
                      <ListItemIcon
                        sx={{ my: "auto",
                          "&:hover": {
                            fill:"#fff"
                          }
                         }}
                      
                      >
                     <img src={user} alt="home"/>
                      
                      </ListItemIcon>
                      <ListItemText
                        primary={
                          <Typography
                            // variant={selectedItemId === menu.id ? "h5" : "body1"}
                            color="inherit"
                            sx={{
                              fontFamily: "Roboto, sans-serif",
                              fontWeight: "500",
                              lineHeight: "1.66",
                              margin: "0px 0px 4px",
                              // color: selectedItemId === menu.id ? "#fff" : "rgb(54, 65, 82)",
                              "&:hover": {
                                color: "#FFF", // Sets the text color to white on hover
                              },
                            }}
                            // style={{
                            //   color: selectedItemId === menu.id ? "#fff" : "rgb(54, 65, 82)",
                            // }}
                          >
                         Accounts
                          </Typography>
                        }
                      />
                    </ListItemButton>
                    <ListItemButton
                       disabled
                      
                        
                      sx={{
                        borderRadius: `8px`,
                        marginTop:"0.5rem",
                        padding:" 0.3rem",
                        paddingLeft:"1rem",
                        alignItems: "flex-start",
                        // backgroundColor:
                          // selectedItemId === menu.id ? "red" : "transparent",

                      }}
                      // selected={selectedItemId === menu.id}
                      // onClick={() => handleItemClick(menu.id)}
                    >
                      <ListItemIcon
                        sx={{ my: "auto",
                          "&:hover": {
                            fill:"#fff"
                          }
                         }}
                      
                      >
                    <img src={investment} alt="home"/>
                      
                      </ListItemIcon>
                      <ListItemText
                        primary={
                          <Typography
                            // variant={selectedItemId === menu.id ? "h5" : "body1"}
                            color="inherit"
                            sx={{
                              fontFamily: "Roboto, sans-serif",
                              fontWeight: "500",
                              lineHeight: "1.66",
                              margin: "0px 0px 4px",
                              // color: selectedItemId === menu.id ? "#fff" : "rgb(54, 65, 82)",
                              "&:hover": {
                                color: "#FFF", // Sets the text color to white on hover
                              },
                            }}
                            // style={{
                            //   color: selectedItemId === menu.id ? "#fff" : "rgb(54, 65, 82)",
                            // }}
                          >
                         Investments
                          </Typography>
                        }
                      />
                    </ListItemButton>
                    <ListItemButton
                      
                      disabled
                        
                      sx={{
                        borderRadius: `8px`,
                        marginTop:"0.5rem",
                        padding:" 0.3rem",
                        paddingLeft:"1rem",
                        alignItems: "flex-start",
                        // backgroundColor:
                          // selectedItemId === menu.id ? "red" : "transparent",

                      }}
                      // selected={selectedItemId === menu.id}
                      // onClick={() => handleItemClick(menu.id)}
                    >
                      <ListItemIcon
                        sx={{ my: "auto",
                          "&:hover": {
                            fill:"#fff"
                          }
                         }}
                      
                      >
                      <img src={creditcard} alt="home"/>
                      
                      </ListItemIcon>
                      <ListItemText
                        primary={
                          <Typography
                            // variant={selectedItemId === menu.id ? "h5" : "body1"}
                            color="inherit"
                            sx={{
                              fontFamily: "Roboto, sans-serif",
                              fontWeight: "500",
                              lineHeight: "1.66",
                              margin: "0px 0px 4px",
                              // color: selectedItemId === menu.id ? "#fff" : "rgb(54, 65, 82)",
                              "&:hover": {
                                color: "#FFF", // Sets the text color to white on hover
                              },
                            }}
                            // style={{
                            //   color: selectedItemId === menu.id ? "#fff" : "rgb(54, 65, 82)",
                            // }}
                          >
                         Credit Cards
                          </Typography>
                        }
                      />
                    </ListItemButton>
                    <ListItemButton
                      
                      disabled
                        
                      sx={{
                        borderRadius: `8px`,
                        marginTop:"0.5rem",
                        padding:" 0.3rem",
                        paddingLeft:"1rem",
                        alignItems: "flex-start",
                        // backgroundColor:
                          // selectedItemId === menu.id ? "red" : "transparent",

                      }}
                      // selected={selectedItemId === menu.id}
                      // onClick={() => handleItemClick(menu.id)}
                    >
                      <ListItemIcon
                        sx={{ my: "auto",
                          "&:hover": {
                            fill:"#fff"
                          }
                         }}
                      
                      >
                     <img src={loan} alt="home"/>
                      
                      </ListItemIcon>
                      <ListItemText
                        primary={
                          <Typography
                            // variant={selectedItemId === menu.id ? "h5" : "body1"}
                            color="inherit"
                            sx={{
                              fontFamily: "Roboto, sans-serif",
                              fontWeight: "500",
                              lineHeight: "1.66",
                              margin: "0px 0px 4px",
                              // color: selectedItemId === menu.id ? "#fff" : "rgb(54, 65, 82)",
                              "&:hover": {
                                color: "#FFF", // Sets the text color to white on hover
                              },
                            }}
                            // style={{
                            //   color: selectedItemId === menu.id ? "#fff" : "rgb(54, 65, 82)",
                            // }}
                          >
                         Loans
                          </Typography>
                        }
                      />
                    </ListItemButton>
                    <ListItemButton
                      
                      disabled
                        
                      sx={{
                        borderRadius: `8px`,
                        marginTop:"0.5rem",
                        padding:" 0.3rem",
                        paddingLeft:"1rem",
                        alignItems: "flex-start",
                        // backgroundColor:
                          // selectedItemId === menu.id ? "red" : "transparent",
                       
                      }}
                      // selected={selectedItemId === menu.id}
                      // onClick={() => handleItemClick(menu.id)}
                    >
                      <ListItemIcon
                        sx={{ my: "auto",
                          "&:hover": {
                            fill:"#fff"
                          }
                         }}
                      
                      >
                      <img src={service} alt="home"/>
                      
                      </ListItemIcon>
                      <ListItemText
                        primary={
                          <Typography
                            // variant={selectedItemId === menu.id ? "h5" : "body1"}
                            color="inherit"
                            sx={{
                              fontFamily: "Roboto, sans-serif",
                              fontWeight: "500",
                              lineHeight: "1.66",
                              margin: "0px 0px 4px",
                              // color: selectedItemId === menu.id ? "#fff" : "rgb(54, 65, 82)",
                              "&:hover": {
                                color: "#FFF", // Sets the text color to white on hover
                              },
                            }}
                            // style={{
                            //   color: selectedItemId === menu.id ? "#fff" : "rgb(54, 65, 82)",
                            // }}
                          >
                         Services
                          </Typography>
                        }
                      />
                    </ListItemButton>
                    <ListItemButton
                       disabled
                      
                        
                      sx={{
                        borderRadius: `8px`,
                        marginTop:"0.5rem",
                        padding:" 0.3rem",
                        paddingLeft:"1rem",
                        alignItems: "flex-start",
                        // backgroundColor:
                          // selectedItemId === menu.id ? "red" : "transparent",

                      }}
                      // selected={selectedItemId === menu.id}
                      // onClick={() => handleItemClick(menu.id)}
                    >
                      <ListItemIcon
                        sx={{ my: "auto",
                          "&:hover": {
                            fill:"#fff"
                          }
                         }}
                      
                      >
                      <img src={econometrics} alt="home"/>
                      
                      </ListItemIcon>
                      <ListItemText
                        primary={
                          <Typography
                            // variant={selectedItemId === menu.id ? "h5" : "body1"}
                            color="inherit"
                            sx={{
                              fontFamily: "Roboto, sans-serif",
                              fontWeight: "500",
                              lineHeight: "1.66",
                              margin: "0px 0px 4px",
                              // color: selectedItemId === menu.id ? "#fff" : "rgb(54, 65, 82)",
                              "&:hover": {
                                color: "#FFF", // Sets the text color to white on hover
                              },
                            }}
                            // style={{
                            //   color: selectedItemId === menu.id ? "#fff" : "rgb(54, 65, 82)",
                            // }}
                          >
                         My Privileges
                          </Typography>
                        }
                      />
                    </ListItemButton>
                    <ListItemButton
                      
                      disabled
                        
                      sx={{
                        borderRadius: `8px`,
                        marginTop:"0.5rem",
                        padding:" 0.3rem",
                        paddingLeft:"1rem",
                        alignItems: "flex-start",
                        // backgroundColor:
                          // selectedItemId === menu.id ? "red" : "transparent",

                      }}
                      // selected={selectedItemId === menu.id}
                      // onClick={() => handleItemClick(menu.id)}
                    >
                      <ListItemIcon
                        sx={{ my: "auto",
                          "&:hover": {
                            fill:"#fff"
                          }
                         }}
                      
                      >
                      <img src={settings} alt="home"/>
                      
                      </ListItemIcon>
                      <ListItemText
                        primary={
                          <Typography
                            // variant={selectedItemId === menu.id ? "h5" : "body1"}
                            color="inherit"
                            sx={{
                              fontFamily: "Roboto, sans-serif",
                              fontWeight: "500",
                              lineHeight: "1.66",
                              margin: "0px 0px 4px",
                              // color: selectedItemId === menu.id ? "#fff" : "rgb(54, 65, 82)",
                              "&:hover": {
                                color: "#FFF", // Sets the text color to white on hover
                              },
                            }}
                            // style={{
                            //   color: selectedItemId === menu.id ? "#fff" : "rgb(54, 65, 82)",
                            // }}
                          >
                         Settings
                          </Typography>
                        }
                      />
                    </ListItemButton>
         
          <Stack direction="row" justifyContent="center" sx={{ mb: 2 }}>
           
          </Stack>
       
      </BrowserView>
      <MobileView>
        <Box sx={{ px: 2 }}>
          <MenuList />
          <Stack direction="row" justifyContent="center" sx={{ mb: 2 }}>
            {/* <Chip
              label={VITE_APP_VERSION}
              disabled
              chipcolor="secondary"
              size="small"
              sx={{ cursor: "pointer" }}
            /> */}
          </Stack>
        </Box>
      </MobileView>
    </>
  );

  const drawerWidth = 260;
  const container =
    window !== undefined ? () => window.document.body : undefined;

  return (
    <Box
      component="nav"
      sx={{ flexShrink: { md: 0 }, width: matchUpMd ? drawerWidth : "auto" }}
      aria-label="mailbox folders"
    >
      <Drawer
        container={container}
        variant={matchUpMd ? "persistent" : "temporary"}
        anchor="left"
        open={drawerOpen}
        onClose={drawerToggle}
        sx={{
          "& .MuiDrawer-paper": {
            width: drawerWidth,
            background: theme.palette.background.default,
            color: theme.palette.text.primary,
            borderRight: "none",
            [theme.breakpoints.up("md")]: {
              top: "60px",
            },
          },
        }}
        ModalProps={{ keepMounted: true }}
        color="inherit"
      >
        {drawer}
      </Drawer>
    </Box>
  );
};


const MenuList = () => {
  const [selectedItemId, setSelectedItemId] = useState(null);
  const userRole = JSON.parse(sessionStorage.getItem("user"));
  const [isDevToolsOpen, setIsDevToolsOpen] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const location = useLocation();

  const handleDevToolsToggle = () => {
    setIsDevToolsOpen(!isDevToolsOpen);
  };

  const adminNavigation = {
    items: [
     
      {
        id: "sample-docs-roadmap",
        title: "Report",
        type: "group",
        children: [
          {
            id: "expense",
            subtitle:"Expenses",
          },
          {
            id: "repair",
            title: "Repairs",
            type: "repair",
            url: "/repair",
            icon: IconTool,
          },
          {
            id: "electricity",
            title: "Electricity",
            type: "electric",
            url: "/electricity",
            icon: LuUnplug,
          },
          {
            id: "purchase",
            title: "Purchases",
            type: "purchase",
            url: "/purchase",
            // icon: IconCashRegister,
          },
          {
            id: "accomodation",
            subtitle: "Accommodation",
          },
          {
            id: "accomodation",
            title: "Checkins",
            type: "item",
            url: "/accommodation",
            // icon: IconUsersGroup,
          },
          {
            id: "catering",
            title: "Catering",
            type: "item",
            url: "/catering",
            // icon: IconBowlSpoon,
          },
         
        ],
      },
    ],
  };
  useEffect(() => {
    // Function to determine the selected item based on the current URL
    const findSelectedItem = () => {
      const currentPath = location.pathname;

      // Iterate through the navigation items to find a matching URL
      for (const group of adminNavigation.items) {
        for (const child of group.children) {
          if (child.url === currentPath) {
            setSelectedItemId(child.id);
            return;
          }
        }
      }
      setSelectedItemId(null);
    };

    findSelectedItem();
  }, [location]);
 

  let menuItem = {};
  if (userRole?.role === "admin") {
    menuItem = adminNavigation;
  }

  const NavGroup = ({
    item,
    selectedItemId,
    setSelectedItemId,
  }) => {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
    const { pathname } = useLocation();
    const [isGroupOpen, setIsGroupOpen] = useState(false);

    const handleItemClick = (id) => {
      setSelectedItemId(id);
      sessionStorage.setItem("containerId", null);
    };

    // const handleGroupClick = () => {
    //   setIsGroupOpen(!isGroupOpen);
    // };

    // Render icon or image based on the type of value provided
    const renderIcon = (Icon, isSelected) => {
      if (!Icon) return null;

      return (
        <Icon
          sx={{
            stroke: isSelected ? 1.5 : 1,
            fontSize: isSelected ? "1.3rem" : "1rem",
          }}
        />
      );
    };

    return (
      <>
      <h1>hello  kkkk</h1>
        {item.children?.map((menu) => {
          const Icon = menu.icon;
          const itemIcon = menu?.icon ? (
            <Icon stroke={1.5} size="1.3rem" />
          ) : (
            <FiberManualRecordIcon
              sx={{
                width: selectedItemId === menu.id ? 8 : 6,
                height: selectedItemId === menu.id ? 8 : 6,
              }}
              fontSize={1}
            />
          );

          const itemTarget = menu.target ? "_blank" : "_self";

          const listItemProps = menu.external
            ? { component: "a", href: menu.url, target: itemTarget }
            : {
                component: forwardRef((props, ref) => (
                  <Link
                    ref={ref}
                    {...props}
                    to={menu.url}
                    target={itemTarget}
                  />
                )),
              };

          return (
            <>
              <p>hello</p>
              <h2>hiiiii</h2>
              {menu?.title &&
                        <ListItemButton
                        {...listItemProps}
                        key={menu.id}
                        disabled={menu.disabled}
                        sx={{
                          borderRadius: `8px`,
                          marginTop:"0.2rem",
                          padding:" 0.3rem",
                          paddingLeft:"1rem",
                          alignItems: "flex-start",
                          backgroundColor:
                            selectedItemId === menu.id ? "red" : "transparent",
                          "&:hover": {
                            backgroundColor: "#636ae8",
                            color: "white",
                            ".MuiTypography-root": {
                              color: "#FFF",
                            },
                            ".MuiListItemIcon-root": {
                              color: "#fff", 
                              fill: "#fff !important", 
                          },
                          },
                        }}
                        selected={selectedItemId === menu.id}
                        onClick={() => handleItemClick(menu.id)}
                      >
                        <ListItemIcon
                          sx={{ my: "auto", minWidth: !menu?.icon ? 18 : 36,
                            "&:hover": {
                              fill:"#fff"
                            }
                           }}
                          style={{
                            color: selectedItemId === menu.id ? "#fff" : "",
                            fill:
                              selectedItemId === menu.id
                                ? "#fff"
                                : "rgba(0, 0, 0, 0.54)",
                          }}
                        >
                          {menu.type ==='electric' ? 
                          <LuUnplug/>
                          :menu.type === 'security'
                          ?<GrUserPolice/>
                           :
                          itemIcon}
                        </ListItemIcon>
                        <ListItemText
                          primary={
                            <Typography
                              variant={selectedItemId === menu.id ? "h5" : "body1"}
                              color="inherit"
                              sx={{
                                fontFamily: "Roboto, sans-serif",
                                fontWeight: "500",
                                lineHeight: "1.66",
                                margin: "0px 0px 4px",
                                color: selectedItemId === menu.id ? "#fff" : "rgb(54, 65, 82)",
                                "&:hover": {
                                  color: "#FFF", // Sets the text color to white on hover
                                },
                              }}
                              // style={{
                              //   color: selectedItemId === menu.id ? "#fff" : "rgb(54, 65, 82)",
                              // }}
                            >
                           Dashboard
                            </Typography>
                          }
                        />
                      </ListItemButton>
              }
            </>
          );
        })}
      </>
    );
  };

  return (
    <>
      <div
        style={{
          overflowY: "auto",
          maxHeight:
            userRole?.role === "dev"
              ? "calc(100vh - 125px)"
              : "calc(100vh - 125px)",
        }}
      >
        {menuItem?.items?.map((item) => (
          <NavGroup
            key={item.id}
            item={item}
            selectedItemId={selectedItemId}
            setSelectedItemId={setSelectedItemId}
          />
        ))}
      </div>
    </>
  );
};

export default SideBar;
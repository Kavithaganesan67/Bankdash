import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { CardActionArea } from '@mui/material';
import { useTheme, useMediaQuery } from '@mui/material';

const Blog = (props) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm')); // Check if screen size is small or extra-small

  const handleClick = (loc) => {
    if (typeof loc === "string" && loc.trim() !== "") {
      if (loc.includes("repoai")) {
          window.open(loc, "RepoAI");
      } else {
        window.open(loc, "AceDo");
      }
    } else {
      console.error("Invalid location provided:", loc);
    }
  };

  return (
    <Card
      onClick={() => handleClick(props.loc)}
      sx={{
        cursor: "pointer",
        marginBottom:"20px",
        height: '100%',
         // Full width on mobile, fixed width on larger screens
        margin: "10px",
        '&:hover': {
         
          boxShadow:'18px -18px 16px -23px rgb(155, 155, 155,1)'
        },
         // Column layout on mobile, row layout on larger screens
      }}
    >
      
        <CardContent sx={{
          flexGrow: 1,
          p: isMobile ? 1 : 3, // Less padding on mobile
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          textAlign: 'center',
          height:"100%"
        }}>
          <Box
            sx={{
              height: isMobile ? 150 : 170, // Adjust height based on screen size
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              mb: 2,
            }}
          >
            <img
              src={props.logo}
              alt={props.title}
              style={{
                maxHeight: '100%',
                maxWidth: '100%',
              }}
            />
          </Box>
          <Typography
            variant="h6"
            component="div"
            sx={{
              fontWeight: 'bold',
              mb: 1,
            }}
          >
            {props.title}
          </Typography>
          <Typography
            variant="body2"
            color="textSecondary"
            sx={{
              fontSize: isMobile ? 12 : 13, // Adjust font size for mobile
            }}
          >
            {props.text}
          </Typography>
        </CardContent>
      
    </Card>
  );
};

export default Blog;
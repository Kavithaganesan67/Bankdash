import { useTheme } from "@mui/material/styles";
import { styled } from "@mui/material/styles";
import { useState } from "react";
import { color, motion, useCycle } from "framer-motion";
import { useEffect, useRef, forwardRef } from "react";
import { startTransition } from "react";
import { useNavigate,Link } from "react-router-dom";
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import apple from '../../assets/images/Login/apple.svg';
import google from '../../assets/images/Login/google.svg'
import human from '../../assets/images/Login/human.png'
import {
  Box,
  Button,
  Card,
  Checkbox,
  Divider,
  FormControl,
  FormControlLabel,
  FormHelperText,
  Grid,
  IconButton,
  InputAdornment,
  InputLabel,
  OutlinedInput,
  Stack,
  Typography,
  useMediaQuery,
} from "@mui/material";
import * as Yup from "yup";
import { Formik } from "formik";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
// import MainCard from "./MainCard";
// import Logo from "../../layouts/Logo";

const AuthWrapper1 = styled("div")(({ theme }) => ({

    width:'100%',
  minHeight: "100vh",
  backgroundRepeat:"no-repeat",
  backgroundAttachment: "fixed",
  backgroundSize: "100% 100%",
//   backgroundPosition: "center", 
}));

const AuthCardWrapper = ({ children, ...other }) => (
  <Card
    sx={{
      width: { xs: 300, lg: 425,md:400 },
      margin: { xs: 3, md: 4 },
      marginTop:{md:"0.4rem"},
      marginBottom:{md:"0px"},
      marginLeft:{md:"5rem"},
      border:'1px solid #eaeaea',
    //   "& > *": {
    //     flexGrow: 1,
    //     flexBasis: "50%",
    //   },
    }}
    content={false}
    {...other}
  >
    <Box sx={{ p: { xs: 2, sm: 5} }}>{children}</Box>
  </Card>
);
const DUMMY_USERS = [
  {
    email: "Admin",
    password: "GDT",
    role: "admin",
    name: "Admin",
    user_id: "bb-dev-user-1",
  },
 
];
const AuthLogin = ({ ...others }) => {
  const theme = useTheme();
  const navigate = useNavigate();
  const scriptedRef = useScriptRef();
  const matchDownSM = useMediaQuery(theme.breakpoints.down("md"));

  const [checked, setChecked] = useState(true);
  const emailRef = useRef(null);

  useEffect(() => {
    if (emailRef.current) {
      emailRef.current.focus();
    }
  }, []);

  const googleHandler = async () => {
    console.error("Login");
  };

  const [showPassword, setShowPassword] = useState(false);
  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };
  const handleSubmit = async (values, { setSubmitting, setErrors }) => {
    setSubmitting(true);
  
    // Find the user based on the entered username (email) and password
    const user = DUMMY_USERS.find(
      (user) => user.email === values.name && user.password === values.password
    );
  
    if (user) {
      // If user is found, store in sessionStorage and navigate to the appropriate page
      sessionStorage.setItem("user", JSON.stringify(user));
  
      startTransition(() => {
        if (user.role === "admin") {
          navigate("/dashboard"); // Navigate to dashboard if admin
        } else {
          navigate("/"); // Navigate to home page if regular user
        }
      });
    } else {
      // If user not found, show error message
      setErrors({ submit: "Invalid username or password" }); // Update error message
    }
  
    setSubmitting(false); // Stop submitting
  };
  
  // const handleSubmit = async (values, { setSubmitting, setErrors }) => {
  //   setSubmitting(true);

  //   const user = DUMMY_USERS.find(
  //     (user) => user.email === values.email && user.password === values.password
  //   );

  //   if (user) {
  //     sessionStorage.setItem("user", JSON.stringify(user));
  //     startTransition(() => {
  //       if (user.role === "admin") {
  //         navigate("/dashboard");
  //       } else {
  //         navigate("/");
  //       }
  //     });
  //   } else {
  //     setErrors({ submit: "Invalid email or password" });
  //   }

  //   setSubmitting(false);
  // };

  return (
    <>
      <Formik
        initialValues={{
          name: "",
          password: "",
          submit: null,
        }}
       
        onSubmit={handleSubmit}
      >
        {({
          errors,
          handleBlur,
          handleChange,
          handleSubmit,
          isSubmitting,
          touched,
          values,
        }) => (
          <form noValidate onSubmit={handleSubmit} {...others}>
          <FormControl
  fullWidth
  className="mt-0"
  error={Boolean(touched.email && errors.email)}
  sx={{ ...theme.typography.customInput }}
>
  <OutlinedInput
    id="outlined-adornment-username-login" // Change ID to reflect "username"
    type="text"
    value={values.name}  // still using email field for validation
    name="name"  // email here is still used to validate email addresses
    onBlur={handleBlur}
    variant="standard"
    onChange={handleChange}
    label="Enter username"  // Change label to "Username"
    sx={{
      padding: "0px !important",
      "& .MuiOutlinedInput-notchedOutline": {
        borderColor: "transparent",
      },
      "&:hover .MuiOutlinedInput-notchedOutline": {
        borderColor: "transparent",
      },
      "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
        borderColor: "transparent",
      },
    }}
  />
  {touched.name && errors.name && (
    <FormHelperText error id="standard-weight-helper-text-email-login" sx={{ marginY: 0 }}>
     Name must me valid
    </FormHelperText>
  )}
</FormControl>


            <FormControl
              fullWidth
              className="mt-2"
              error={Boolean(touched.password && errors.password)}
              sx={{ ...theme.typography.customInput }}
            >
             
              <OutlinedInput
                id="outlined-adornment-password-login"
                type={showPassword ? "text" : "password"}
                value={values.password}
                name="password"
                onBlur={handleBlur}
                onChange={handleChange}
                label="Password"
                inputProps={{}}
                sx={{
                  "& .MuiOutlinedInput-notchedOutline": {
                    borderColor: "transparent",
                  },
                  "&:hover .MuiOutlinedInput-notchedOutline": {
                    borderColor: "transparent",
                  },
                  "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                    borderColor: "transparent",
                  },
                }}
              />
              <span className="position-absolute" 
              style={{
                right:"3%",
                top:"25%",
              }} 
              onClick={()=>setShowPassword(!showPassword)}>
              {showPassword ? 
                <RemoveRedEyeIcon sx={{fontSize:"19px"}}/>
                :
                <VisibilityOffIcon sx={{fontSize:"19px"}}/>
              }
              </span>
              {touched.password && errors.password && (
                <FormHelperText
                  error
                  id="standard-weight-helper-text-password-login"
                  sx={{ marginY: 0 }}
                >
                  {errors.password}
                </FormHelperText>
              )}
            </FormControl>
            <Stack
              direction="row"
              alignItems="center"
              justifyContent="space-between"
              spacing={1}
            >
              <FormControlLabel
                control={
                  <Checkbox
                    checked={checked}
                    onChange={(event) => setChecked(event.target.checked)}
                    name="checked"
                    sx={{
                      color: "#636AE8",
                      "&.Mui-checked": {
                        color: "#636AE8",
                      },
                      paddingLeft:"0"
                    }}
                  />
                }
                label="Remember me"
              />
              <Typography
                variant="subtitle1"
                color="#636AE8"
                sx={{ textDecoration: "none", cursor: "pointer" }}
              >
                Forgot Password?
              </Typography>
            </Stack>
            {errors.submit && (
              <Box sx={{ mt: 3 }}>
                <FormHelperText error>{errors.submit}</FormHelperText>
              </Box>
            )}

            <Box sx={{ mt: 2 }}>
              <AnimateButton>
                <Button
                  disableElevation
                  disabled={isSubmitting}
                  fullWidth
                  size="large"
                  type="submit"
                  className="mb-4"
                  variant="contained"
                  color="secondary"
                  sx={{
                    background: "#4C49ED",
                    color: "white",
                    "&:hover": {
                      background: "#636AE8",
                      color: "#ffff",
                      textDecoration: "none",
                      backgroundColor: "#636AE8",
                      boxShadow:
                        "rgba(0, 0, 0, 0.2) 0px 2px 4px -1px, rgba(0, 0, 0, 0.14) 0px 4px 5px 0px, rgba(0, 0, 0, 0.12) 0px 1px 10px 0px",
                    },
                  }}
                >
                  Sign in
                </Button>
              </AnimateButton>
            </Box>
          </form>
        )}
      </Formik>
    </>
  );
};
const useScriptRef = () => {
  const scripted = useRef(true);

  useEffect(
    () => () => {
      scripted.current = false;
    },
    []
  );

  return scripted;
};

const AnimateButton = forwardRef(
  ({ children, type, direction, offset, scale }, ref) => {
    let offset1;
    let offset2;
    switch (direction) {
      case "up":
      case "left":
        offset1 = offset;
        offset2 = 0;
        break;
      case "right":
      case "down":
      default:
        offset1 = 0;
        offset2 = offset;
        break;
    }

    const [x, cycleX] = useCycle(offset1, offset2);
    const [y, cycleY] = useCycle(offset1, offset2);

    switch (type) {
      case "rotate":
        return (
          <motion.div
            ref={ref}
            animate={{ rotate: 360 }}
            transition={{
              repeat: Infinity,
              repeatType: "loop",
              duration: 2,
              repeatDelay: 0,
            }}
          >
            {children}
          </motion.div>
        );
      case "slide":
        if (direction === "up" || direction === "down") {
          return (
            <motion.div
              ref={ref}
              animate={{ y: y !== undefined ? y : "" }}
              onHoverEnd={() => cycleY()}
              onHoverStart={() => cycleY()}
            >
              {children}
            </motion.div>
          );
        }
        return (
          <motion.div
            ref={ref}
            animate={{ x: x !== undefined ? x : "" }}
            onHoverEnd={() => cycleX()}
            onHoverStart={() => cycleX()}
          >
            {children}
          </motion.div>
        );

      case "scale":
      default:
        if (typeof scale === "number") {
          scale = {
            hover: scale,
            tap: scale,
          };
        }
        return (
          <motion.div
            ref={ref}
            whileHover={{ scale: scale?.hover }}
            whileTap={{ scale: scale?.tap }}
          >
            {children}
          </motion.div>
        );
    }
  }
);
const Login = () => {
  const theme = useTheme();
  const matchDownSM = useMediaQuery(theme.breakpoints.up("md"));
  const navigate = useNavigate();
  const navigatetologin=()=>{
    navigate("/register");
  }
  return (
    <AuthWrapper1>
        <div className="d-flex justify-content-between"
        style={{
          // minHeight:"calc(100vh - 90vh)"
        }}>
          <h4 style={{margin:"20px"}}>Your Logo</h4>
       
        </div>
        
    <Grid container sx={{paddingX:'3%' }}>
    
     
      <Grid 
        item 
        xs={12}  md={6} 
        sx={{ display: 'flex', justifyContent:{xs:"",sm:"center"}, alignItems: 'center', }}
      >
        <Box sx={{ textAlign: {xs:"",sm:"center"},marginLeft:'5%',mt:{xs:0,sm:"100px"}}}>
          <Box sx={{ mb: 3 }}>
            
            <Typography   fontSize={'35px'} sx={{
             
              textAlign:'Left',
              // width:'69%',
              fontWeight:"600"}}>
             Sign in to
            </Typography>
            <Typography  fontSize={'25px'} sx={{
             
             textAlign:'Left',
            //  width:'80%',
             fontWeight:"500"}}>
            Lorem Ipsum is simple
           </Typography>
            <Typography variant="body2"  className="mt-4"  fontSize={'14px'} sx={{textAlign:'Left'}}>
             If you don't have a account register
            </Typography>
            <Typography variant="body2"  className="mt-4"  fontSize={'14px'} sx={{textAlign:'Left'}}>
             You can <span onClick={()=>navigatetologin()} style={{color:"#4C49ED",fontWeight:500,cursor:"pointer"}}>Register here !</span>
            </Typography>
            <Box sx={{display:{xs:"none",sm:"block"}}}>   <img src={human} height="370px" style={{marginLeft:"150px"}}/></Box>
          
          </Box>
  
  
        </Box>
      </Grid>
  
      {/* Right Section */}
      <Grid 
        item 
        xs={12} md={5} 
        sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}
      >
        <Grid item sx={{ m: { xs: 1, sm: 3 }, mb: 0 }}>
          <AuthCardWrapper>
            <Grid container spacing={2} alignItems="center" justifyContent="center">
              {/* Sign in text */}
              <Grid item xs={12}>
                <Stack alignItems="center" justifyContent="center" spacing={1}>
                  <Typography sx={{ 
                       color: "#171A1FFF",
                       fontWeight: 700,
                      //  fontFamily: '"Archivo", sans-serif',
                        fontSize: "32px",
                   }} gutterBottom
                    variant="h3" className="signin mb-2">
                    Sign in
                  </Typography>
                </Stack>
              </Grid>
              <Grid item xs={12} sx={{m:"20px"}}>
                <AuthLogin />
              </Grid>
            </Grid>
          </AuthCardWrapper>
          <Typography color="grey" sx={{ml:{xs:"9rem",sm:"13rem"},mt:"2rem"}}>or continue with</Typography>
          <Box sx={{marginLeft:{xs:"9rem",sm:"13rem"}}}>
            <img src={apple} width={30} height={30} style={{margin:"20px"}} alt="apple"/>
            <img src={google} width={30} height={30} alt="apple"/>
          </Box>

        </Grid>
      </Grid>
    </Grid>
  </AuthWrapper1>
  
  );
};

export default Login;
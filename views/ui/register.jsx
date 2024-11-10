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
import human from '../../assets/images/Login/human.png'
import google from '../../assets/images/Login/google.svg'
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
      marginTop:{md:"2.4rem"},
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
    email: "admin@bleubird.com",
    password: "admin123",
    role: "admin",
    name: "Christopher",
    user_id: "bb-dev-user-1",
  },
  {
    email: "dev@bleubird.com",
    password: "dev123",
    role: "dev",
    name: "Alicia",
    user_id: "bb-dev-user-1",
  },
  {
    email: "enduser@bleubird.com",
    password: "enduser123",
    role: "endUser",
    name: "Steven",
    user_id: "bb-dev-user-1",
  },
];


const AuthLogin = ({ ...others }) => {
  const theme = useTheme();
  const navigate = useNavigate();
  const matchDownSM = useMediaQuery(theme.breakpoints.down("md"));

  const [checked, setChecked] = useState(true);
  const emailRef = useRef(null);

  useEffect(() => {
    if (emailRef.current) {
      emailRef.current.focus();
    }
  }, []);

  const [showPassword, setShowPassword] = useState(false);
  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleSubmit = async (values, { setSubmitting, setErrors }) => {
    setSubmitting(true);

   

   
        navigate("/login");
     
    

    setSubmitting(false);
  };

  return (
    <Formik
      initialValues={{
        email: "",
        name: "",
        contactno: "",
        password: "",
        confirmpassword: "",
        submit: null,
      }}
      validationSchema={Yup.object().shape({
        email: Yup.string()
          .email("Must be a valid email")
          .max(255)
          .required("Email is required"),
        name: Yup.string().max(255).required("Username is required"),
        contactno: Yup.string().max(255).required("Contact Number is required"),
        password: Yup.string().max(255).required("Password is required"),
        confirmpassword: Yup.string()
          .oneOf([Yup.ref("password"), null], "Passwords must match")
          .required("Confirm Password is required"),
      })}
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
          <FormControl fullWidth className="mt-0" error={Boolean(touched.email && errors.email)} sx={{ ...theme.typography.customInput }}>
            <OutlinedInput
              id="outlined-adornment-email-login"
              type="email"
              value={values.email}
              name="email"
              onBlur={handleBlur}
              onChange={handleChange}
              label="Enter email"
              inputRef={emailRef}
              sx={{
                padding: "0px !important",
                "& .MuiOutlinedInput-notchedOutline": { borderColor: "transparent" },
                "&:hover .MuiOutlinedInput-notchedOutline": { borderColor: "transparent" },
                "&.Mui-focused .MuiOutlinedInput-notchedOutline": { borderColor: "transparent" },
              }}
            />
            {touched.email && errors.email && (
              <FormHelperText error>{errors.email}</FormHelperText>
            )}
          </FormControl>

          <FormControl fullWidth className="mt-0" error={Boolean(touched.name && errors.name)} sx={{ ...theme.typography.customInput }}>
            <OutlinedInput
              id="outlined-adornment-name-login"
              type="text"
              value={values.name}
              name="name"
              onBlur={handleBlur}
              onChange={handleChange}
              label="Enter username"
              sx={{
                padding: "0px !important",
                "& .MuiOutlinedInput-notchedOutline": { borderColor: "transparent" },
                "&:hover .MuiOutlinedInput-notchedOutline": { borderColor: "transparent" },
                "&.Mui-focused .MuiOutlinedInput-notchedOutline": { borderColor: "transparent" },
              }}
            />
            {touched.name && errors.name && (
              <FormHelperText error>{errors.name}</FormHelperText>
            )}
          </FormControl>

          <FormControl fullWidth className="mt-0" error={Boolean(touched.contactno && errors.contactno)} sx={{ ...theme.typography.customInput }}>
            <OutlinedInput
              id="outlined-adornment-contactno-login"
              type="text"
              value={values.contactno}
              name="contactno"
              onBlur={handleBlur}
              onChange={handleChange}
              label="Contact Number"
              sx={{
                padding: "0px !important",
                "& .MuiOutlinedInput-notchedOutline": { borderColor: "transparent" },
                "&:hover .MuiOutlinedInput-notchedOutline": { borderColor: "transparent" },
                "&.Mui-focused .MuiOutlinedInput-notchedOutline": { borderColor: "transparent" },
              }}
            />
            {touched.contactno && errors.contactno && (
              <FormHelperText error>{errors.contactno}</FormHelperText>
            )}
          </FormControl>

          <FormControl fullWidth className="mt-2" error={Boolean(touched.password && errors.password)} sx={{ ...theme.typography.customInput }}>
            <OutlinedInput
              id="outlined-adornment-password-login"
              type={showPassword ? "text" : "password"}
              value={values.password}
              name="password"
              onBlur={handleBlur}
              onChange={handleChange}
              label="Password"
              sx={{
                "& .MuiOutlinedInput-notchedOutline": { borderColor: "transparent" },
                "&:hover .MuiOutlinedInput-notchedOutline": { borderColor: "transparent" },
                "&.Mui-focused .MuiOutlinedInput-notchedOutline": { borderColor: "transparent" },
              }}
            />
            <span
              className="position-absolute"
              style={{ right: "3%", top: "25%" }}
              onClick={handleClickShowPassword}
            >
              {showPassword ? <RemoveRedEyeIcon sx={{ fontSize: "19px" }} /> : <VisibilityOffIcon sx={{ fontSize: "19px" }} />}
            </span>
            {touched.password && errors.password && (
              <FormHelperText error>{errors.password}</FormHelperText>
            )}
          </FormControl>

          <FormControl fullWidth className="mt-2" error={Boolean(touched.confirmpassword && errors.confirmpassword)} sx={{ ...theme.typography.customInput }}>
            <OutlinedInput
              id="outlined-adornment-confirmpassword-login"
              type={showPassword ? "text" : "password"}
              value={values.confirmpassword}
              name="confirmpassword"
              onBlur={handleBlur}
              onChange={handleChange}
              label="Confirm Password"
              sx={{
                "& .MuiOutlinedInput-notchedOutline": { borderColor: "transparent" },
                "&:hover .MuiOutlinedInput-notchedOutline": { borderColor: "transparent" },
                "&.Mui-focused .MuiOutlinedInput-notchedOutline": { borderColor: "transparent" },
              }}
            />
            <span
              className="position-absolute"
              style={{ right: "3%", top: "25%" }}
              onClick={handleClickShowPassword}
            >
              {showPassword ? <RemoveRedEyeIcon sx={{ fontSize: "19px" }} /> : <VisibilityOffIcon sx={{ fontSize: "19px" }} />}
            </span>
            {touched.confirmpassword && errors.confirmpassword && (
              <FormHelperText error>{errors.confirmpassword}</FormHelperText>
            )}
          </FormControl>

          <Stack direction="row" alignItems="center" justifyContent="space-between" spacing={1}>
            <FormControlLabel
              control={
                <Checkbox
                  checked={checked}
                  onChange={(event) => setChecked(event.target.checked)}
                  name="checked"
                  sx={{
                    color: "#636AE8",
                    "&.Mui-checked": { color: "#636AE8" },
                    paddingLeft: "0",
                  }}
                />
              }
              label="Remember me"
            />
            <Typography variant="subtitle1" color="#636AE8" sx={{ textDecoration: "none", cursor: "pointer" }}>
              Forgot Password?
            </Typography>
          </Stack>

          {errors.submit && (
            <Box sx={{ mt: 3 }}>
              <FormHelperText error>{errors.submit}</FormHelperText>
            </Box>
          )}

          <Box sx={{ mt: 2 }}>
            <Button
              disableElevation
              disabled={isSubmitting}
              fullWidth
              size="large"
              type="submit"
              variant="contained"
              color="secondary"
              sx={{
                background: "#4C49ED",
                color: "white",
                "&:hover": { backgroundColor: "#4C49ED" },
              }}
            >
              Sign Up
            </Button>
          </Box>
        </form>
      )}
    </Formik>
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
const Register = () => {
  const theme = useTheme();
  const matchDownSM = useMediaQuery(theme.breakpoints.up("md"));
  const navigate = useNavigate();
  const navigatetologin=()=>{
    navigate("/login");
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
             Sign up to
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
             You can <span onClick={navigatetologin()}  style={{color:"#4C49ED",fontWeight:500,cursor:"pointer"}}>Login here !</span>
            </Typography>
            <Box sx={{display:{xs:"none",sm:"block"}}}>   <img src={human} height="370px" style={{marginLeft:"150px"}}/></Box>
          </Box>
  
          {/* Additional Icons */}
          {/* <Box sx={{ display: 'flex', justifyContent: 'start', gap: 2 }}>
            <img src={Sun} alt="Sun Icon"  height={'62px'}/>
          </Box> */}
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
                    Sign Up
                  </Typography>
                </Stack>
              </Grid>
              <Grid item xs={12}>
                <AuthLogin />
              
              </Grid>
              
            </Grid>
            
          </AuthCardWrapper>
          <Typography color="grey" sx={{ml:{xs:"9rem",sm:"13rem"},mt:"2rem"}}>or continue with</Typography>
          <Box sx={{marginLeft:{xs:"9rem",sm:"13rem"}}}>
            <img src={apple} width={30} height={30} style={{margin:"20px"}} alt="apple"/>
            <img src={google} width={30} height={30} alt="apple"/>
          </Box>
3

         
      
        </Grid>
      </Grid>
    </Grid>
  </AuthWrapper1>
  
  );
};

export default Register;
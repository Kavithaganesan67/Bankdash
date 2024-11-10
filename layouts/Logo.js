import logo from '../assets/images/logo.png'
import { Link } from "react-router-dom";

const Logo = () => {
  return (
  
    <div style={{display:"flex",alignItems:"center"}}>
    <img src={logo} 
      width="40" height="40"
      ></img>
      <h6 style={{color:"grey",fontSize:"20px",fontWeight:600,marginLeft:"2px"}}>BankDash</h6>
    </div>
     
   
  );
};

export default Logo;

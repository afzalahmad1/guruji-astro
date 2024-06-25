import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";

import { multiContext } from "../context/InputContext";

export default function PersonalInfo({isValidEmail,setIsValidEmail}) {

  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  
  const {info,setInfo} = React.useContext(multiContext)
 

    function handleInputChange(e){
      if(e.target.name === "email"){
        console.log("hiii");
        setIsValidEmail(emailRegex.test(e.target.value));
      }
      setInfo({ ...info, [e.target.name]: e.target.value });
      localStorage.setItem("user",JSON.stringify(info))

      console.log(info);
    }
  return (
    <Box
      component="form"
      sx={{
        "& .MuiTextField-root": { m: 2, width: "95%" },
      }}
      noValidate
      autoComplete="off"
    
    >
      <div>
        <TextField
          // error
          id="name"
          label="Name"
          name="name"
          value={info.name}
          onChange={(e)=>handleInputChange(e)}
          color={info.name.length >= 3? "success": "warning"}
          helperText={info.name.length >= 3? "": "name should contain atleast 3 letters"}
          variant="standard"
        />
      </div>
      <div>
        <TextField
        //   error
          id="email"
          label="Email"
          name="email"
          value={info.email}
          onChange={(e)=>handleInputChange(e)}
          color={isValidEmail ? "success": "warning"}
          helperText={isValidEmail ?"success": "please enter correct email"}
          variant="standard"
        />
      </div>
      <div>
        <TextField
        //   error
          id="phone"
          type="number"
          label="Phone Number"
          name="phone"
          value={info.phone}
          onChange={(e)=>handleInputChange(e)}
          color={info.phone.length === 10 ? "success": "warning"}
          helperText={info.phone.length === 10 ? "success" : "phone number contains 10 digits"}
          variant="standard"
        />
      </div>
    </Box>
  );
}

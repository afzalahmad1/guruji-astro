import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { multiContext } from "../context/InputContext";

export default function AddressInfo() {
  const {info,setInfo} = React.useContext(multiContext)
   
    function handleAddressChange(e){
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
        //   error
          id="line1"
          label="Address Line 1"
          value={info.line1}
          name="line1"
          onChange={(e)=>handleAddressChange(e)}
          
          // helperText={info.line1 !== "" && "Incorrect entry."}
          variant="standard"
        />
      </div>
      <div>
        <TextField
        //   error
          id="line2"
          label="Address Line 2"
          name="line2"
          value={info.line2}
          onChange={(e)=>handleAddressChange(e)}
          
          // helperText={info.line2 !== "" && "Incorrect entry."}
          variant="standard"
        />
      </div>
      <div>
        <TextField
        //   error
          id="city"
          label="City"
          name="city"
          value={info.city}
          onChange={(e)=>handleAddressChange(e)}
          
          // helperText={info.city !== "" && "Incorrect entry."}
          variant="standard"
        />
      </div>
      <div>
        <TextField
        //   error
          id="state"
          label="State"
          name="state"
          value={info.state}
          onChange={(e)=>handleAddressChange(e)}
          
          // helperText={info.state !== "" && "Incorrect entry."}
          variant="standard"
        />
      </div>
      <div>
        <TextField
        //   error
          id="zip"
          type="number"
          label="Zip Code"
          name="zip"
          value={info.zip}
          onChange={(e)=>handleAddressChange(e)}
          
          // helperText={info.zip !== "" && "Incorrect entry."}
          variant="standard"
        />
      </div>
    </Box>
  );
}

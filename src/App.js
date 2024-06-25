import { Box, Container } from "@mui/material";
import HorizontalLinearStepper from "./components/HorizontalLinearStepper";
import "./App.css"
import { useState } from "react";
function App() {
  const [isValidEmail, setIsValidEmail] = useState(true);
  return (
    <div>
      <Container  style={{marginTop:"3rem"}} >
        <Box  sx={{ bgcolor: "#fff", }} style={{padding:"3rem 1rem",borderRadius:"5px",border:"1px solid #ddd",boxShadow: "1px 10px 10px -5px gray"}} >
          <HorizontalLinearStepper isValidEmail={isValidEmail} setIsValidEmail={setIsValidEmail}/>
        </Box>
      </Container>
    </div>
  );
}

export default App;

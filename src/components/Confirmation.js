import React, { useContext } from "react";
import { multiContext } from "../context/InputContext";
import { Box, Container} from "@mui/material";

const Confirmation = () => {
  const { info } = useContext(multiContext);

  return (
    <Box>
      <Container>
        <div className="info-container">
          <div className="info-items">
            <h3>Name:</h3>
            <span>{info.name}</span>
          </div>
          <div className="info-items">
            <h3>Email:</h3>
            <span>{info.email}</span>
          </div>
          <div className="info-items">
            <h3>Phone:</h3>
            <span>{info.phone}</span>
          </div>
        </div>

        <div className="info-container">
          <div className="info-items">
            <h3>Address Line 1:</h3>
            <span>{info.line1}</span>
          </div>
          <div className="info-items">
            <h3>Addres Line 2:</h3>
            <span>{info.line2}</span>
          </div>
          <div className="info-items">
            <h3>City:</h3>
            <span>{info.city}</span>
          </div>
        </div>
        <div className="info-container">
          <div className="info-items">
            <h3>State:</h3>
            <span>{info.state}</span>
          </div>
          <div className="info-items">
            <h3>Zip Code:</h3>
            <span>{info.zip}</span>
          </div>
        </div>
      </Container>
    </Box>
  );
};

export default Confirmation;

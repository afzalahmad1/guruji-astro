import * as React from "react";
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import Button from "@mui/material/Button";
import PersonalInfo from "./PersonalInfo";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import AddressInfo from "./AddressInfo";
import "../App.css";
import { multiContext } from "../context/InputContext";
import Confirmation from "./Confirmation";

const steps = ["Personal Information", "Address", "Confirmation"];

export default function HorizontalLinearStepper({
  isValidEmail,
  setIsValidEmail,
}) {
  const [activeStep, setActiveStep] = React.useState(0);
  const { info ,setInfo} = React.useContext(multiContext);

  const handleNext = () => {
    if(activeStep === 0){
      if ( info.name.length >= 3 && isValidEmail && info.phone.length === 10) {
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
        toast.success("Step 1 Success")
      }else{
        if(info.name.length < 3){
          toast.error("name should contains atleast 3 letters")
        }else if(!isValidEmail){
          toast.error("incorrect email formate")
        }else if(info.phone.length !== 10){
        toast.error("Phone number should contains 10 digits")
        }
      }
    }else if(activeStep === 1){
      if(info.line1 && info.line2 && info.city && info.state && info.zip){
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
        console.log("step2");
        toast.success("Step 2 Success")
      }else{
        if(!info.line1){
          toast.error("Enter Address Line 1")
        }else if(!info.line2){
          toast.error("Enter Address Line 2")
        }else if(!info.city){
          toast.error("Enter city")
        }else if(!info.state){
          toast.error("Enter state")
        }else{
          toast.error("Enter zip code")
        }
      }
    }else{
      console.log("submit");
      setActiveStep((prevActiveStep) => prevActiveStep + 1);
        console.log("step3");
        toast.success("Submitted Successfully")
    }
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };
  const handleReset=()=>{
    setActiveStep(0)
    setInfo({
      name: "",
    email: "",
    phone: "",
    line1: "",
    line2: "",
    city: "",
    state: "",
    zip: "",
    })
  }

  

  return (
    <Box sx={{ width: "100%" }}>
      <Stepper activeStep={activeStep}>
        {steps.map((label, index) => {
          const stepProps = {};
          const labelProps = {};

          return (
            <Step key={label} {...stepProps}>
              <StepLabel {...labelProps}>{label}</StepLabel>
            </Step>
          );
        })}
      </Stepper>
      {activeStep === steps.length ? (
        <React.Fragment>
          {/* <Typography sx={{ mt: 2, mb: 1 }}>
            All steps completed - you&apos;re finished
          </Typography> */}
          <Box sx={{ display: "flex", flexDirection: "row",justifyContent:"center",alignItems:"center", pt: 2 }}>
            <h1 > Thank You</h1>
          </Box>
            <Button onClick={handleReset}>New Form</Button>
        </React.Fragment>
      ) : (
        <React.Fragment>
          {/* <Typography sx={{ mt: 2, mb: 1 }}>Step {activeStep + 1}</Typography> */}
          {activeStep === 0 && (
            <Box className="form-flip-animation">
              <PersonalInfo
                isValidEmail={isValidEmail}
                setIsValidEmail={setIsValidEmail}
              />
            </Box>
          )}
          {activeStep === 1 && (
            <Box className="form-flip-animation">
              <AddressInfo />
            </Box>
          )}
          {activeStep === 2 && <Box className="form-flip-animation">
              
              <Confirmation />
            </Box>}
          <Box sx={{ display: "flex", flexDirection: "row", pt: 2 }}>
            <Button
              color="inherit"
              disabled={activeStep === 0}
              onClick={handleBack}
              sx={{ mr: 1 }}
            >
              Back
            </Button>
            <Box sx={{ flex: "1 1 auto" }} />

            <Button onClick={handleNext}>
              {activeStep === steps.length - 1 ? "Submit" : "Next"}
            </Button>
          </Box>
        </React.Fragment>
      )}
      <ToastContainer />
    </Box>
  );
}

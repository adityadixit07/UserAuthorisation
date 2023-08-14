/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
// import Button from "@mui/material/Button";

import "./customStepperCss.css";

function MultiStepForm({ active }) {
  const [activeStep, setActiveStep] = useState(0);

  const steps = [
    "Personal Info",
    "Service Offerring",
    "Transaction",
    "Tax info",
    "Payement Details",
    "Agreement",
    "ID Verification",
  ]; // Add your step labels here

  useEffect(() => {
    setActiveStep(active);
  }, [active]);

  //   // Function to handle form field changes
  //   //   const handleChange = (event) => {
  //   //     const { name, value } = event.target;
  //   //   };

  //   // Function to handle next step
  //   const handleNext = () => {
  //     setActiveStep((prevActiveStep) => prevActiveStep + 1);
  //   };

  //   // Function to handle previous step
  //   const handleBack = () => {
  //     setActiveStep((prevActiveStep) => prevActiveStep - 1);
  //   };

  //   // Function to handle form submission
  //   const handleSubmit = (event) => {
  //     event.preventDefault();
  //     // Perform form submission logic here
  //   };

  return (
    <div>
      <Stepper activeStep={activeStep} alternativeLabel>
        {steps.map((label) => (
          <Step key={label} className={`stepper_Class`}>
            <StepLabel>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>
    </div>
  );
}

export default MultiStepForm;

import React from "react";
import logo from "../logo.svg";
import { PrivateSimulatorConfirmationData } from "./privateSimulator.confirmationData";
import { PrivateSimulatorFormData } from "./privateSimulator.formData";
import { usePrivateSimulatorStore } from "./privateSimulator.store";

interface PrivateSimulatorProps {
  title?: React.ReactNode;
  redirectUrl?: string;
}

export const PrivateSimulator: React.FC<PrivateSimulatorProps> = ({
  redirectUrl = "https://google.pt",
  title = "This is an example of React Widget for Private Simulator",
}) => {
  const { step } = usePrivateSimulatorStore();

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>{title}</h1>

        {step === "formData" && <PrivateSimulatorFormData />}
        {step === "confirmationData" && <PrivateSimulatorConfirmationData />}

        <a
          className="App-link"
          href={redirectUrl}
          target="_blank"
          rel="noopener noreferrer"
        >
          Redirect
        </a>
      </header>
    </div>
  );
};

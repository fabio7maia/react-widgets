import React from "react";
import { PublicSimulatorConfirmationData } from "./publicSimulator.confirmationData";
import { PublicSimulatorFormData } from "./publicSimulator.formData";
import { usePublicSimulatorStore } from "./publicSimulator.store";

interface PublicSimulatorProps {
  title?: React.ReactNode;
  redirectUrl?: string;
}

export const PublicSimulator: React.FC<PublicSimulatorProps> = ({
  redirectUrl = "https://google.pt",
  title = "This is an example of React Widget for Public Simulator",
}) => {
  const { step } = usePublicSimulatorStore();

  return (
    <div className="App">
      <header className="App-header">
        <img
          src="https://img.icons8.com/bubbles/344/react.png"
          className="App-logo"
          alt="logo"
        />
        <h1>{title}</h1>

        {step === "formData" && <PublicSimulatorFormData />}
        {step === "confirmationData" && <PublicSimulatorConfirmationData />}

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

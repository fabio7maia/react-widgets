import React from "react";

interface PublicSimulatorProps {
  title?: React.ReactNode;
  redirectUrl?: string;
}

export const PublicSimulator: React.FC<PublicSimulatorProps> = ({
  redirectUrl = "https://google.pt",
  title = "This is an example of React Widget for Public Simulator",
}) => {
  return (
    <div className="App">
      <header className="App-header">
        <img
          src="https://img.icons8.com/bubbles/344/react.png"
          className="App-logo"
          alt="logo"
        />
        <h1>{title}</h1>
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

import React from "react";
import { usePrivateSimulatorStore } from "./privateSimulator.store";

export const PrivateSimulatorConfirmationData: React.FC = () => {
  const { amount, duration, onClickBack } = usePrivateSimulatorStore();

  return (
    <div>
      <div>
        <label htmlFor="amount">Amount: </label>
        {amount}
      </div>

      <div>
        <label htmlFor="duration">Duration: </label>
        {duration}
      </div>

      <button onClick={onClickBack}>Back</button>
    </div>
  );
};

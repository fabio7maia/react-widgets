import React from "react";
import { usePublicSimulatorStore } from "./publicSimulator.store";

export const PublicSimulatorConfirmationData: React.FC = () => {
  const { amount, duration, onClickBack } = usePublicSimulatorStore();

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

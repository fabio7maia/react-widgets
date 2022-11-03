import React from "react";
import { usePrivateSimulatorStore } from "./privateSimulator.store";

export const PrivateSimulatorFormData: React.FC = () => {
  const { amount, duration, setAmount, setDuration, onClickNext } =
    usePrivateSimulatorStore();

  return (
    <div>
      <div>
        <label htmlFor="amount">Amount</label>
        <input
          name="amount"
          type="number"
          value={amount}
          onChange={(evt) => setAmount(Number(evt.currentTarget.value))}
        />
      </div>

      <div>
        <label htmlFor="duration">Duration</label>
        <input
          name="duration"
          type="number"
          value={duration}
          onChange={(evt) => setDuration(Number(evt.currentTarget.value))}
        />
      </div>

      <button onClick={onClickNext}>Continue</button>
    </div>
  );
};

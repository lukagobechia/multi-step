import { FormEvent, useEffect, useState } from "react";
import PersonalInfo from "./PersonalInfo";
import useMultistepForm from "./useMultistepForm";
import './MultiStepForm.css';
import Plan from "./Plan";
import AddOns from "./AddOns";
import Summary from "./Summary";

type FormData = {
  name: string;
  email: string;
  phoneNumber: string;
};

const INITIAL_DATA: FormData = {
  name: '',
  email: '',
  phoneNumber: ''
};

function MultiStepForm() {
  const [data, setData] = useState(INITIAL_DATA);

  function updateFields(fields: Partial<FormData>) {
    setData(prev => ({ ...prev, ...fields }));
  }

  const { step, isFirstStep, isLastStep, back, next } = useMultistepForm([
    <PersonalInfo {...data} updateFields={updateFields} />,
    <Plan />,
    <AddOns />,
    <Summary />
  ]);
  // currentStepIndex,
  function onSubmit(e: FormEvent) {
    e.preventDefault();
    if (!isLastStep) return next();
    alert("Submitted successfully");
  }

  return (
    <div className="container">
      <form onSubmit={onSubmit}>
        {step}
        <div className="buttons">
          {!isFirstStep && (
            <button type="button" onClick={back} className="back-btn">
              Go Back
            </button>
          )}
          <button type="submit" className="next-confirm-btn">
            {isLastStep ? "Confirm" : "Next Strp"}
          </button>
        </div>
      </form>
    </div>
  );
}

export default MultiStepForm;

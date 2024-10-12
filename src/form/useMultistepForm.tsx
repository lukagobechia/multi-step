import React from "react";
import { ReactElement, useState } from "react";

function useMultistepForm(steps: ReactElement[]) {
    const [currentStepIndex, setCurrentStepIndex] = useState(0);

    function next() {
        setCurrentStepIndex(i => {
            return i >= steps.length - 1 ? i : i + 1;
        });
    }

    function back() {
        setCurrentStepIndex(i => {
            return i <= 0 ? i : i - 1;
        });
    }

    function goTo(index: number) {
        setCurrentStepIndex(index);
    }

    const currentStep = steps[currentStepIndex];

    return {
        currentStepIndex,
        step: React.cloneElement(currentStep, { currentStepIndex }), // Pass currentStepIndex as a prop
        goTo,
        next,
        back,
        steps,
        isFirstStep: currentStepIndex === 0,
        isLastStep: currentStepIndex === steps.length - 1
    };
}

export default useMultistepForm;

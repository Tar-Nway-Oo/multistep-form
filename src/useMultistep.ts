import { useState, ReactNode } from "react";

export function useMultistep(steps: ReactNode[]) {

  const [currentStepIndex, setCurrentStepIndex] = useState(0);

  function goBack() {
     if (currentStepIndex === 0) return;
     setCurrentStepIndex(curr => curr - 1);
  }

  function goNext() {
   if (currentStepIndex === steps.length - 1) return;
   setCurrentStepIndex(curr => curr + 1);
 }  

  return {
    currentStepIndex,
    stepsCount: steps.length,
    currentStep: steps[currentStepIndex],
    isFirstStep: currentStepIndex === 0,
    isLastStep: currentStepIndex === steps.length - 1,
    goBack,
    goNext
  };
}

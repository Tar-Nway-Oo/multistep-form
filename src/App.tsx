import { useMultistep } from "./useMultistep"
import UserForm from "./forms/UserForm"
import AddressForm from "./forms/AddressForm"
import AccountForm from "./forms/AccountForm"
import "./index.css"
import { FormEvent } from "react"

export default function App() {

  const {currentStepIndex, stepsCount, currentStep, isFirstStep, isLastStep, goBack, goNext} = useMultistep([<UserForm />, <AddressForm />, <AccountForm />]);

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    if (!isLastStep) {
      goNext();
      return;
    }
    alert("Account Created.");
  }

  return (
    <form className="form" onSubmit={handleSubmit}>
      <p>{currentStepIndex + 1}/{stepsCount}</p>
      <div className="form-component">{currentStep}</div>
      <div className="btn-group">
        {!isFirstStep && <button onClick={goBack} type="button">Back</button>}
        <button type="submit">{isLastStep ? "Submit" : "Next"}</button>
      </div>
    </form>
  )
}

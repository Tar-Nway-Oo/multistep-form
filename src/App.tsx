import { useState } from "react"
import { useMultistep } from "./useMultistep"
import UserForm from "./forms/UserForm"
import AddressForm from "./forms/AddressForm"
import AccountForm from "./forms/AccountForm"
import "./index.css"
import { FormEvent } from "react"

type data = {
    firstName: string
    lastName: string
    age: string
    street: string
    city: string
    state: string
    zip: string
    eMail: string
    password: string
}

export default function App() {

  const [data, setData] = useState({
    firstName: "",
    lastName: "",
    age: "",
    street: "",
    city: "",
    state: "",
    zip: "",
    eMail: "",
    password: ""
  });

  function updateData(fields: Partial<data>) {
     setData(prevData => ({...prevData, ...fields}));
  }

  const {currentStepIndex, stepsCount, currentStep, isFirstStep, isLastStep, goBack, goNext} = useMultistep([<UserForm {...data} updateData={updateData} />, <AddressForm {...data} updateData={updateData} />, <AccountForm updateData={updateData} {...data} />]);

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    if (!isLastStep) {
      goNext();
      return;
    }
    alert("Account Created.");
  }

  return (
   <>
    <h1 className="heading">Multistep Form</h1>
    <form className="form" onSubmit={handleSubmit}>
      <p>{currentStepIndex + 1}/{stepsCount}</p>
      <div className="form-component">{currentStep}</div>
      <div className="btn-group">
        {!isFirstStep && <button className="back-btn" onClick={goBack} type="button">Back</button>}
        <button className="next-btn" type="submit">{isLastStep ? "Submit" : "Next"}</button>
      </div>
    </form>
   </>
  )
}

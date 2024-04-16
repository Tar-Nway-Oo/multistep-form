import "./form.css"

export default function AddressForm() {
  return (
   <div>
      <h3 className="form-heading">Address</h3>
      <div className="input-group">
         <label htmlFor="street">Street: </label>
         <input id="street" type="text" required autoFocus />
         <label htmlFor="city">City: </label>
         <input id="city" type="text" required />
         <label htmlFor="state">State: </label>
         <input id="state" type="text" required />
         <label htmlFor="zip">Zip: </label>
         <input id="zip" type="text" required />
      </div>
    </div>
  )
}

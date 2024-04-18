import "./form.css"

type AddressData = {
   street: string
   city: string
   state: string
   zip: string
}

type AddressFormProps = AddressData & {updateData: (fields: Partial<AddressData>) => void}

export default function AddressForm({street, city, state, zip, updateData}: AddressFormProps) {
  return (
   <div>
      <h2 className="form-heading">Address</h2>
      <div className="input-group">
         <label htmlFor="street">Street: </label>
         <input 
           id="street" 
           type="text" 
           required 
           autoFocus 
           value={street} 
           onChange={e => updateData({street: e.target.value})}
         />
         <label htmlFor="city">City: </label>
         <input 
           id="city" 
           type="text"
           required 
           value={city}
           onChange={e => updateData({city: e.target.value})}
         />
         <label htmlFor="state">State: </label>
         <input 
           id="state" 
           type="text" 
           required 
           value={state}
           onChange={e => updateData({state: e.target.value})}
         />
         <label htmlFor="zip">Zip: </label>
         <input 
           id="zip" 
           type="text" 
           required 
           value={zip}
           onChange={e => updateData({zip: e.target.value})}
         />
      </div>
    </div>
  )
}

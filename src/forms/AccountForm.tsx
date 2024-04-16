import "./form.css"

export default function AccountForm() {
  return (
   <div>
      <h3 className="form-heading">Account</h3>
      <div className="input-group">
         <label htmlFor="e-mail">E-Mail: </label>
         <input id="e-mail" type="text" required autoFocus />
         <label htmlFor="password">Password: </label>
         <input id="password" type="password" required />
      </div>
    </div>
  )
}

import "./form.css"

export default function UserForm() {
  return (
    <div>
      <h3 className="form-heading">User</h3>
      <div className="input-group">
         <label htmlFor="first-name">First Name: </label>
         <input id="first-name" type="text" required autoFocus />
         <label htmlFor="last-name">Last Name: </label>
         <input id="last-name" type="text" required />
         <label htmlFor="age">Age: </label>
         <input id="age" type="text" required />
      </div>
    </div>
  )
}

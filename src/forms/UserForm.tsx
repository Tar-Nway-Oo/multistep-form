import "./form.css"

type UserData = {
   firstName: string
   lastName: string
   age: string
}

type UserFormProps = UserData & {updateData: (fields: Partial<UserData>) => void}

export default function UserForm({firstName, lastName, age, updateData}: UserFormProps) {

  return (
    <div>
      <h2 className="form-heading">User</h2>
      <div className="input-group">
         <label htmlFor="first-name">First Name: </label>
         <input 
           id="first-name" 
           type="text" 
           required 
           autoFocus 
           value={firstName}
           onChange={e => updateData({firstName: e.target.value})}
         />
         <label htmlFor="last-name">Last Name: </label>
         <input 
           id="last-name"
           type="text" 
           required 
           value={lastName}
           onChange={e => updateData({lastName: e.target.value})}
         />
         <label htmlFor="age">Age: </label>
         <input 
           id="age" 
           type="text"
           required 
           value={age}
           onChange={e => updateData({age: e.target.value})}
         />
      </div>
    </div>
  )
}

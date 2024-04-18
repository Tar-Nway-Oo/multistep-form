import "./form.css"

type AccountData = {
   eMail: string
   password: string
}

type AccountFormProps = AccountData & {updateData: (fields: Partial<AccountData>) => void}

export default function AccountForm({eMail, password, updateData}: AccountFormProps) {
  return (
   <div>
      <h2 className="form-heading">Account</h2>
      <div className="input-group">
         <label htmlFor="e-mail">E-Mail: </label>
         <input 
           id="e-mail" 
           type="text" 
           required 
           autoFocus 
           value={eMail}
           onChange={e => updateData({eMail: e.target.value})}
         />
         <label htmlFor="password">Password: </label>
         <input 
           id="password" 
           type="password" 
           required 
           value={password}
           onChange={e => updateData({password: e.target.value})}
         />
      </div>
    </div>
  )
}

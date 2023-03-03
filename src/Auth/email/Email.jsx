import React,{useState,useEffect} from 'react'

const SendEmail = ({useEffects}) => {
  const {confirm, setConfirm} = useEffects


  return (
    < >
    <label htmlFor="email">
    Adult Email
      <input id='email' type="email" name='email' placeholder='Email' value={confirm.email} required onChange={(e) => setConfirm({
        ...confirm, email: e.target.value
      })} />
    </label>
    </>
  )
}

export default SendEmail
import React from 'react'

const RegisterForm = ({useEffects}) => {
  let {data,setData} = useEffects

  return (
      <>
        <label htmlFor="name">
            Adult Full Name
            <input type="text" name='name' placeholder='Name' required onChange={(e) => setData({
              ...data, name: e.target.value
            })} />
          </label>
          
          <label htmlFor="Password">
            Password
            <input type="password" name="password" placeholder='password' required onChange={(e) => setData({
              ...data, password: e.target.value
            })} />
          </label>
      </>
  )
}

export default RegisterForm
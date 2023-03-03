import React,{useEffect} from 'react'

const SendCode = ({useEffects}) => {
  let {setConfirm,number,setnumber} = useEffects
  useEffect(() => {
    
    const interval = setInterval(() => {
      if(number > 0){
        number--
        setnumber(number)
      }
    }, 1000);
    return () => clearInterval(interval)
  }, [])

  return (
    <>
    <label htmlFor="number">
      <input id="number" type="number" name='number' placeholder='number' required onChange={(e) => setConfirm({
        userNumber: e.target.value
      })} />
    </label>
      <p> {number} </p>
    </>
  )
}

export default SendCode
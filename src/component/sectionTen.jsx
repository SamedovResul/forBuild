import React ,{useEffect,useState,useMemo} from 'react'
import sectionImg from './metaImg/sectionOnebg.jpeg'
import {Element} from 'react-scroll'
import ScrollTriger from 'react-scroll-trigger';
import Select from 'react-select'
import countryList from 'react-select-country-list'
import axios from 'axios'
import Swal from 'sweetalert2'
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';

const SectionNine = ({setboolean}) => {
  const [data, setData] = useState({
    nameSurname:'',
    Country:'',
    email:'',
    date:'',
    time:'',
    whatsAppNumber:""
  })
  const [Disabled, setDisabled] = useState(false)
  const [date, setDate] = useState(false)
  const submit = (e) =>{
    e.preventDefault()

    if(data.Country && data.email && data.nameSurname && data.date ){
      if(data.email){
        setDisabled(true)
        // https://metatesk.herokuapp.com/email/post  http://localhost:5000/email/post
        axios.post('https://enteskcrmserver.azurewebsites.net/post', data)
        .then(function (response) {
          Swal.fire({
            color:"green",
            text: "Success",
          })
          setDisabled(false)
          setData({
            nameSurname:'',
            Country:'',
            email:'',
            whatsAppNumber:"",
            date:'',
            time:'',
          })
        })
        .catch(function (error) {
          console.log(error);
        });
      }else{
        Swal.fire({
          color:"red",
          text: "please insert valid email",
        })
      }
    }else{
      Swal.fire({
        color:"red",
        text: "please complete form",
      })
    }
  }
 
  const D = new Date()

  const options = useMemo(() => countryList().getData(), [])
  return (
    <Element name="join" >
      <ScrollTriger onEnter={()=>  setboolean(false)}  >
        <article className='metattesk-contact add-section-Three'>
        {/* <div className='png' ></div> */}
        <div  className="container">
          <div className="container-fluid">
            <div className="row">
              <div className="col-md-6 ">
                <form action="">
                  <div className='title-div'>
                    <p> Get a FREE demo class for your child </p>
                  </div>
                    <input type="text" value={data.nameSurname} required placeholder='Name and Surname'
                      onChange={(e) => setData({
                        ...data, nameSurname: e.target.value
                      })}
                    />
                    <Select options={options}  placeholder="Country"  onChange={(e) => setData({
                      ...data, Country: e.label
                    })} />
                    {/* <input type="text" required placeholder='Country' /> */}
                    <input type="email" required value={data.email}  placeholder='E-mail adress'
                      onChange={(e) => setData({
                        ...data, email: e.target.value
                      })}
                    />

                    {/* <div className='WhatsApp-div' >
                      <span className='WhatsApp'>
                        <svg  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z"/></svg>
                      </span>
                      <PhoneInput
                      country={"us"}
                      type="number"  value={data.whatsAppNumber}  
                      onChange={phone => setData({
                        ...data, whatsAppNumber: phone
                      })}
                      />
                    </div> */}
                    {/* <div className="date-div">
                      <input
                        placeholder='select date' 
                        type={date ? "date" : "text"}
                        onFocus={() => setDate(true)}
                        min={`${D.getFullYear()}-${D.getMonth() + 1}-0${D.getDate() + 1}`}
                        onChange={(e) => setData({
                          ...data, date: e.target.value
                        })}
                         />
                         <input  
                          placeholder='select time' 
                          type={date ? "time" : "text"}
                          onFocus={() => setDate(true)} 
                          onChange={(e) => setData({
                            ...data, time: e.target.value
                          })}
                          />
                    </div> */}
                      
                       
                        
                      {
                        Disabled ? (
                          <button
                          style={{backgroundColor:"gray"}}
                            disabled >join</button>
                        ):(
                          <button onClick={(e) => submit(e)}   >join</button>
                        )
                      }
                </form>
              </div>
              <div className="col-md-6 ">
                <div  className='metatesk-img' >
                  <img 
                  src='https://res.cloudinary.com/dbgyytugh/image/upload/v1666609835/sectionOnebg_oknnje.jpg' alt="metatesk"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        </article>    
      </ScrollTriger>
    </Element>
  )
}

export default SectionNine
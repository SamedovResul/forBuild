import React ,{useState} from 'react'
// import sectionImg from './metaImg/sectionOnebg.jpeg'
// import {Element} from 'react-scroll'
import ScrollTriger from 'react-scroll-trigger';
// import Select from 'react-select'
// import countryList from 'react-select-country-list'
// import axios from 'axios'
// import Swal from 'sweetalert2'
// import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';
// import Slider from "react-slick";
import Slider from '../slider/slider';


const SectionNine = () =>{

  const [number, setNumber] = useState(false);
  const array = [1, 2, 3, 4, 5, 7, 8, 9,]
  const [rightSliderClass, setrightSliderClass] = useState('');
  const [lefttSliderClass, setlefttSliderClass] = useState('left-side');

     
  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 2,
    initialSlide: 0,
    beforeChange: (current, next) => {
      if(next > 0 && !rightSliderClass){
        setrightSliderClass('right-side')
      }
      if(next === 0 && rightSliderClass){
        setrightSliderClass('')
        console.log(true)
      }

      if(array.length - 4 === next){
        setlefttSliderClass('')
      }else if(array.length - 4 !== next){
        setlefttSliderClass('left-side')
      }

    },
  };


  return(
    <ScrollTriger
      onEnter={() => setNumber(true)}
      onExit={() => setNumber(false)}
    >
      <article className="secton-ten">

        <div className="container">
          <div className="container-fluid">
            <div className="row">
              <div className="col-md-12 ">
                <div className="text-div">
                  <p>Articles you may find helpful</p>
                </div>
              </div>
              <Slider />
            </div>
          </div>
        </div>
      </article>
    </ScrollTriger>
  )
}

// const SectionNine = ({setboolean}) => {
//   const [data, setData] = useState({
//     nameSurname:'',
//     Country:'',
//     email:'',
//     date:'',
//     time:'',
//     whatsAppNumber:""
//   })
//   const [Disabled, setDisabled] = useState(false)
//   const [date, setDate] = useState(false)
//   // const submit = (e) =>{
//   //   e.preventDefault()

//   //   // if(data.Country && data.email && data.nameSurname && data.date ){
//   //   //   if(data.email){
//   //   //     setDisabled(true)
//   //   //     // https://metatesk.herokuapp.com/email/post  http://localhost:5000/email/post
//   //   //     axios.post('https://enteskcrmserver.azurewebsites.net/post', data)
//   //   //     .then(function (response) {
//   //   //       Swal.fire({
//   //   //         color:"green",
//   //   //         text: "Success",
//   //   //       })
//   //   //       setDisabled(false)
//   //   //       setData({
//   //   //         nameSurname:'',
//   //   //         Country:'',
//   //   //         email:'',
//   //   //         whatsAppNumber:"",
//   //   //         date:'',
//   //   //         time:'',
//   //   //       })
//   //   //     })
//   //   //     .catch(function (error) {
//   //   //       console.log(error);
//   //   //     });
//   //   //   }else{
//   //   //     Swal.fire({
//   //   //       color:"red",
//   //   //       text: "please insert valid email",
//   //   //     })
//   //   //   }
//   //   // }else{
//   //   //   Swal.fire({
//   //   //     color:"red",
//   //   //     text: "please complete form",
//   //   //   })
//   //   // }
//   // }
 
//   const D = new Date()

//   const options = useMemo(() => countryList().getData(), [])
//   return (
//     <Element name="join" >
//       <ScrollTriger onEnter={()=>  setboolean(false)}  >
//         <article className='metattesk-contact add-section-Three'>
//         {/* <div className='png' ></div> */}
//         <div  className="container">
//           <div className="container-fluid">
//             <div className="row">
//               <div className="col-md-6 ">
//                 {/* <form action="">
//                   <div className='title-div'>
//                     <p> Get a FREE demo class for your child </p>
//                   </div>
//                     <input type="text" value={data.nameSurname} required placeholder='Name and Surname'
//                       onChange={(e) => setData({
//                         ...data, nameSurname: e.target.value
//                       })}
//                     />
//                     <Select options={options}  placeholder="Country"  onChange={(e) => setData({
//                       ...data, Country: e.label
//                     })} />
//                     <input type="email" required value={data.email}  placeholder='E-mail adress'
//                       onChange={(e) => setData({
//                         ...data, email: e.target.value
//                       })}
//                     />
                        
//                       {
//                         Disabled ? (
//                           <button
//                           style={{backgroundColor:"gray"}}
//                             disabled >join</button>
//                         ):(
//                           <button onClick={(e) => submit(e)}   >join</button>
//                         )
//                       }
//                 </form> */}
                
//               </div>
//               <div className="col-md-6 ">
//                 <div  className='metatesk-img' >
//                   <img 
//                   src='https://res.cloudinary.com/dbgyytugh/image/upload/v1666609835/sectionOnebg_oknnje.jpg' alt="metatesk"
//                   />
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//         </article>    
//       </ScrollTriger>
//     </Element>
//   )
// }


export default SectionNine
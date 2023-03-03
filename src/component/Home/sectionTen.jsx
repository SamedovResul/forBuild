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
import Slider from "react-slick";



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
      <article className="secton-nine">
        <div className="container">
          <div className="container-fluid">
            <div className="row">
              <div className="col-md-12 ">
                <div className="text-div">
                  <p>Articles you may find helpful</p>
                </div>
              </div>


              <div className="col-md-12 slider-div">
                <div className={rightSliderClass}>

                </div>
                <Slider {...settings}  >
                {array.map(index => (
                       <div key={index} className="slide-div">
                       <div >
                         <div className="top-div">
                           <img
                             src="https://process.filepicker.io/APHE465sSbqvbOIStdwTyz/rotate=deg:exif/resize=fit:crop,height:140,width:240/output=quality:80,compress:true,strip:true,format:jpg/cache=expiry:max/https://cdn.filestackcontent.com/uxkppTQSTROb91QPTjRT"
                             alt="metatesk"
                           />
                         </div>
                         <div className="bottom-div">
                           <p> Lorem ipsum dolor sit. </p>
                           <button>Davamı</button>
                         </div>
                       </div>
                     </div>
                  ))}
                 
                </Slider>
                <div className={lefttSliderClass}>

                </div>
              </div>

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
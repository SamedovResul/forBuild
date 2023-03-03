import React from 'react'
import metatesk from './metaImg/metatesk-footer-logo.png'


const Footer = () => {

  const date = new Date()
  const year = date.getFullYear()
  return (
    <footer className="footer-section">
      <div className="container">
        <div className="container-fluid" >
          <div className="row">
            <div className="col-md-3">
              <div className="ul-box">
                <ul>
                  <p> Learn </p>
                  <li> <a href="https://www.enteskedu.com/"> Browse Classes </a> </li>
                  <li> <a href="https://www.enteskedu.com/"> See All Classes </a> </li>
                  <li> <a href="https://www.enteskedu.com/"> Explore Categories </a> </li>
                  <li> <a href="https://www.enteskedu.com/"> Homeschool Classes </a> </li>
                  <li> <a href="https://www.enteskedu.com/"> Give a Gift Card </a> </li>
                </ul>
              </div>
              
            </div>
            <div className="col-md-3">
              <div className="ul-box">
                <ul>
                  <p>Teach</p>
                  <li> <a href="https://www.enteskedu.com/"> Independent Teachers </a> </li>
                  <li> <a href="https://www.enteskedu.com/"> Organizations </a> </li>
                  <p> Financial Assistance </p>
                  <li> <a href="https://www.enteskedu.com/"> Independent Teachers </a> </li>
                  <li> <a href="https://www.enteskedu.com/"> Organizations </a> </li>
                  <p>Outschool International</p>
                  <li> <a href="https://www.enteskedu.com/"> 아웃스쿨 </a> </li>
                </ul>
              </div>
            </div>
            <div className="col-md-3">
              <div className="ul-box">
                <ul>
                  <p>About</p>
                  <li> <a href="https://www.enteskedu.com/"> Company </a> </li>
                  <li> <a href="https://www.enteskedu.com/"> DEIB Statement</a> </li>
                  <li> <a href="https://www.enteskedu.com/"> Careers </a> </li>
                  <li> <a href="https://www.enteskedu.com/"> Blog </a> </li>
                </ul>
              </div>
            </div>
            <div className="col-md-3">
              <div className="ul-box">
                <ul>
                  <p>Support</p>
                  <li> <a href="https://www.enteskedu.com/"> lorem ipsum </a> </li>
                  <li> <a href="https://www.enteskedu.com/"> lorem ipsum </a> </li>
                  <li> <a href="https://www.enteskedu.com/"> lorem ipsum </a> </li>
                  <li> <a href="https://www.enteskedu.com/"> lorem ipsum </a> </li>
                </ul>
              </div>  
            </div>
          </div>
        </div>
      </div>
      <div className="last-row">
        <p>© {year} Metatesk.  All Rights Reserved</p>
        <div>
          <div>
            <a href="https://www.enteskedu.com/">
            <svg aria-hidden="true" focusable="false" data-prefix="fab" data-icon="facebook" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="svg-inline--fa fa-facebook outschool-0"><title>Follow us on Facebook</title><path fill="currentColor" d="M504 256C504 119 393 8 256 8S8 119 8 256c0 123.78 90.69 226.38 209.25 245V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.28c-30.8 0-40.41 19.12-40.41 38.73V256h68.78l-11 71.69h-57.78V501C413.31 482.38 504 379.78 504 256z"></path></svg>
            </a>
            <a href="https://www.enteskedu.com/">
            <svg aria-hidden="true" focusable="false" data-prefix="fab" data-icon="instagram" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" className="svg-inline--fa fa-instagram outschool-0"><title>Follow us on Instagram</title><path fill="currentColor" d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"></path></svg>
            </a>
            <a href="https://www.enteskedu.com/">
            <svg aria-hidden="true" focusable="false" data-prefix="fab" data-icon="pinterest" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 496 512" className="svg-inline--fa fa-pinterest outschool-0"><title>Join us on Pinterest</title><path fill="currentColor" d="M496 256c0 137-111 248-248 248-25.6 0-50.2-3.9-73.4-11.1 10.1-16.5 25.2-43.5 30.8-65 3-11.6 15.4-59 15.4-59 8.1 15.4 31.7 28.5 56.8 28.5 74.8 0 128.7-68.8 128.7-154.3 0-81.9-66.9-143.2-152.9-143.2-107 0-163.9 71.8-163.9 150.1 0 36.4 19.4 81.7 50.3 96.1 4.7 2.2 7.2 1.2 8.3-3.3.8-3.4 5-20.3 6.9-28.1.6-2.5.3-4.7-1.7-7.1-10.1-12.5-18.3-35.3-18.3-56.6 0-54.7 41.4-107.6 112-107.6 60.9 0 103.6 41.5 103.6 100.9 0 67.1-33.9 113.6-78 113.6-24.3 0-42.6-20.1-36.7-44.8 7-29.5 20.5-61.3 20.5-82.6 0-19-10.2-34.9-31.4-34.9-24.9 0-44.9 25.7-44.9 60.2 0 22 7.4 36.8 7.4 36.8s-24.5 103.8-29 123.2c-5 21.4-3 51.6-.9 71.2C65.4 450.9 0 361.1 0 256 0 119 111 8 248 8s248 111 248 248z"></path></svg>
            </a>
            <a href="https://www.enteskedu.com/">
            <svg aria-hidden="true" focusable="false" data-prefix="fab" data-icon="twitter" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="svg-inline--fa fa-twitter outschool-0"><title>Follow us on Twitter</title><path fill="currentColor" d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z"></path></svg>
            </a>
            <a href="https://www.enteskedu.com/">
            <svg aria-hidden="true" focusable="false" data-prefix="fab" data-icon="youtube" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" className="svg-inline--fa fa-youtube outschool-0"><title>Join us on Youtube</title><path fill="currentColor" d="M549.655 124.083c-6.281-23.65-24.787-42.276-48.284-48.597C458.781 64 288 64 288 64S117.22 64 74.629 75.486c-23.497 6.322-42.003 24.947-48.284 48.597-11.412 42.867-11.412 132.305-11.412 132.305s0 89.438 11.412 132.305c6.281 23.65 24.787 41.5 48.284 47.821C117.22 448 288 448 288 448s170.78 0 213.371-11.486c23.497-6.321 42.003-24.171 48.284-47.821 11.412-42.867 11.412-132.305 11.412-132.305s0-89.438-11.412-132.305zm-317.51 213.508V175.185l142.739 81.205-142.739 81.201z"></path></svg>
            </a>
          </div>
          <div>
            <svg aria-hidden="true" focusable="false" data-prefix="fal" data-icon="globe" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="svg-inline--fa fa-globe outschool-wlfu6e"><path fill="currentColor" d="M256 0C397.4 0 512 114.6 512 256C512 397.4 397.4 512 256 512C114.6 512 0 397.4 0 256C0 114.6 114.6 0 256 0zM256 480C272.7 480 296.4 465.6 317.9 422.7C327.8 402.9 336.1 378.1 341.1 352H170C175.9 378.1 184.2 402.9 194.1 422.7C215.6 465.6 239.3 480 256 480V480zM164.3 320H347.7C350.5 299.8 352 278.3 352 256C352 233.7 350.5 212.2 347.7 192H164.3C161.5 212.2 160 233.7 160 256C160 278.3 161.5 299.8 164.3 320V320zM341.1 160C336.1 133 327.8 109.1 317.9 89.29C296.4 46.37 272.7 32 256 32C239.3 32 215.6 46.37 194.1 89.29C184.2 109.1 175.9 133 170 160H341.1zM379.1 192C382.6 212.5 384 233.9 384 256C384 278.1 382.6 299.5 379.1 320H470.7C476.8 299.7 480 278.2 480 256C480 233.8 476.8 212.3 470.7 192H379.1zM327.5 43.66C348.5 71.99 365.1 112.4 374.7 160H458.4C432.6 105.5 385.3 63.12 327.5 43.66V43.66zM184.5 43.66C126.7 63.12 79.44 105.5 53.56 160H137.3C146.9 112.4 163.5 71.99 184.5 43.66V43.66zM32 256C32 278.2 35.24 299.7 41.28 320H132C129.4 299.5 128 278.1 128 256C128 233.9 129.4 212.5 132 192H41.28C35.24 212.3 32 233.8 32 256V256zM458.4 352H374.7C365.1 399.6 348.5 440 327.5 468.3C385.3 448.9 432.6 406.5 458.4 352zM137.3 352H53.56C79.44 406.5 126.7 448.9 184.5 468.3C163.5 440 146.9 399.6 137.3 352V352z"></path></svg>
            <span>English</span>
            <span> - </span>
            <span> $ USD </span>
            <span> - </span>
            <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="clock" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="svg-inline--fa fa-clock outschool-wlfu6e"><path fill="currentColor" d="M256 512C114.6 512 0 397.4 0 256S114.6 0 256 0S512 114.6 512 256s-114.6 256-256 256zM232 120V256c0 8 4 15.5 10.7 20l96 64c11 7.4 25.9 4.4 33.3-6.7s4.4-25.9-6.7-33.3L280 243.2V120c0-13.3-10.7-24-24-24s-24 10.7-24 24z"></path></svg>
            <span> (Asia) Baku </span>
          </div>
        </div>
      </div>
  </footer>
  )
}

{/* <p>© {year} Metatesk.  All Rights Reserved</p>
            <img src={metatesk} alt="" /> */}

export default Footer
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
            <img src={metatesk} alt="" /> 
      </div>
  </footer>
  )
}

{/* <p>© {year} Metatesk.  All Rights Reserved</p>
            <img src={metatesk} alt="" /> */}

export default Footer
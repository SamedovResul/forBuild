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
          <div className="col-md-12">
            <p>© {year} Metatesk.  All Rights Reserved</p>
            <img src={metatesk} alt="" />
          </div>
        </div>
      </div>
    </div>
  </footer>
  )
}

export default Footer
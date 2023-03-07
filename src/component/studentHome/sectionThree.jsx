import React from 'react'

const SectionThree = () => {

  const data = [
    {
      img:'https://static.outschool.com/master/main/public/images/sports.eec44b35630e6267023a29fa0bc07214.svg',
      text:'Movement'
    },
    {
      img:'https://static.outschool.com/master/main/public/images/sports.eec44b35630e6267023a29fa0bc07214.svg',
      text:'Movement'
    },
    {
      img:'https://static.outschool.com/master/main/public/images/sports.eec44b35630e6267023a29fa0bc07214.svg',
      text:'Movement'
    },
    {
      img:'https://static.outschool.com/master/main/public/images/sports.eec44b35630e6267023a29fa0bc07214.svg',
      text:'Movement'
    },
    {
      img:'https://static.outschool.com/master/main/public/images/sports.eec44b35630e6267023a29fa0bc07214.svg',
      text:'Movement'
    },
    {
      img:'https://static.outschool.com/master/main/public/images/sports.eec44b35630e6267023a29fa0bc07214.svg',
      text:'Movement'
    },
    {
      img:'https://static.outschool.com/master/main/public/images/sports.eec44b35630e6267023a29fa0bc07214.svg',
      text:'Movement'
    },
    {
      img:'https://static.outschool.com/master/main/public/images/sports.eec44b35630e6267023a29fa0bc07214.svg',
      text:'Movement'
    },
  ]

  return (
    <section className='section-three'>
      <div className="container">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-12">
              <div className="text-box">
                <p>Popular hobbies</p>
              </div>
            </div>
            {
              data.map((data) =>{
                const {img,text} = data
                return(
                  <div className="col-md-3">
                    <div className="hobbies">
                      <div className='shape'>
                        <img src={img} alt="metatesk" />
                      </div>
                      <p> {text} </p>
                    </div> 
                  </div>
                )
              })
            }

          </div>
        </div>
      </div>
    </section>
  )
}

export default SectionThree
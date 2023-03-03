import React from 'react'


const sectionFour = () => {


  const data = [
    {
      img:'https://static.outschool.com/master/main/public/images/Illustration_Swimming_200x200-Color.a877629db987419aefbf393bcc273a57.png',
      headText:'Let them lead',
      txt:'We empower kids and teens to take charge of their learning and explore the topics they love most.'
    },
    {
      img:'https://static.outschool.com/master/main/public/images/Illustration_Swimming_200x200-Color.a877629db987419aefbf393bcc273a57.png',
      headText:'Let them lead',
      txt:'We empower kids and teens to take charge of their learning and explore the topics they love most.'
    },
    {
      img:'https://static.outschool.com/master/main/public/images/Illustration_Swimming_200x200-Color.a877629db987419aefbf393bcc273a57.png',
      headText:'Let them lead',
      txt:'We empower kids and teens to take charge of their learning and explore the topics they love most.'
    },
  ]

  return (
    <article className='section-four'>
      <div  className="container">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-12">
              <div className="text-container">
                <h4>Go wild with wonder</h4>
              </div>
            </div>
            {
                data.map((data,i) =>{
                  const {img, headText,txt} = data

                  return(
                    <div key={i} className="col-md-4">
                      <div className="box">
                          <img src={img} alt="metatesk" />
                          <p>{headText}</p>
                          <p>{txt}</p>
                      </div>
                    </div>
                  )
                })
              }
            
          </div>
        </div>
      </div>
    </article>
  )
}

export default sectionFour
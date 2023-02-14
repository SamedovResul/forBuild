import React from "react";

const SectionSeven = () => {


  const imgs = [
    {
      img:'https://res.cloudinary.com/dbgyytugh/image/upload/v1666609838/MetaQuest_roplyk.png'
    },
    {
      img:'https://res.cloudinary.com/dbgyytugh/image/upload/v1666609839/Roblox_swh04f.png'
    },
    {
      img:'https://res.cloudinary.com/dbgyytugh/image/upload/v1666609837/core_fgxgep.png'
    },
  ]
  return (
    <section className="section-seven">
      <div className="container">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-12">
              <div className="text-box">
                <h3>Avaliable on</h3>
              </div>
            </div>
              {
                imgs.map((data, i) =>{
                  const {img} = data
                  return(
                    <div key={i} className="col-md-4 col-sm-4 col-4">
                      <div className="box">
                        <img src={img} alt="metatesk" />
                      </div>
                    </div>
                  )
                })
              }
          </div>
        </div>
      </div>
    </section>
  );
};

export default SectionSeven;

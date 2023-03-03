import React from 'react';
import SectionOne from './sectionOne';
import SectionTwo from './sectionTwo';
import SectionThree from './sectionThree';
import SectionFour from './sectionFour';
import SectionFive from './sectionFive';
import SectionSix from './sectionSix';
import SectionSeven from './sectionSeven';
import SectionEight from './sectionEight';
import SectionNine from './sectionNine';
import SectionTen from './sectionTen';
// import FooterSection from '../homeFolder/footerSection';


const Metatesk = ({Boolean}) => {
  const {boolean, setboolean} = Boolean


  return (
    <article className='metatesk-section' >
      
      <SectionOne setboolean={setboolean} />
      <SectionTwo />
      <SectionThree  />
      <SectionFour />
      <SectionFive />
      <SectionSix />
      <SectionSeven  />
      <SectionEight />
      <SectionNine />
      <SectionTen setboolean={setboolean} />
      
    </article>
  )
}

export default Metatesk
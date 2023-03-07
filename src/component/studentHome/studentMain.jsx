import React from 'react'
import SectionOne from "./sectionOne"
import SliderSection from './sliderSection'
import SectionThree from './sectionThree'
import SectionFour from './sectionFour'
import SectionFive from './sectionFive'
import SectionSix from './sectionSix'

const Main = () => {
  return (
    <section className='Student-section' >
      <SectionOne />
      <SliderSection text={"Classes based on jhon's interests"} />
      <SectionThree />
      <SliderSection text={"Starting within 24 hours"} />
      <SliderSection text={"Weekly Clubs and Social Time"} />
      <button className='Browser-club' > Browser Weekly Clubs </button>
      <SliderSection text={"St. Patrick's Day"} />
      <SliderSection text={"Spring Break"} />
      <SliderSection text={"Classes under $20"} />
      <SliderSection text={"Popular Classes"} />
      <SectionFour />
      <SectionFive />
      <SectionSix />
    </section>
  )
}

export default Main
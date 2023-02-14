import React,{useState,useRef,useEffect} from 'react'
import {Element} from 'react-scroll';
import ScrollTriger from 'react-scroll-trigger';
import { animated, useSpring } from '@react-spring/web'


const SectionOne = ({setboolean}) => {
  

// use spring 


const [angle, setAngle] = useState(0);

const [angle1, setAngle1] = useState(0);
const [angle2, setAngle2] = useState(0);
const [angle3, setAngle3] = useState(0);

useEffect(() => {
  const intervalId1 = setInterval(() => {
    setAngle1(prevAngle => prevAngle + 0.05);
  }, 20);

  const intervalId2 = setInterval(() => {
    setAngle2(prevAngle => prevAngle + 0.04);
  }, 20);

  const intervalId3 = setInterval(() => {
    setAngle3(prevAngle => prevAngle + 0.03);
  }, 20);

  return () => {
    clearInterval(intervalId1);
    clearInterval(intervalId2);
    clearInterval(intervalId3);
  };
  }, []);

  const x1 = 20 * Math.cos(angle1);
  const y1 = 10 * Math.sin(angle1);

  const x2 = 20 * Math.cos(angle2);
  const y2 = 10 * Math.sin(angle2);

  const x3 = 20 * Math.cos(angle3);
  const y3 = 10 * Math.sin(angle3);

  const animation1 = useSpring({
    transform: `translate(${x1}px, ${y1}px)`
  });

  const animation2 = useSpring({
    transform: `translate(${x2}px, ${y2}px)`
  });

  const animation3 = useSpring({
    transform: `translate(${x3}px, ${y3}px)`
});

  return (
    <Element name="home" >
      <ScrollTriger onEnter={()=>  setboolean(false)}>
      <article className='metatesk-info section-one'>
        <div className="text-container">
          <div>
            <p> education in  metaverse </p>
            <p>
            Take learning to the next level with exciting, entertaining and engaging classes
            </p>
            <button> 
              Browse Classes
            </button>
          </div>
        </div>
        <div className="img-container">
          <img  src="https://res.cloudinary.com/djzudd6ub/image/upload/v1676112842/metatesk%20web/idris_for_metatesk_site_psd_rbaoea.png" alt="metatesk" />
          <animated.img style={animation1} src="https://www.enteskedu.com/static/media/leaf.712bf782.png" alt="" />
          <animated.img style={animation2} src="https://www.enteskedu.com/static/media/circle.14705bd1.png" alt="" />
          <animated.img style={animation3} src="https://www.enteskedu.com/static/media/brush.3fc0463e.png" alt="" />
        </div>
      </article>
      </ScrollTriger>
    </Element>
  )
}

export default SectionOne
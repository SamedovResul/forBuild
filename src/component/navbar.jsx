import React,{useState,useEffect} from "react";
import metateskLogo from "./metaImg/metatesk-text-logo.png";
import Button from '@mui/material/Button';
import { useSpring, animated } from "react-spring";
import { Link, Element } from "react-scroll";
import Modal from "./Modal/modal";
import LoginModal from "./Modal/loginModal";
import {
  ClearState,
} from "../redux/action/action";
import { useSelector,useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";


const Navbar = ({ Boolean }) => {
  const { boolean, setboolean } = Boolean;

  const [open, setOpen] = useState(false);
  const [openLogin, setOpenLogin] = useState(false);

  const handleOpenClose = () => open? setOpen(false) : setOpen(true);
  const handleOpenCloseLogin = () => openLogin? setOpenLogin(false) : setOpenLogin(true);

  const burger = useSpring({
    to: [{ right: boolean ? "0%" : "-50%" }],
    from: { right: "-50%" },
  });

  const state = useSelector((confirm) => confirm);
  const dispatch = useDispatch()

  let history = useHistory();
  const logOut = () =>{
    dispatch(ClearState())
    history.push("/");
  }

  useEffect(() => {
    

  }, [state])
  
  return (
    <section className="nav-section">
      <Modal  open={open}  handleClose={handleOpenClose} />
      <LoginModal open={openLogin}  handleClose={handleOpenCloseLogin} />
        <Element name="join">
          {/* first nav section  */}
          <div className="navigation-div-first general-section">

          <Link to="home" smooth={true} duration={500} offset={-150}>
            <svg className="logo-image"
              id="Layer_1"
              data-name="Layer 1"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 808.91 808.91"
            >
              <defs>
                <style>{`.cls-1{fill:#55cbf9;}.cls-2{fill:#fbb116;}`}</style>
              </defs>
              <path
                id="Path_1"
                data-name="Path 1"
                className="cls-1"
                d="M500,892.45c-224.07,0-406.16-183.14-404.44-407.61,1.68-220,181.3-399.6,401.28-401.28C721.31,81.83,904.45,263.93,904.45,488h0a61.16,61.16,0,0,1-61.16,61.16H501.47c-33.17,0-61.41-25.78-62.59-58.93a61.16,61.16,0,0,1,58.89-63.35c.74,0,1.49,0,2.23,0H683.91c48.76,0,78.06-54.37,51-94.94a282.1,282.1,0,0,0-237.45-126c-155.5,1.37-281.66,130.47-279.57,286C220,645.31,345.17,769.58,499,770.13c29.6.1,55.74,20.42,61.11,49.53A61.19,61.19,0,0,1,500,892.45Z"
                transform="translate(-95.55 -83.55)"
              />
              <path
                id="Path_2"
                data-name="Path 2"
                className="cls-2"
                d="M904.45,488h0c0-204.26-152.2-373.61-349.14-400.66-195.57,27-347.64,195.16-349.2,397.5-1.51,196.93,138.48,362,324.15,399.59a61.21,61.21,0,0,0,29.83-64.77c-5.36-29.11-31.51-49.42-61.11-49.53-153.81-.55-279-124.82-281.08-278.28-2.09-155.5,124.06-284.59,279.57-286a282.72,282.72,0,0,1,57.89,5.48A281.67,281.67,0,0,1,845.47,331.89c27,40.58-2.25,94.94-51,94.94H610.55A61.17,61.17,0,0,0,549.39,488c0,.74,0,1.49,0,2.23,1.18,33.14,29.42,58.93,62.59,58.93H843.28A61.17,61.17,0,0,0,904.45,488Z"
                transform="translate(-95.55 -83.55)"
              />
            </svg>
          </Link>
          
            <img className="metatesk-image" src={metateskLogo} alt="" />

            <div className="navigation">
              <ul>
                <li>
                  <Link to="home" smooth={true} duration={500} offset={-150}>
                    Find Class
                    <span>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352c79.5 0 144-64.5 144-144s-64.5-144-144-144S64 128.5 64 208s64.5 144 144 144z"/></svg>
                    </span>
                  </Link>
                </li>
                <li>
                  <Link to="join" smooth={true} duration={500} offset={-150}>
                    Teach
                  </Link>
                  <span>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512"><path d="M160 64c0-35.3 28.7-64 64-64H576c35.3 0 64 28.7 64 64V352c0 35.3-28.7 64-64 64H336.8c-11.8-25.5-29.9-47.5-52.4-64H384V320c0-17.7 14.3-32 32-32h64c17.7 0 32 14.3 32 32v32h64V64L224 64v49.1C205.2 102.2 183.3 96 160 96V64zm0 256c-53 0-96-43-96-96s43-96 96-96s96 43 96 96s-43 96-96 96zm-26.7 32h53.3C260.3 352 320 411.7 320 485.3c0 14.7-11.9 26.7-26.7 26.7H26.7C11.9 512 0 500.1 0 485.3C0 411.7 59.7 352 133.3 352z"/></svg>
                  </span>
                </li>
                <li>
                  <Link to="join" smooth={true} duration={500} offset={-150}>
                    Help
                  </Link>
                  <span>
                    <svg aria-hidden="true" focusable="false" data-prefix="far" data-icon="circle-question" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="svg-inline--fa fa-circle-question outschool-183u6e5"><path fill="currentColor" d="M256 0C114.6 0 0 114.6 0 256s114.6 256 256 256s256-114.6 256-256S397.4 0 256 0zM256 464c-114.7 0-208-93.31-208-208S141.3 48 256 48s208 93.31 208 208S370.7 464 256 464zM256 336c-18 0-32 14-32 32s13.1 32 32 32c17.1 0 32-14 32-32S273.1 336 256 336zM289.1 128h-51.1C199 128 168 159 168 198c0 13 11 24 24 24s24-11 24-24C216 186 225.1 176 237.1 176h51.1C301.1 176 312 186 312 198c0 8-4 14.1-11 18.1L244 251C236 256 232 264 232 272V288c0 13 11 24 24 24S280 301 280 288V286l45.1-28c21-13 34-36 34-60C360 159 329 128 289.1 128z"></path></svg>
                  </span>
                </li>
                <li>
                  {
                    state.auth.authData ? (
                      <Link to="/" onClick={logOut}>
                        LogOut
                      </Link>
                    ):(
                      <Link to="" onClick={handleOpenCloseLogin}>
                        Login
                      </Link>
                    )
                  }
                  
                  <span>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M352 96h64c17.7 0 32 14.3 32 32V384c0 17.7-14.3 32-32 32H352c-17.7 0-32 14.3-32 32s14.3 32 32 32h64c53 0 96-43 96-96V128c0-53-43-96-96-96H352c-17.7 0-32 14.3-32 32s14.3 32 32 32zm-7.5 177.4c4.8-4.5 7.5-10.8 7.5-17.4s-2.7-12.9-7.5-17.4l-144-136c-7-6.6-17.2-8.4-26-4.6s-14.5 12.5-14.5 22v72H32c-17.7 0-32 14.3-32 32v64c0 17.7 14.3 32 32 32H160v72c0 9.6 5.7 18.2 14.5 22s19 2 26-4.6l144-136z"/></svg>
                  </span>
                </li>
                <Button onClick={handleOpenClose}>Join</Button>
              </ul>

            </div>
          </div>
          {/* second nav section  */}
          <div className="navigation-div-second general-section">
            <div className="navigation">
            <ul>
                <li>
                  <Link to="" smooth={true} duration={500} offset={-150}>
                    Popular
                  </Link>
                </li>
                <li>
                  <Link to="" smooth={true} duration={500} offset={-150}>
                    Coding & Tech
                  </Link>
                </li>
                <li>
                  <Link to="" smooth={true} duration={500} offset={-150}>
                    Science
                  </Link>
                </li>
              </ul>
            </div>

            <div className="menu-div">
              <button>
                Join
              </button>
              <div className="icon" >
                {/* <Link to="join" smooth={true} duration={500} offset={-150}>
                  Login
                </Link> */}
                <span>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M352 96h64c17.7 0 32 14.3 32 32V384c0 17.7-14.3 32-32 32H352c-17.7 0-32 14.3-32 32s14.3 32 32 32h64c53 0 96-43 96-96V128c0-53-43-96-96-96H352c-17.7 0-32 14.3-32 32s14.3 32 32 32zm-7.5 177.4c4.8-4.5 7.5-10.8 7.5-17.4s-2.7-12.9-7.5-17.4l-144-136c-7-6.6-17.2-8.4-26-4.6s-14.5 12.5-14.5 22v72H32c-17.7 0-32 14.3-32 32v64c0 17.7 14.3 32 32 32H160v72c0 9.6 5.7 18.2 14.5 22s19 2 26-4.6l144-136z"/></svg>
                </span>
              </div>
              <div className="icon" >
                {/* <Link to="home" smooth={true} duration={500} offset={-150}>
                  Find Class
                </Link> */}
                <span>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352c79.5 0 144-64.5 144-144s-64.5-144-144-144S64 128.5 64 208s64.5 144 144 144z"/></svg>
                </span>
              </div>
              <button
                className="open-burger"
                onClick={() => (boolean ? setboolean(false) : setboolean(true))}
              >
                &#9776;
              </button>
            </div>  
            


            <animated.div style={burger} className="responsive-navigation">
              {/* <button
                className="open-burger"
                onClick={() => (boolean ? setboolean(false) : setboolean(true))}
              >
                &#9776;
              </button> */}
              <ul>
                <li>
                  <Link to="home" smooth={true} duration={500} offset={-150}>
                    Find Class
                    <span>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352c79.5 0 144-64.5 144-144s-64.5-144-144-144S64 128.5 64 208s64.5 144 144 144z"/></svg>
                    </span>
                  </Link>
                </li>
                <li>
                  <Link to="join" smooth={true} duration={500} offset={-150}>
                    Teach
                  </Link>
                  <span>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512"><path d="M160 64c0-35.3 28.7-64 64-64H576c35.3 0 64 28.7 64 64V352c0 35.3-28.7 64-64 64H336.8c-11.8-25.5-29.9-47.5-52.4-64H384V320c0-17.7 14.3-32 32-32h64c17.7 0 32 14.3 32 32v32h64V64L224 64v49.1C205.2 102.2 183.3 96 160 96V64zm0 256c-53 0-96-43-96-96s43-96 96-96s96 43 96 96s-43 96-96 96zm-26.7 32h53.3C260.3 352 320 411.7 320 485.3c0 14.7-11.9 26.7-26.7 26.7H26.7C11.9 512 0 500.1 0 485.3C0 411.7 59.7 352 133.3 352z"/></svg>
                  </span>
                </li>
                <li>
                  <Link to="join" smooth={true} duration={500} offset={-150}>
                    Help
                  </Link>
                  <span>
                    <svg aria-hidden="true" focusable="false" data-prefix="far" data-icon="circle-question" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="svg-inline--fa fa-circle-question outschool-183u6e5"><path fill="currentColor" d="M256 0C114.6 0 0 114.6 0 256s114.6 256 256 256s256-114.6 256-256S397.4 0 256 0zM256 464c-114.7 0-208-93.31-208-208S141.3 48 256 48s208 93.31 208 208S370.7 464 256 464zM256 336c-18 0-32 14-32 32s13.1 32 32 32c17.1 0 32-14 32-32S273.1 336 256 336zM289.1 128h-51.1C199 128 168 159 168 198c0 13 11 24 24 24s24-11 24-24C216 186 225.1 176 237.1 176h51.1C301.1 176 312 186 312 198c0 8-4 14.1-11 18.1L244 251C236 256 232 264 232 272V288c0 13 11 24 24 24S280 301 280 288V286l45.1-28c21-13 34-36 34-60C360 159 329 128 289.1 128z"></path></svg>
                  </span>
                </li>
              </ul>
              <hr />
              <ul>
                <li>
                  <Link to="" smooth={true} duration={500} offset={-150}>
                    Popular
                  </Link>
                </li>
                <li>
                  <Link to="" smooth={true} duration={500} offset={-150}>
                    Coding & Tech
                  </Link>
                </li>
                <li>
                  <Link to="" smooth={true} duration={500} offset={-150}>
                    Science
                  </Link>
                </li>
              </ul>
            </animated.div>
          </div>
        </Element>
    </section>
  );
};

export default Navbar;

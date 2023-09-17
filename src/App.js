import "../src/App.scss";
import React from "react";
import "../src/components/Navbar/Navbar.scss";
import { motion, AnimatePresence } from "framer-motion";
import CollegeImage from '../src/ULogo.png'
import {AiFillHeart} from 'react-icons/ai'
function App() {
  const [navbarState, setNavbarState] = React.useState(0);
  function handleState(stateNumber) {
    setNavbarState(stateNumber);
  }
  const buttonRef = React.useRef();
  function handleClick() {
    if (currentMode === "Dark") setMode("Light");
    else setMode("Dark");
    if (document.body.style.backgroundColor === "white")
      document.body.style.backgroundColor = "black";
    else document.body.style.backgroundColor = "white";
    if (document.body.style.color === "white")
      document.body.style.color = "black";
    else document.body.style.color = "white";
  }

  function handleChange() {
    loaderOne.current.style.left = "0";
    loaderThree.current.style.left = "0";
    loaderTwo.current.style.left = "0";

    setTimeout(() => {
      loaderOne.current.style.left = "100vw";
      loaderThree.current.style.left = "100vw";
      loaderTwo.current.style.left = "100vw";
    }, 1500);
  }
  const [currentMode, setMode] = React.useState("Dark");
  let loaderOne = React.useRef(),
    loaderTwo = React.useRef(),
    loaderThree = React.useRef();
  return ( 
    <div className="App"> 
      {/* loader 1 */}
      <div
        ref={loaderOne}
        className="loader_div"
        style={{
          backgroundColor: "white",
          width: "100vw",
          height: "100vh",
          position: "fixed",
          zIndex: 100,
          left: "100vw",
          transition: "all 250ms",
        }}
      ></div>
      {/* loader 2 */}
      <div
        ref={loaderTwo}
        className="loader_div"
        style={{
          backgroundColor: "black",
          width: "100vw",
          height: "100vh",
          position: "fixed",
          zIndex: 100,
          left: "100vw",
          transition: "all 250ms",
          transitionDelay: "0.15s"
        }}
      ></div>
      {/* loader 3 */}
      <div
        ref={loaderThree}
        className="loader_div"
        style={{
          backgroundColor: "white",
          width: "100vw",
          height: "100vh",
          position: "fixed",
          zIndex: 100,
          left: "100vw",
          transition: "all 250ms",
          transitionDelay: "0.30s",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            fontSize: "8rem",
            fontWeight: "600"
        }}
      >Content Coming Up!</div>
      <nav>
        <h1>EDU.Query
            <div><AiFillHeart /></div>
            <div className={`underline_div`}/>
        </h1>
        <ul>
          <li onClick={() => {handleState(0); handleChange()}}>Home</li>
          <li onClick={() => {handleState(1); handleChange()}}>LogIn/SignUp</li>
          <li onClick={() => {handleState(2); handleChange()}}>Contact Us</li>
          <li onClick={() => {handleState(3); handleChange()}}>User Settings</li>
          <li
            className="dark_button"
            onClick={() => handleClick()}
            ref={buttonRef}
          >
            {currentMode}
          </li>
        </ul>
      </nav>
      <section>
        <AnimatePresence>
          {navbarState === 0 ? (
            <React.Fragment>
              <h1 className="uni_h1">Universities: </h1>
              <Home />
            </React.Fragment>
          ) : navbarState === 1 ? (
            <LogIn />
          ) : navbarState === 2 ? (
            <ContactUs />
          ) : (
            <UserSetting />
          )}
        </AnimatePresence>
      </section>
    </div>
  );
}

export default App;

const Home = () => {

  return (
    <motion.div
      animate={{ y: 0, opacity: 1 }}
      initial={{ y: 100, opacity: 0 }}
      transition={{ duration: 1, ease: "easeInOut" }}
      className="home_div"
    >
      <div className="new_button">
        <h1>Add New:</h1>
      </div>
      <div className="cardDiv">
        <UniversityCard />
      </div>
    </motion.div>
  );
};

const LogIn = () => {
  return <div></div>;
};

const ContactUs = () => {
  return <div></div>;
};

const UserSetting = () => {
  return <div></div>;
};

const UniversityCard = () => {
  return (
    <motion.div whileHover={{ scale: 1.05 }} className="uni_card">
      <div className="uni_card_img_div">
          <img src={CollegeImage} alt=""/>
      </div>
      <h1>Chitkar University</h1>
    </motion.div>
  );
};

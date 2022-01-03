import React, {useState} from "react";
import { Card, Container } from "@mui/material";
import { Savings, Groups, CoPresent ,Facebook,Instagram,YouTube,Twitter,Reorder} from "@mui/icons-material";

function Learn() {
  const[Links,setLinks]=useState(false);

  return (
    <div className="home-main">
      <div className="home-main2">
        <nav className="learn1 flex-justify-between flex-row">
          <div className="logo">
            <img
              src="https://evolutiontrainingservices.com/wp-content/uploads/2020/12/ETS-Logo-101x48.jpg"
              alt=""
              srcset=""
            />
          </div>
          <div className="link"   id={Links ? "hidden":" "}>

          <ul className="menu-link  flex-row flex-align-center ">
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">All Course</a>
            </li>{" "}
            <li>
              <a href="#">About</a>
            </li>{" "}
            <li>
              <a href="#">Blogs</a>
            </li>{" "}
            <li>
              <a href="#">Glary</a>
            </li>
            <li>
              <a href="#">Contact</a>
            </li>
            

          </ul>
          <button onClick={()=>setLinks(!Links)}>{" "}<Reorder/></button>

          </div>
          <div className={`toggle ${Links ? "toggle-active": ""}`}>
          <ul>
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">All Course</a>
            </li>{" "}
            <li>
              <a href="#">About</a>
            </li>{" "}
            <li>
              <a href="#">Blogs</a>
            </li>{" "}
            <li>
              <a href="#">Glary</a>
            </li>
            <li>
              <a href="#">Contact</a>
            </li>
            

          </ul>
          </div>
        </nav>
        <div className="middle1">
          <h1>Are you looking for growth?</h1>
          <br />
          <h6>Your journey for an awesome life starts here</h6>
        </div>
        <div className="roundbutton flex-row flex-justify-center">
          <button>Our Mentorship Program</button>
        </div>
      </div>
      <div className="card-holder">
        <Container>
          <div className="main-card flex-row flex-justify-between lex-justify-between">
            <div className="card1">
              {" "}
              <Card className="inner-card flex-column flex-justify-between flex-align-center">
                <span className="icon">
                  <CoPresent />
                </span>
                <h2 className="lorem">Lorem ipsum dolor sit amet.</h2>
                <p className="para">
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                </p>
              </Card>
            </div>
            <div className="card1">
              {" "}
              <Card className="inner-card flex-column flex-justify-between flex-align-center">
                <span className="icon">
                  {" "}
                  <Savings />
                </span>
                <h2 className="lorem"> Lorem ipsum dolor sit amet.</h2>
                <p className="para">
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                </p>
              </Card>
            </div>
            <div className="card1">
              {" "}
              <Card className="inner-card flex-column flex-justify-between  flex-align-center">
                <span className="icon">
                  {" "}
                  <Groups />
                </span>
                <h2 className="lorem">Lorem ipsum dolor sit amet.</h2>
                <p className="para">
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                </p>
              </Card>
            </div>
          </div>
        </Container>
      </div>
      <Container>
        <div className="main-course">
          <h1 className="course1">Our Most Popular Courses</h1>
          <p className="course2">
            Evolution Training Services is a Pioneer training organization for
            Communicative English, Public Speaking, Storytelling, Goal Setting,
            Self Esteem, Rapport Building, Confidence Building, Personal
            development.
          </p>
          <div className="card-img flex-row flex-justify-center ">
            <div className="card-img1">
              <img
                src="https://evolutiontrainingservices.com/wp-content/uploads/2020/12/20201231_011829-1024x1024.png"
                alt=""
                srcset=""
                className="book"
              />
              <button className="enroll-btn">Enroll Now</button>
            </div>
            <div className="card-img1">
              <img
                src="https://evolutiontrainingservices.com/wp-content/uploads/2020/12/20201231_013313-1024x1024.png"
                alt=""
                srcset=""
                className="book"
              />
              <button className="enroll-btn">Enroll Now</button>
            </div>
            <div className="card-img1">
              <img
                src="https://evolutiontrainingservices.com/wp-content/uploads/2020/12/20201231_014831-1024x1024.png"
                alt=""
                srcset=""
                className="book"
              />
              <button className="enroll-btn">Enroll Now</button>
            </div>
          </div>
        </div>
        <div className="big-btn flex-row flex-justify-center">
          <button className="allCourse  flex-justify-center">
            {" "}
            All Course
          </button>
        </div>
      </Container>
      <footer className="main-footer ">
        <h2 className="footer-heading ">Join Our Community of 500+ Happy Learners  Today!</h2>
        <p className="footer-paragraph">
          Join Us today and be a part of our ETS Community. Our Community
          includes learners like Graduates, Post Graduates, Teachers, Bankers,
          Engineers, Doctors, Businessmen.
        </p>
        <button className="footer-btn">Start Learning</button>
        <div className="social-media flex-row  flex-justify-center">
        <a  className="anchor1 fb-blue"  href=""><Facebook/></a>
        <a  className="anchor1 insta-orange" href=""><Instagram/></a>
        <a  className="anchor1 youtube-red" href=""><YouTube/></a>
        <a  className="anchor1 twitter-green" href=""><Twitter/></a>
        </div>
        <p className="copyright">Copyright © 2020 - 2021 : Evolution Training Services</p>
      </footer>
    </div>
  );
}

export default Learn;

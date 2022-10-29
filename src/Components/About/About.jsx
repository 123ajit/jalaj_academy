import React from "react";
import "./about.css";
import Me from "../../assets/me.PNG";
import { FaAward } from "react-icons/fa";
import { FiUsers } from "react-icons/fi";
import { VscFolderLibrary } from "react-icons/vsc";

function About() {
  return (
    <section id="about">
      <h5>Get to Know</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={Me} alt="about img" />
          </div>
        </div>

        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <FaAward className="about__icon" />
              <h5>Experience</h5>
              <small>10+ years Teaching Experience</small>
            </article>

            <article className="about__card">
              <FiUsers className="about__icon" />
              <h5>Studends</h5>
              <small>1 Lakh + Students</small>
            </article>

            <article className="about__card">
              <VscFolderLibrary className="about__icon" />
              <h5>Courses</h5>
              <small>24/7 course Help</small>
            </article>
          </div>

          <p>
            I am a math, science and English tutor with a decade of professional
            tutoring experienc. Over the years, i have tutored lakh of students
            for many thousands of hours from nursery school to college.
          </p>

          <a href="#contact" className="btn btn-primary">
            Let's Join
          </a>
        </div>
      </div>
    </section>
  );
}

export default About;

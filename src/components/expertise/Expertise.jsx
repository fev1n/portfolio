import React, { useState } from "react";
import "./expertise.css";

const Expertise = () => {
  const [toggleState, setToggleState] = useState(0);

  const toggleTab = (index) => {
    setToggleState(index);
  };

  return (
    <section className="expertise section" id="expertise">
      <h2 className="section__title">Expertise</h2>
      <span className="section__subtitle">My mastery/specialization</span>

      <div className="expertise__container container grid">
        <div className="expertise__content">
          <div>
            <i className="uil uil-laptop-cloud expertise__icon"></i>
            <h3 className="expertise__title">
              Software <br /> development
            </h3>
          </div>

          <span className="expertise__button" onClick={() => toggleTab(1)}>
            View More
            <i className="uil uil-arrow-right expertise__button-icon"></i>
          </span>

          <div
            className={
              toggleState === 1
                ? "expertise__modal active-modal"
                : "expertise__modal"
            }
          >
            <div className="expertise__modal-content">
              <i
                onClick={() => toggleTab(0)}
                className="uil uil-times expertise__modal-close"
              ></i>
              <h3 className="expertise__modal-title">Software development</h3>
              <p className="expertise__modal-description">
                With over 1.5 years of robust industry experience, I have
                collaborated seamlessly with a dynamic team to consistently
                deliver high-quality work.
              </p>
              <ul className="expertise__modal-expertize grid">
                <li className="expertise__modal-expertise">
                  <i className="uil uil-check-circle expertise__modal-icon"></i>
                  <p className="expertise__modal-info">
                    I design the front end functionality of websites.
                  </p>
                </li>

                <li className="expertise__modal-expertise">
                  <i className="uil uil-check-circle expertise__modal-icon"></i>
                  <p className="expertise__modal-info">
                    I develop and maintain backend applications.
                  </p>
                </li>

                <li className="expertise__modal-expertise">
                  <i className="uil uil-check-circle expertise__modal-icon"></i>
                  <p className="expertise__modal-info">
                    I am Experienced in agile development methodologies.
                  </p>
                </li>

                <li className="expertise__modal-expertise">
                  <i className="uil uil-check-circle expertise__modal-icon"></i>
                  <p className="expertise__modal-info">
                    I know how to manage multiple cloud services (AWS, Azure,
                    GCP).
                  </p>
                </li>

                <li className="expertise__modal-expertise">
                  <i className="uil uil-check-circle expertise__modal-icon"></i>
                  <p className="expertise__modal-info">
                    Familiarity with DevOps practices for streamlining
                    development and operations collaboration.
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="expertise__content">
          <div>
            <i className="uil uil-analytics expertise__icon"></i>
            <h3 className="expertise__title">
              Technical <br /> Analyst
            </h3>
          </div>

          <span className="expertise__button" onClick={() => toggleTab(2)}>
            View More
            <i className="uil uil-arrow-right expertise__button-icon"></i>
          </span>

          <div
            className={
              toggleState === 2
                ? "expertise__modal active-modal"
                : "expertise__modal"
            }
          >
            <div className="expertise__modal-content">
              <i
                onClick={() => toggleTab(0)}
                className="uil uil-times expertise__modal-close"
              ></i>
              <h3 className="expertise__modal-title">Technical Analyst</h3>
              <p className="expertise__modal-description">
                With over 1.5 years of robust industry experience, I have
                collaborated seamlessly with a dynamic team to consistently
                deliver high-quality work.
              </p>
              <ul className="expertise__modal-expertize grid">
                <li className="expertise__modal-expertise">
                  <i className="uil uil-check-circle expertise__modal-icon"></i>
                  <p className="expertise__modal-info">
                    I am great at analyzing tech requirements, translating into
                    plans.
                  </p>
                </li>

                <li className="expertise__modal-expertise">
                  <i className="uil uil-check-circle expertise__modal-icon"></i>
                  <p className="expertise__modal-info">
                    Experienced in conducting technical feasibility studies and
                    impact assessments
                  </p>
                </li>

                <li className="expertise__modal-expertise">
                  <i className="uil uil-check-circle expertise__modal-icon"></i>
                  <p className="expertise__modal-info">
                    Skilled in creating technical documentation such as
                    specifications and user guides.
                  </p>
                </li>

                <li className="expertise__modal-expertise">
                  <i className="uil uil-check-circle expertise__modal-icon"></i>
                  <p className="expertise__modal-info">
                    Skilled in conducting system and software performance
                    analysis for optimization.
                  </p>
                </li>

                <li className="expertise__modal-expertise">
                  <i className="uil uil-check-circle expertise__modal-icon"></i>
                  <p className="expertise__modal-info">
                    I am familiar in providing technical support and guidance to
                    stakeholders.
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="expertise__content">
          <div>
            <i className="uil uil-brain expertise__icon"></i>
            <h3 className="expertise__title">
              AI/ML <br /> enthusiast
            </h3>
          </div>

          <span className="expertise__button" onClick={() => toggleTab(3)}>
            View More
            <i className="uil uil-arrow-right expertise__button-icon"></i>
          </span>

          <div
            className={
              toggleState === 3
                ? "expertise__modal active-modal"
                : "expertise__modal"
            }
          >
            <div className="expertise__modal-content">
              <i
                className="uil uil-times expertise__modal-close"
                onClick={() => toggleTab(0)}
              ></i>
              <h3 className="expertise__modal-title">AI/ML enthusiast</h3>
              <p className="expertise__modal-description">
                With over 1.5 years of robust industry experience, I have
                collaborated seamlessly with a dynamic team to consistently
                deliver high-quality work.
              </p>
              <ul className="expertise__modal-expertize grid">
                <li className="expertise__modal-expertise">
                  <i className="uil uil-check-circle expertise__modal-icon"></i>
                  <p className="expertise__modal-info">
                    Exploring AI/ML concepts, seeking deeper understanding.
                  </p>
                </li>

                <li className="expertise__modal-expertise">
                  <i className="uil uil-check-circle expertise__modal-icon"></i>
                  <p className="expertise__modal-info">
                    I tend to learn from other fellow professionals about
                    evolving AI.
                  </p>
                </li>

                <li className="expertise__modal-expertise">
                  <i className="uil uil-check-circle expertise__modal-icon"></i>
                  <p className="expertise__modal-info">
                    Collaborating on AI/ML projects, gaining practical
                    experience.
                  </p>
                </li>

                <li className="expertise__modal-expertise">
                  <i className="uil uil-check-circle expertise__modal-icon"></i>
                  <p className="expertise__modal-info">
                    I am trying to excel by enrolling in related courses,
                    certifications.
                  </p>
                </li>

                <li className="expertise__modal-expertise">
                  <i className="uil uil-check-circle expertise__modal-icon"></i>
                  <p className="expertise__modal-info">
                    Applying AI/ML concepts to personal projects, real-world
                    problems.
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Expertise;

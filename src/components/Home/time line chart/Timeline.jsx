import React, { useState } from 'react';
import './timeline.css'; // Ensure you have this CSS file

const ProgressBar = () => {
  const [activeStep, setActiveStep] = useState(1);

  const steps = [
    { title: "HOME WORK", content: "Home Work Content" },
    { title: "RESPONSIVE PART", content: "Gallery Section" },
    { title: "Creative cREATIONS", content: "Creative CREATIONS" },
    { title: "TESTIMONIALS PART", content: "Testimonials NOW" },
    { title: "OUR LOCATIONS", content: "Our Locations" },
  ];

  const handleStepClick = (index) => {
    setActiveStep(index + 1);
  };

  return (
    <div className="process-wrapper">
      <h1>Our Process</h1>
      <br />
      <div id="progress-bar-container">
        <ul>
          {steps.map((step, index) => (
            <li
              key={index}
              className={`step step0${index + 1} ${activeStep > index ? 'active' : ''}`}
              onClick={() => handleStepClick(index)}
            >
              <div className="step-inner">{step.title}</div>
            </li>
          ))}
        </ul>

        <div id="line">
          <div
            id="line-progress"
            style={{ width: `${(activeStep - 1) * (100 / (steps.length - 1))}%` }}
          ></div>
        </div>
      </div>

      <div id="progress-content-section">
        {steps.map((step, index) => (
          <div
            key={index}
            className={`section-content ${step.content.toLowerCase().replace(/\s+/g, '-')}${activeStep === index + 1 ? ' active' : ''}`}
          >
            <h2>{step.content}</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec neque justo, consequat non fermentum ac, tempor eu turpis. Proin nulla eros, placerat non ipsum ut, dapibus ullamcorper ex. Nulla in dapibus lorem. Suspendisse vitae velit ac ante consequat placerat ut sed eros. Nullam porttitor mattis mi, id fringilla ex consequat eu. Praesent pulvinar tincidunt leo et condimentum. Maecenas volutpat turpis at felis egestas malesuada. Phasellus sem odio, venenatis at ex a, lacinia suscipit orci.</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProgressBar;

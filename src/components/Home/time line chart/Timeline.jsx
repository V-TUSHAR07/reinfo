import React, { useState } from 'react';
import './timeline.css'; // Ensure you have this CSS file
import { ganttData } from '../../../data/ganttData';
import '../../../index.css'

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
      <table border="1" style={{ width: "100%", borderCollapse: "collapse" }} className="min-w-full table-auto">
        <thead>
          <tr className="bg-gray-700 ">
            <th>ID</th>
            <th>Task</th>
            <th>Start Date</th>
            <th>Duration (days)</th>
            <th>Progress (%)</th>
            <th>Parent Task</th>
          </tr>
        </thead>
        <tbody>
          {ganttData.data.map((row) => (
            <tr key={row.id} className={`odd:bg-blue-100 even:customBlue`}>
              <td>{row.id}</td>
              <td>{row.text}</td>
              <td>{row.start_date.toString}</td>
              <td>{row.duration}</td>
              <td>{(row.progress * 100).toFixed(0)}%</td>
              <td>{row.parent || "N/A"}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  ))}
</div>

    </div>
  );
};

export default ProgressBar;

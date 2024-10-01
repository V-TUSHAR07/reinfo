import React, { useState } from 'react';
import { FaStar } from 'react-icons/fa';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import './workspace.css'; // Create this CSS file for styling

const CreateWorkspace = () => {
  const [workspaceName, setWorkspaceName] = useState('');
  const [customerName, setCustomerName] = useState('');
  const [description, setDescription] = useState('');
  const [importance, setImportance] = useState(0);
  const [hover, setHover] = useState(null);
  const [scopeTarget, setScopeTarget] = useState('');
  const [dateRange, setDateRange] = useState([null, null]);
  const [startDate, endDate] = dateRange;

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log({
      workspaceName,
      customerName,
      description,
      importance,
      scopeTarget,
      startDate,
      endDate,
    });
  };

  return (
    <div className="create-workspace-container">
      <form className="create-workspace-form" onSubmit={handleSubmit}>
        <div className="button-group">
        <h2>Create Workspace</h2>
          <button type="button" className="btn btn-secondary">Cancel</button>
          <button type="submit" className="btn btn-success">Save</button>
        </div>
        <div className="form-group">
          <input
            type="text"
            placeholder="Workspace Name"
            value={workspaceName}
            onChange={(e) => setWorkspaceName(e.target.value)}
            className="form-control"
          />
          <DatePicker
            selectsRange
            startDate={startDate}
            endDate={endDate}
            onChange={(update) => setDateRange(update)}
            isClearable={true}
            placeholderText="DD/MM/YY - DD/MM/YY"
            className="form-control"
          />
        </div>
        <div className="form-group">
          <input
            type="text"
            placeholder="Customer Name"
            value={customerName}
            onChange={(e) => setCustomerName(e.target.value)}
            className="form-control"
          />
        </div>
        <div className="form-group">
          <textarea
            placeholder="Describe the workspace used for..."
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="form-control"
          />
        </div>
        <div className="form-group importance-group">
        <label>
            {[...Array(5)].map((star, index) => {
              const ratingValue = index + 1;
              return (
                <FaStar
                  key={index}
                  size={20}
                  style={{ cursor: "pointer" }}
                  color={ratingValue <= (hover || importance) ? "yellow" : "gray"}
                  onClick={() => setImportance(ratingValue)}
                  onMouseEnter={() => setHover(ratingValue)}
                  onMouseLeave={() => setHover(null)}
                />
              );
            })}
          </label>
          <p>Importance</p>
        </div>
        <div className="form-group">
          <input
            type="text"
            placeholder="Scope Target"
            value={scopeTarget}
            onChange={(e) => setScopeTarget(e.target.value)}
            className="form-control"
          />
        </div>
        
      </form>
    </div>
  );
};

export default CreateWorkspace;

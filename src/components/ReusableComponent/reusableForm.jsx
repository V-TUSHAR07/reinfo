import React, { useState } from 'react';
import { FaStar } from 'react-icons/fa';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import '../workspace/workspace.css';

const ReusableForm = ({
  formData, // Holds the data for the form fields
  setFormData, // Setter for form data
  fields, // Dynamic form fields configuration
  onSubmit, // Submit handler
  onCancel, // Cancel handler (optional)
  title
}) => {
  const { workspaceName, customerName, description, importance, scopeTarget, dateRange } = formData;
  const [startDate, endDate] = dateRange || [null, null];
  const [hover, setHover] = useState(null);

  const handleChange = (fieldId, value) => {
    setFormData({ ...formData, [fieldId]: value });
  };

  const handleImportanceChange = (ratingValue) => {
    setFormData({ ...formData, importance: ratingValue });
};

  const handleFormSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <div className="create-workspace-container">
      <form className="create-workspace-form" onSubmit={handleFormSubmit}>
        <div className="button-group">
        <h2>{title}</h2>
          <button type="button" className="btn btn-secondary" onClick={onCancel}>Cancel</button>
          <button type="submit" className="btn btn-success">Save</button>
        </div>
        {fields.map((field) => {
          switch (field.type) {
            case 'text':
              return (
                <div className="form-group" key={field.id}>
                  <input
                    type="text"
                    placeholder={field.placeholder}
                    value={formData[field.id] || ''}
                    onChange={(e) => handleChange(field.id, e.target.value)}
                    className="form-control"
                  />
                </div>
              );
              case 'datepicker':
              return (
                <div className="form-group" key={field.id}>
                  <DatePicker
                    selectsRange
                    startDate={startDate}
                    endDate={endDate}
                    onChange={(update) => handleChange('dateRange', update)}
                    isClearable={true}
                    placeholderText="DD/MM/YY - DD/MM/YY"
                    className="form-control"
                  />
                </div>
              );
            case 'textarea':
              return (
                <div className="form-group" key={field.id}>
                  <textarea
                    placeholder={field.placeholder}
                    value={formData[field.id] || ''}
                    onChange={(e) => handleChange(field.id, e.target.value)}
                    className="form-control"
                  />
                </div>
              );
            
            case 'importance':
              return (
                <div className="form-group importance-group" key={field.id}>
                  <label>
                    {[...Array(5)].map((star, index) => {
                      const ratingValue = index + 1;
                      return (
                        <FaStar
                          key={index}
                          size={20}
                          style={{ cursor: "pointer" }}
                          color={ratingValue <= (hover || formData.importance) ? "yellow" : "gray"}
                          onClick={() => handleImportanceChange(ratingValue)}
                          onMouseEnter={() => setHover(ratingValue)}
                          onMouseLeave={() => setHover(null)}
                        />
                      );
                    })}
                  </label>
                  <p>Importance</p>
                </div>
              );
            default:
              return null;
          }
        })}
      </form>
    </div>
  );
};

export default ReusableForm;

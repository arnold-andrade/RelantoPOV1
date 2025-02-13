// FormPage.jsx
import React, { useState } from 'react';
import './FormPage.css';

function FormPage() {
  const [formData, setFormData] = useState({
    clientName: '',
    projectName: '',
    description: '',
    startDate: '',
    endDate: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Process formData here (e.g., send it to an API or update state)
    console.log('Form Data Submitted:', formData);
    // Optionally, reset the form
    setFormData({
      clientName: '',
      projectName: '',
      description: '',
      startDate: '',
      endDate: '',
    });
  };

  return (
    <div className="form-page-container">
      <h1>Add New Project</h1>
      <form className="project-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="clientName">Client Name:</label>
          <input
            type="text"
            id="clientName"
            name="clientName"
            value={formData.clientName}
            onChange={handleChange}
            placeholder="Enter client name"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="projectName">Project Name:</label>
          <input
            type="text"
            id="projectName"
            name="projectName"
            value={formData.projectName}
            onChange={handleChange}
            placeholder="Enter project name"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="description">Description:</label>
          <textarea
            id="description"
            name="description"
            value={formData.description}
            onChange={handleChange}
            placeholder="Enter project description"
            rows="4"
            required
          ></textarea>
        </div>
        <div className="form-group">
          <label htmlFor="startDate">Start Date:</label>
          <input
            type="date"
            id="startDate"
            name="startDate"
            value={formData.startDate}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="endDate">End Date:</label>
          <input
            type="date"
            id="endDate"
            name="endDate"
            value={formData.endDate}
            onChange={handleChange}
          />
        </div>
        <button type="submit" className="submit-button">
          Submit
        </button>
      </form>
    </div>
  );
}

export default FormPage;

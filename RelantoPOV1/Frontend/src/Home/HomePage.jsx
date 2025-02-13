// HomePage.jsx
import React from 'react';
import { useNavigate } from 'react-router-dom';
import './HomePage.css'; // Import the CSS file for styling

function HomePage() {
  const navigate = useNavigate();
  const departments = [
    'DATA & AI',
    'PLANNING',
    'AI FIRST LAB',
    'DIGITAL TRANSFORMATION',
    'SALES FORCE',
  ];

  const handleDepartmentClick = (departmentName) => {
    // Navigate to the corresponding client page
    navigate(`/client/${departmentName}`);
  };

  return (
    <div className="homepage">
      <h1>Departments</h1>
      <ul className="department-list">
        {departments.map((department) => (
          <li
            key={department}
            className="department-item"
            onClick={() => handleDepartmentClick(department)}
          >
            {department}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default HomePage;

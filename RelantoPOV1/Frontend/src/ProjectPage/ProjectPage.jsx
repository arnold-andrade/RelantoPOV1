// ProjectPage.jsx
import React from 'react';
import { useNavigate } from 'react-router-dom';

function ProjectPage() {
  const navigate = useNavigate();

  const handleAddProjectClick = () => {
    navigate('/form');
  };

  return (
    <div>
      <h1>Project Page</h1>
      <button onClick={handleAddProjectClick}>Add Project</button>
    </div>
  );
}

export default ProjectPage;

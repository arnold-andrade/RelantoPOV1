// ProjectDashboardPage.jsx
import React from 'react';
import { useParams } from 'react-router-dom';

function ProjectDashboardPage() {
  const { clientName, projectName } = useParams();

  return (
    <div>
      <h1>Project Dashboard</h1>
      <p>Client: {clientName}</p>
      <p>Project: {projectName}</p>
    </div>
  );
}

export default ProjectDashboardPage;

// ClientPage.jsx
import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';

function ClientPage() {
  const { clientName } = useParams();
  const navigate = useNavigate();
  const projects = ['Project1', 'Project2']; // Example project list

  const handleProjectClick = (projectName) => {
    navigate(`/client/${clientName}/project/${projectName}`);
  };

  return (
    <div>
      <h1>Client Page: {clientName}</h1>
      <ul>
        {projects.map((project) => (
          <li key={project} onClick={() => handleProjectClick(project)}>
            {project}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ClientPage;

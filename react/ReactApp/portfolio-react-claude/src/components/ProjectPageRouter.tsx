import React, { Suspense } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

const ProjectPageRouter: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  console.log("router id:",id);
  const navigate = useNavigate();

  // Pad the ID with leading zeros to match the file naming convention
  const paddedId = id?.padStart(4, '0');

  // Dynamically import the project page component
  const projectPath=`../pages/projects/ProjectPage${paddedId}.tsx`;
  console.log("projectPath:",projectPath);
  const ProjectPageComponent = React.lazy(() => import(projectPath)
    .catch(() => {
      // If the import fails (file doesn't exist), navigate to a 404 page or home
      navigate('/404', { replace: true });
      return { default: () => <div>Project not found</div> };
    })
  );

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <ProjectPageComponent />
    </Suspense>
  );
};

export default ProjectPageRouter;

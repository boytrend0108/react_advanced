import { Navigate } from 'react-router';
import { routePath } from 'shared/config/routerConfig/routerConfig';

interface Props {
  className?: string;
  children?: React.ReactNode;
}

export const RequaredAuth: React.FC<Props> = ({ children }) => {
  let user = null;

  try {
    const userString = localStorage.getItem('user');
    if (userString) {
      user = JSON.parse(userString);
    }
  } catch (error) {
    // If JSON parsing fails, treat as no user
    user = null;
  }

  if (!user) {
    return <Navigate to={routePath.main} replace />;
  }

  return children;
};

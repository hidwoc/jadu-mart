import { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { logout } from '../services/users';

const Logout = ({setUser}) => {
  const history = useHistory()

  useEffect(() => {
    const handleLogout = () => {
      logout();
      setUser(null);
    };
    handleLogout()
    history.push('/home')
  }, [])

  return (
    null
  );
};

export default Logout;
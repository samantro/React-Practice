import React from 'react';
import UserContaxt from './UserContext';

const UserContextProvider = ({ children }) => {
  const [user, setUser] = React.useState(null);
  return <UserContaxt.Provider value={{ user, setUser }}>{children}</UserContaxt.Provider>;
};

export default UserContextProvider;

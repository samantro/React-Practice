import React from 'react';
import UserContaxt from '../context/UserContext';

function Profile() {
  const { user } = React.useContext(UserContaxt);
  if (!user) return <h2>Please Login</h2>;
  return <div>Welcome {user.username}</div>;
}

export default Profile;

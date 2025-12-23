import './App.css';
import UserContextProvider from './context/UserContextProvider';
import Login from './components/Login';
import Profile from './components/Profile';

function App() {
  return (
    <>
      <div>Context API in React</div>
      <UserContextProvider>
        <Login />
        <Profile />
      </UserContextProvider>
    </>
  );
}

export default App;

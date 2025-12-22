import Header from './components/Header';
import Footer from './components/Footer';
import UserCard from './components/UserCard';

function App() {
  return (
    <>
      <Header />

      <main style={{ padding: '20px' }}>
        <UserCard name="Rahul" role="Frontend Dev" />
        <UserCard name="Amit" role="Backend Dev" />
      </main>

      <Footer />
    </>
  );
}

export default App;

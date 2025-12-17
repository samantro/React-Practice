function Header() {
  return (
    <header style={styles.header}>
      <h2>React Learning</h2>
      <nav>
        <a href="#">Home</a>
        {' | '}
        <a href="#">About</a>
        {' | '}
        <a href="#">Contact</a>
      </nav>
    </header>
  );
}

const styles = {
  header: {
    padding: '10px',
    backgroundColor: '#282c34',
    color: 'white',
    textAlign: 'center',
  },
};

export default Header;

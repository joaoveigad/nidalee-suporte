import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { Container } from './style';
import Main from './pages/main';

function App() {
  return (
    <Container>
      <Router>
        <Routes>
          <Route path="/" element={<Main />} />
        </Routes>
      </Router>
    </Container>
  )
}

export default App;

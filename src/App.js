import GlobalStyle from './global/GlobalStyle';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom' 
import Home from './pages/Home';
function App() {
  return (
    <Router>
      <GlobalStyle/>
      <Routes>
        <Route path='/' element={<Home/>}/>
      </Routes>
    </Router>
  );
}

export default App;

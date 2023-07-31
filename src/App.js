
import { Routes, Route } from 'react-router-dom';
import HomePage from './components/HomePage';
import AboutPage from './components/AboutComponent';
import ContactContainer from './components/ContactComponent'

function App() {
  return (
   <Routes>
    <Route path='/' element={<HomePage />} />
    <Route path='/about' element={<AboutPage />} />
    <Route path='/contact' element={<ContactContainer />} />
   </Routes>
  );
}

export default App;

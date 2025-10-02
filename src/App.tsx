import {Routes, Route} from 'react-router';

// page imports
import HomePage from './pages/homepage';


function App() {

  return (
    <div>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="*" element={<HomePage />} />
      </Routes>
    </div>
  )
}

export default App

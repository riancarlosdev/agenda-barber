import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import { ErrorPage } from 'Pages/Error';
import { HomePage } from 'Pages/Home';

export const App: React.FC = (): JSX.Element => {
  return (
    <Router>
      <Routes>
        <Route path='*' element={<ErrorPage />} />
        <Route path='/' element={<HomePage />} />
      </Routes>
    </Router>
  );
};

export default App;

import './App.css';
import {Route, Routes} from 'react-router-dom';
import Login from './components/Login/Login';
import { UserRoutes } from './components/UserRoutes/Userroutes';
import { PrivateRoutes } from './components/PrivateRoutes/PrivateRoutes';

function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path='/*' element={
          <PrivateRoutes>
            <UserRoutes />
          </PrivateRoutes>} />
      </Routes>
    </div>
  );
}

export default App;

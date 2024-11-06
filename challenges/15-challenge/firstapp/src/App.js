import { Route, Routes, Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import  Registro  from '../src/components/Registro/Registro';
import  { UserRoutes }  from '../src/components/UserRoutes/Userroutes';
import Login from '../src/components/Login/Login';

function App() {
  const { status } = useSelector((state) => state.auth);

  const ProtectedRoute = ({ children }) => {
    if (status !== 'authenticated') {
      return <Navigate to="/" />;
    }
    return children;
  };

  return (
    <div>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/registro" element={<Registro />} />
        
        {/* Rutas protegidas para usuarios autenticados */}
        <Route path="/*" element={
          <ProtectedRoute>
            <UserRoutes />
          </ProtectedRoute>
        } />
      </Routes>
    </div>
  );
}

export default App;

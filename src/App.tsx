import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { AuthProvider, useAuth } from './context/AuthContext';
import Layout from './components/layout/Layout';
import Login from './pages/Login';

// Admin pages
import AdminDashboard from './pages/admin/Dashboard';

// Doctor pages
import DoctorDashboard from './pages/doctor/Dashboard';

// Reception pages
import ReceptionDashboard from './pages/reception/Dashboard';

// Protected route component
const ProtectedRoute: React.FC<{ 
  element: React.ReactNode; 
  allowedRoles?: string[];
}> = ({ element, allowedRoles = [] }) => {
  const { isAuthenticated, role, loading } = useAuth();
  
  if (loading) {
    return <div className="flex justify-center items-center h-screen">Carregando...</div>;
  }
  
  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }
  
  if (allowedRoles.length > 0 && !allowedRoles.includes(role || '')) {
    // Redirect to appropriate dashboard based on role
    if (role === 'admin') {
      return <Navigate to="/admin/dashboard" replace />;
    } else if (role === 'doctor') {
      return <Navigate to="/doctor/dashboard" replace />;
    } else if (role === 'receptionist') {
      return <Navigate to="/reception/dashboard" replace />;
    } else {
      return <Navigate to="/" replace />;
    }
  }
  
  return <>{element}</>;
};

function App() {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route path="/login" element={<Login />} />
          
          {/* Admin routes */}
          <Route 
            path="/admin/dashboard" 
            element={
              <ProtectedRoute 
                element={<Layout><AdminDashboard /></Layout>} 
                allowedRoles={['admin']} 
              />
            } 
          />
          
          {/* Doctor routes */}
          <Route 
            path="/doctor/dashboard" 
            element={
              <ProtectedRoute 
                element={<Layout><DoctorDashboard /></Layout>} 
                allowedRoles={['doctor']} 
              />
            } 
          />
          
          {/* Reception routes */}
          <Route 
            path="/reception/dashboard" 
            element={
              <ProtectedRoute 
                element={<Layout><ReceptionDashboard /></Layout>} 
                allowedRoles={['receptionist']} 
              />
            } 
          />
          
          {/* Redirect from root to appropriate dashboard or login */}
          <Route path="/" element={<Navigate to="/login" replace />} />
          
          {/* Fallback route */}
          <Route path="*" element={<Navigate to="/login" replace />} />
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;
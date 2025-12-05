import { Routes, Route, BrowserRouter, Navigate } from "react-router-dom";
import MenuManagement from "./components/MenuManagement";
import LoginPage from "./components/LoginPage";

// Protected Route Component
function ProtectedRoute({ children }: { children: JSX.Element }) {
  const isAuthenticated = localStorage.getItem('isLoggedIn') === 'true';
  
  if (!isAuthenticated) {
    return <Navigate to="/" replace />;
  }
  
  return children;
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route 
          path="/menu" 
          element={
            <ProtectedRoute>
              <MenuManagement />
            </ProtectedRoute>
          } 
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

// Utility function to logout (add this to your MenuManagement component)
export const handleLogout = () => {
  localStorage.removeItem('isLoggedIn');
  localStorage.removeItem('username');
  window.location.href = '/';
};
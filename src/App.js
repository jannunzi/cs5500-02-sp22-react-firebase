import {AuthProvider} from "./contexts/auth-context";
import Home from "./screens/home";
import Profile from "./screens/profile";
import Signup from "./screens/signup";
import Login from "./screens/login";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Admin from "./screens/admin";
import ProtectedRoute from "./routes/ProtectedRoute";

function App() {
  return (
    <div>
      <BrowserRouter>
        <AuthProvider>
          <Routes>
            <Route path="/" element={<Login/>}/>
            <Route path="/signup" element={<Signup/>}/>
            <Route path="/home" element={
              <ProtectedRoute>
                <Home/>
              </ProtectedRoute>
            }/>
            <Route path="/profile" element={
              <ProtectedRoute>
                <Profile/>
              </ProtectedRoute>
            }/>
            <Route path="/admin" element={<Admin/>}/>
          </Routes>
        </AuthProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;

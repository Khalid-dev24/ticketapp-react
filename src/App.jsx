import { Routes, Route } from "react-router-dom";
import Landing from "./pages/Landing";
import Login from "./pages/auth/Login";
import Signup from "./pages/auth/Signup";
import MainLayout from "./layout/MainLayout";
import Dashboard from "./pages/Dashboard";
import Tickets from "./pages/Tickets";

function App() {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <MainLayout>
            <Landing />
          </MainLayout>
        }
      />
      <Route
        path="/login"
        element={
          <MainLayout>
            <Login />
          </MainLayout>
        }
      />
      <Route
        path="/signup"
        element={
          <MainLayout>
            <Signup />
          </MainLayout>
        }
      />
      <Route
        path="/dashboard"
        element={
            <MainLayout>
            <Dashboard />
            </MainLayout>
        }
        />
       <Route
        path="/tickets"
        element={
            <MainLayout>
            <Tickets />
            </MainLayout>
        }
        />

    </Routes>
  );
}

export default App;

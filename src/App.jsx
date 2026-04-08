import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import MainLayout from "./components/layout/MainLayout";

import Home from "./pages/Home";
import AddExpense from "./pages/AddExpense";
import Dashboard from "./pages/Dashboard";
import Account from "./pages/Account";
import Login from "./pages/Login";

import { useAuth } from "./context/AuthContext";

function App() {
  const { user } = useAuth();

  return (
    <BrowserRouter>
      <Routes>
        {/* Protected */}
        <Route
          path="/"
          element={user ? <MainLayout /> : <Navigate to="/login" />}
        >
          <Route index element={<Home />} />
          <Route path="add-expense" element={<AddExpense />} />
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="account" element={<Account />} />
        </Route>

        {/* Public */}
        <Route
          path="/login"
          element={!user ? <Login /> : <Navigate to="/" />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
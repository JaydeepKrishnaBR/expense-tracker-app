import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainLayout from "./components/layout/MainLayout";

import Home from "./pages/Home";
import AddExpense from "./pages/AddExpense";
import Dashboard from "./pages/Dashboard";
import Account from "./pages/Account";
import Login from "./pages/Login";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Layout Wrapper */}
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="add-expense" element={<AddExpense />} />
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="account" element={<Account />} />
        </Route>

        {/* Outside Layout */}
        <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
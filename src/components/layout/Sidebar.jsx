import { Box, List, ListItemButton, ListItemText } from "@mui/material";
import { useNavigate, useLocation } from "react-router-dom";

const Sidebar = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const menuItems = [
    { text: "Home", path: "/" },
    { text: "Add Expense", path: "/add-expense" },
    { text: "Dashboard", path: "/dashboard" },
    { text: "Account", path: "/account" },
  ];

  return (
    <Box
      sx={{
        width: 240,
        height: "100vh",
        backgroundColor: "#ffffff",
        borderRight: "1px solid #e4e4e4",
      }}
    >
      <List>
        {menuItems.map((item) => (
          <ListItemButton
            key={item.text}
            selected={location.pathname === item.path}
            onClick={() => navigate(item.path)}
          >
            <ListItemText primary={item.text} />
          </ListItemButton>
        ))}
      </List>
    </Box>
  );
};

export default Sidebar;
import { Box } from "@mui/material";
import Sidebar from "./Sidebar";

const MainLayout = ({ children }) => {
  return (
    <Box sx={{ display: "flex", height: "100vh" }}>
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <Box
        sx={{
          flexGrow: 1,
          p: 3,
          overflow: "auto",
          backgroundColor: "#545454",
        }}
      >
        {children}
      </Box>
    </Box>
  );
};

export default MainLayout;
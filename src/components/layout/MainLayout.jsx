import { Box } from "@mui/material";
import Sidebar from "./Sidebar";
import { Outlet } from "react-router-dom";

const MainLayout = () => {
  console.log("✅ MainLayout rendered");

  return (
    <Box sx={{ display: "flex", height: "100vh" }}>
      {/* Sidebar */}
      <Sidebar />

      {/* Content */}
      <Box
        sx={{
          flexGrow: 1,
          p: 3,
          backgroundColor: "#ffffff",
        }}
      >
        {console.log("📦 Rendering Outlet")}
        <Outlet />
      </Box>
    </Box>
  );
};

export default MainLayout;
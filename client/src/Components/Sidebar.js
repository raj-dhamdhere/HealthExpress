import { useState } from "react";
import { ProSidebar, Menu, MenuItem } from "react-pro-sidebar";
import { Box, IconButton, Typography, useTheme } from "@mui/material";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import "react-pro-sidebar/dist/css/styles.css";
import { tokens } from "./theme.js";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import PeopleOutlinedIcon from "@mui/icons-material/PeopleOutlined";
import ContactsOutlinedIcon from "@mui/icons-material/ContactsOutlined";
import ReceiptOutlinedIcon from "@mui/icons-material/ReceiptOutlined";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";

const Sidebar = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [selected, setSelected] = useState("Dashboard");
  const navigate = useNavigate(); // Initialize useNavigate

  // Function to handle navigation
  const handleNavigation = (path) => {
    setSelected(path);
    navigate(path); // Navigate to the specified path
  };

  return (
    <Box
      sx={{
        display: "flex",
        height: "100vh",
        width: "100%",
        "& .pro-sidebar-inner": {
          background: `${colors.primary[400]} !important`,
          height: "100%",
        },
        "& .pro-icon-wrapper": {
          backgroundColor: "transparent !important",
        },
        "& .pro-inner-item": {
          padding: "5px 35px 5px 20px !important",
        },
        "& .pro-inner-item:hover": {
          color: "#868dfb !important",
        },
        "& .pro-menu-item.active": {
          color: "#007bff !important", // Set active item color to blue
        },
      }}
    >
      <ProSidebar
        collapsed={isCollapsed}
        style={{ width: isCollapsed ? "80px" : "250px", height: "100%" }}
      >
        <Menu iconShape="square">
          {/* LOGO AND MENU ICON */}
          <MenuItem
            onClick={() => setIsCollapsed(!isCollapsed)}
            icon={isCollapsed ? <MenuOutlinedIcon /> : undefined}
            style={{
              margin: "10px 0 20px 0",
              color: colors.grey[100],
              cursor: "default", // Prevent cursor from blinking on MenuItem
            }}
          >
            {!isCollapsed && (
              <Box
                display="flex"
                justifyContent="space-between"
                alignItems="center"
                ml="15px"
              >
                {/* Wrap logo in a non-clickable Box or div */}
                <Box style={{ cursor: "default" }}>
                  <img
                    src="assets/img/logoj.png"
                    height="60px"
                    width="200px"
                    className="img-fluid"
                    alt=""
                    style={{ cursor: "default" }}
                  />
                </Box>
                <IconButton onClick={() => setIsCollapsed(!isCollapsed)}>
                  <MenuOutlinedIcon />
                </IconButton>
              </Box>
            )}
          </MenuItem>

          <Box paddingLeft={isCollapsed ? undefined : "5%"}>
            <MenuItem
              active={selected === "Dashboard"}
              style={{ color: colors.grey[100] }}
              onClick={() => handleNavigation("/dashboard")}
              icon={<HomeOutlinedIcon />}
            >
              <Typography>Dashboard</Typography>
            </MenuItem>
            <MenuItem
              active={selected === "DemographicDetails"}
              style={{ color: colors.grey[100] }}
              onClick={() => handleNavigation("/demographicDetails")}
              icon={<PeopleOutlinedIcon />}
            >
              <Typography>Demographic Details</Typography>
            </MenuItem>
            <MenuItem
              active={selected === "AppointmentLists"}
              style={{ color: colors.grey[100] }}
              onClick={() => handleNavigation("/appointmentscheduling")}
              icon={<ContactsOutlinedIcon />}
            >
              <Typography>Book an Appointment</Typography>
            </MenuItem>
            <MenuItem
              active={selected === "Summary"}
              style={{ color: colors.grey[100] }}
              onClick={() => handleNavigation("/summarydetails")}
              icon={<ReceiptOutlinedIcon />}
            >
              <Typography>Summary</Typography>
            </MenuItem>

            <Typography
              variant="h6"
              color={colors.grey[300]}
              sx={{ m: "15px 0 5px 20px" }}
            >
              {/* Section Title */}
            </Typography>
          </Box>
        </Menu>
      </ProSidebar>
    </Box>
  );
};

export default Sidebar;

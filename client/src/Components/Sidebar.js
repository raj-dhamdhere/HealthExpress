import { useState } from "react";
import { ProSidebar, Menu, MenuItem } from "react-pro-sidebar";
import { Box, Typography, useTheme } from "@mui/material";
import { useNavigate } from "react-router-dom";
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
  const [selected, setSelected] = useState("Dashboard");
  const navigate = useNavigate();

  // Function to handle navigation
  const handleNavigation = (path) => {
    setSelected(path);
    navigate(path);
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
          borderRight: "2px solid #ddd",
          boxShadow: "4px 0 8px rgba(0, 0, 0, 0.1)",
        },
        "& .pro-icon-wrapper": {
          backgroundColor: "transparent !important",
        },
        "& .pro-inner-item": {
          padding: "8px 35px 8px 20px !important",
          borderRadius: "4px",
          margin: "5px 10px",
          outline: "none !important", // Remove focus outline
        },
      }}
    >
      <ProSidebar
        collapsed={false}
        style={{
          width: false ? "80px" : "300px",
          height: "100%",
          transition: "width 0.3s",
        }}
      >
        <Menu iconShape="square">
          {/* LOGO AND MENU ICON */}
          <MenuItem
            icon={false ? <MenuOutlinedIcon /> : undefined}
            style={{
              margin: "10px 0 20px 0",
              color: colors.grey[100],
              cursor: "default",
              outline: "none",
              userSelect: "none", // Prevent text selection
              MozUserSelect: "none",
              WebkitUserSelect: "none",
            }}
          >
            {!false && (
              <Box
                display="flex"
                justifyContent="space-between"
                alignItems="center"
                ml="15px"
                style={{
                  cursor: "default",
                  outline: "none", // Remove focus outline
                  userSelect: "none", // Prevent text selection
                  MozUserSelect: "none",
                  WebkitUserSelect: "none",
                }}
                tabIndex={-1} // Make non-focusable
                onMouseDown={(e) => e.preventDefault()} // Prevent cursor appearance on click
              >
                <Box>
                  <img
                    src="assets/img/logoj.png"
                    height="60px"
                    width="200px"
                    className="img-fluid"
                    alt=""
                  />
                </Box>
              </Box>
            )}
          </MenuItem>

          <Box paddingLeft={false ? undefined : "5%"}>
            <MenuItem
              active={selected === "Dashboard"}
              style={{
                color: colors.grey[100],
                outline: "none", // Remove focus outline
                cursor: "default", // Prevent cursor from showing
                userSelect: "none", // Prevent text selection on click
              }}
              onClick={() => handleNavigation("/dashboard")}
              icon={<HomeOutlinedIcon />}
              tabIndex={-1} // Prevent focus
              onMouseDown={(e) => e.preventDefault()} // Prevent cursor appearance on click
            >
              <Typography>Dashboard</Typography>
            </MenuItem>

            <MenuItem
              active={selected === "DemographicDetails"}
              style={{
                color: colors.grey[100],
                outline: "none",
                cursor: "default",
                userSelect: "none",
              }}
              onClick={() => handleNavigation("/demographicDetails")}
              icon={<PeopleOutlinedIcon />}
              tabIndex={-1}
              onMouseDown={(e) => e.preventDefault()}
            >
              <Typography>Demographic Details</Typography>
            </MenuItem>

            <MenuItem
              active={selected === "AppointmentLists"}
              style={{
                color: colors.grey[100],
                outline: "none",
                cursor: "default",
                userSelect: "none",
              }}
              onClick={() => handleNavigation("/appointmentscheduling")}
              icon={<ContactsOutlinedIcon />}
              tabIndex={-1}
              onMouseDown={(e) => e.preventDefault()}
            >
              <Typography>Book an Appointment</Typography>
            </MenuItem>

            <MenuItem
              active={selected === "Summary"}
              style={{
                color: colors.grey[100],
                outline: "none",
                cursor: "default",
                userSelect: "none",
              }}
              onClick={() => handleNavigation("/summarydetails")}
              icon={<ReceiptOutlinedIcon />}
              tabIndex={-1}
              onMouseDown={(e) => e.preventDefault()}
            >
              <Typography>Summary</Typography>
            </MenuItem>
          </Box>
        </Menu>
      </ProSidebar>
    </Box>
  );
};

export default Sidebar;

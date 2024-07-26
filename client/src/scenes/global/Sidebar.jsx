import { useEffect, useState } from "react";
import { ProSidebar, Menu, MenuItem } from "react-pro-sidebar";
import { Box, IconButton, Typography, useTheme } from "@mui/material";
import { Link } from "react-router-dom";
import "react-pro-sidebar/dist/css/styles.css";
import { tokens } from "../../theme";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import PeopleOutlinedIcon from "@mui/icons-material/PeopleOutlined";
import ContactsOutlinedIcon from "@mui/icons-material/ContactsOutlined";
import ReceiptOutlinedIcon from "@mui/icons-material/ReceiptOutlined";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import CalendarTodayOutlinedIcon from "@mui/icons-material/CalendarTodayOutlined";
import HelpOutlineOutlinedIcon from "@mui/icons-material/HelpOutlineOutlined";
import BarChartOutlinedIcon from "@mui/icons-material/BarChartOutlined";
import PieChartOutlineOutlinedIcon from "@mui/icons-material/PieChartOutlineOutlined";
import TimelineOutlinedIcon from "@mui/icons-material/TimelineOutlined";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import MapOutlinedIcon from "@mui/icons-material/MapOutlined";
import StackedLineChartIcon from "@mui/icons-material/StackedLineChart";
import { useAuth0 } from "@auth0/auth0-react";

const Item = ({ title, to, icon, selected, setSelected }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  return (
    <MenuItem
      active={selected === title}
      style={{
        color: colors.grey[100],
      }}
      onClick={() => setSelected(title)}
      icon={icon}
    >
      <Typography>{title}</Typography>
      <Link to={to} />
    </MenuItem>
  );
};

const Sidebar = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [selected, setSelected] = useState("Dashboard");
  const [userInfo, setUserInfo] = useState(null);

  const { user } = useAuth0();

  useEffect(() => {
    const useInfo = JSON.stringify(user);
    if (useInfo) {
      setUserInfo(JSON.parse(useInfo));
    }
  }, [user]);

  return (
    <Box
      sx={{
        position: "relative",
        height: "100%",
        overflow: "hidden",
        "& .pro-sidebar-inner": {
          background: `${colors.primary[400]} !important`,
          overflowY: "auto",
          scrollbarWidth: "none",
        },
        "& .pro-icon-wrapper": {
          backgroundColor: "transparent !important",
        },
        "& .pro-sidebar-inner::-webkit-scrollbar": {
          display: "none",
        },
        "& .pro-sidebar-layout::-webkit-scrollbar": {
          display: "none",
        },
        "& .pro-inner-item": {
          padding: "5px 35px 5px 20px !important",
        },
        "& .pro-inner-item:hover": {
          color: "#0070C0 !important",
        },
        "& .pro-menu-item.active": {
          color: "#0070C0 !important",
        },
      }}
    >
      <ProSidebar collapsed={isCollapsed}>
        <Menu iconShape="square">
          {/* LOGO AND MENU ICON */}
          <MenuItem
            onClick={() => setIsCollapsed(!isCollapsed)}
            icon={isCollapsed ? <MenuOutlinedIcon /> : undefined}
            style={{
              color: colors.grey[100],
            }}
          >
            {!isCollapsed && (
              <Box display="flex" justifyContent="center" alignItems="center">
                <img
                  alt="company-logo"
                  width="80px"
                  height="40px"
                  src="/company_logo.png"
                />
              </Box>
            )}
          </MenuItem>

          {!isCollapsed && (
            <Box mb="25px" mt="10px">
              <Box display="flex" justifyContent="center" alignItems="center">
                <img
                  loading="lazy"
                  alt="profile-user"
                  width="100px"
                  height="100px"
                  src={userInfo ? userInfo.picture : "/admin-min.png"}
                  style={{
                    cursor: "pointer",
                    borderRadius: "50%",
                    objectFit: "contain",
                  }}
                />
              </Box>
              <Box textAlign="center" alignItems="center">
                <Typography
                  variant="h4"
                  color={colors.grey[100]}
                  fontWeight="bold"
                  sx={{ m: "10px 0 0 0" }}
                >
                  {userInfo ? userInfo.name : "Federico Palma"}
                </Typography>
                <Typography variant="h5" color={colors.lightBlueAccent[500]}>
                  IT Manager
                </Typography>
              </Box>
            </Box>
          )}

          <Box paddingLeft={isCollapsed ? undefined : "10%"}>
            <Item
              title="Dashboard"
              to="/"
              icon={<HomeOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />

            <Typography
              variant="h6"
              color={colors.grey[300]}
              sx={{ m: "15px 0 5px 20px" }}
            >
              Data
            </Typography>
            <Item
              title="Manage Team"
              to="/team"
              icon={<PeopleOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="Contacts Information"
              to="/contacts"
              icon={<ContactsOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="Invoices Balances"
              to="/invoices"
              icon={<ReceiptOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />

            <Typography
              variant="h6"
              color={colors.grey[300]}
              sx={{ m: "15px 0 5px 20px" }}
            >
              Pages
            </Typography>
            <Item
              title="Profile Form"
              to="/form"
              icon={<PersonOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="Calendar"
              to="/calendar"
              icon={<CalendarTodayOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="FAQ Page"
              to="/faq"
              icon={<HelpOutlineOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />

            <Typography
              variant="h6"
              color={colors.grey[300]}
              sx={{ m: "15px 0 5px 20px" }}
            >
              Charts
            </Typography>
            <Item
              title="Bar Chart"
              to="/bar"
              icon={<BarChartOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="Pie Chart"
              to="/pie"
              icon={<PieChartOutlineOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="Line Chart"
              to="/line"
              icon={<TimelineOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="Geography Chart"
              to="/geography"
              icon={<MapOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="Area Bump"
              to="/areabump"
              icon={<StackedLineChartIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="Box Plot"
              to="/boxplot"
              icon={<StackedLineChartIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="Circle Packing"
              to="/circle-packing"
              icon={<StackedLineChartIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="Bullet"
              to="/bullet"
              icon={<StackedLineChartIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="Chord"
              to="/chord"
              icon={<StackedLineChartIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="Funnel"
              to="/funnel"
              icon={<StackedLineChartIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="Heat Map"
              to="/heatmap"
              icon={<StackedLineChartIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="Radial Bar"
              to="/radialBar"
              icon={<StackedLineChartIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="Time Range"
              to="/timeRange"
              icon={<StackedLineChartIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="Network"
              to="/network"
              icon={<StackedLineChartIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="Bump"
              to="/bump"
              icon={<StackedLineChartIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="Marimekko"
              to="/marimekko"
              icon={<StackedLineChartIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="Parallel Coordinates"
              to="/parallelCoordinates"
              icon={<StackedLineChartIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="Radar"
              to="/radar"
              icon={<StackedLineChartIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="Sankey"
              to="/sankey"
              icon={<StackedLineChartIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="Scatter Plot"
              to="/scatterPlot"
              icon={<StackedLineChartIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="Stream"
              to="/stream"
              icon={<StackedLineChartIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="Sunburst"
              to="/sunburst"
              icon={<StackedLineChartIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="Swarmplot"
              to="/swarmplot"
              icon={<StackedLineChartIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="Waffle"
              to="/waffle"
              icon={<StackedLineChartIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="Tree"
              to="/tree"
              icon={<StackedLineChartIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="Tree Map"
              to="/treemap"
              icon={<StackedLineChartIcon />}
              selected={selected}
              setSelected={setSelected}
            />
          </Box>
        </Menu>
      </ProSidebar>
    </Box>
  );
};

export default Sidebar;

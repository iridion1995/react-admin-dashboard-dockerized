import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Topbar from "./scenes/global/Topbar";
import Sidebar from "./scenes/global/Sidebar";
import Dashboard from "./scenes/dashboard";
import Team from "./scenes/team";
import Invoices from "./scenes/invoices";
import Contacts from "./scenes/contacts";
import Bar from "./scenes/bar";
import Form from "./scenes/form";
import Line from "./scenes/line";
import Pie from "./scenes/pie";
import FAQ from "./scenes/faq";
import Geography from "./scenes/geography";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { ColorModeContext, useMode } from "./theme";
import Calendar from "./scenes/calendar";
import AreaBump from "./scenes/areaBump";
import BoxPlot from "./scenes/boxPlot";
import CirclePacking from "./scenes/circlePacking";
import Bullet from "./scenes/bulletChart";
import Chord from "./scenes/chordChart";
import Funnel from "./scenes/funnel";
import HeatMap from "./scenes/heatMap";
import RadialBar from "./scenes/radialBar";
import TimeRange from "./scenes/timeRange";
import Network from "./scenes/network";
import Bump from "./scenes/bump";
import Marimekko from "./scenes/marimekko";
import ParallelCoordinates from "./scenes/parallelCoordinates";
import Radar from "./scenes/radar";
import Sankey from "./scenes/sankey";
import ScatterPlot from "./scenes/scatterPlot";
import Stream from "./scenes/stream";
import Sunburst from "./scenes/sunBurst";
import Swarmplot from "./scenes/swarmplot";
import Waffle from "./scenes/waffle";
import Tree from "./scenes/tree";
import TreeMap from "./scenes/treeMap";


function App() {
  const [theme, colorMode] = useMode();
  const [isSidebar, setIsSidebar] = useState(true);

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div className="app">
          <Sidebar isSidebar={isSidebar} />
          <main className="content">
            <Topbar setIsSidebar={setIsSidebar} />
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/team" element={<Team />} />
              <Route path="/contacts" element={<Contacts />} />
              <Route path="/invoices" element={<Invoices />} />
              <Route path="/form" element={<Form />} />
              <Route path="/bar" element={<Bar />} />
              <Route path="/pie" element={<Pie />} />
              <Route path="/line" element={<Line />} />
              <Route path="/faq" element={<FAQ />} />
              <Route path="/geography" element={<Geography />} />
              <Route path="/calendar" element={<Calendar />} />
              <Route path="/areabump" element={<AreaBump />} />
              <Route path="/boxplot" element={<BoxPlot />} />
              <Route path="/circle-packing" element={<CirclePacking />} />
              <Route path="/bullet" element={<Bullet />} />
              <Route path="/chord" element={<Chord />} />
              <Route path="/funnel" element={<Funnel />} />
              <Route path="/heatmap" element={<HeatMap />} />
              <Route path="/radialBar" element={<RadialBar />} />
              <Route path="/timeRange" element={<TimeRange />} />
              <Route path="/network" element={<Network />} />
              <Route path="/bump" element={<Bump />} />
              <Route path="/marimekko" element={<Marimekko />} />
              <Route path="/parallelCoordinates" element={<ParallelCoordinates />} />
              <Route path="/radar" element={<Radar />} />
              <Route path="/sankey" element={<Sankey />} />
              <Route path="/scatterPlot" element={<ScatterPlot />} />
              <Route path="/stream" element={<Stream />} />
              <Route path="/sunburst" element={<Sunburst />} />
              <Route path="/swarmplot" element={<Swarmplot />} />
              <Route path="/waffle" element={<Waffle />} />
              <Route path="/tree" element={<Tree />} />
              <Route path="/treemap" element={<TreeMap />} />
            </Routes>
          </main>
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;

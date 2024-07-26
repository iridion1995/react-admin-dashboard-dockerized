import { Box, useTheme } from "@mui/material";
import { areaBumpData as data } from "../../data/mockData";
import Header from "../../components/Header";
import { ResponsiveAreaBump } from "@nivo/bump";
import { tokens } from "../../theme";

const AreaBump = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <Box m="20px">
      <Header title="Area Bump Chart" subtitle="Simple Area Bump Chart" />
      <Box height="75vh">
        <ResponsiveAreaBump
          data={data}
          margin={{ top: 40, right: 100, bottom: 40, left: 100 }}
          spacing={8}
          blendMode={theme.palette.mode === 'dark' ? "lighten" : "darken"}
          defs={[
            {
              id: 'dots',
              type: 'patternDots',
              background: 'inherit',
              color: colors.lightBlueAccent[500],
              size: 4,
              padding: 1,
              stagger: true,
            },
            {
              id: 'lines',
              type: 'patternLines',
              background: 'inherit',
              color: colors.redAccent[500],
              rotation: -45,
              lineWidth: 6,
              spacing: 10,
            },
          ]}
          fill={[
            {
              match: {
                id: 'CoffeeScript',
              },
              id: 'dots',
            },
            {
              match: {
                id: 'TypeScript',
              },
              id: 'lines',
            },
          ]}
          startLabel="id"
          endLabel="id"
          axisTop={{
            tickSize: 5,
            tickPadding: 5,
            tickRotation: 0,
            legend: '',
            legendPosition: 'middle',
            legendOffset: -36,
            tickTextColor: colors.grey[100],
          }}
          axisBottom={{
            tickSize: 5,
            tickPadding: 5,
            tickRotation: 0,
            legend: '',
            legendPosition: 'middle',
            legendOffset: 32,
            tickTextColor: colors.grey[100],
          }}
          theme={{
            textColor: colors.grey[100],
            backgroundColor: "white",
            axis: {
              domain: {
                line: {
                  stroke: "white",
                },
              },
              legend: {
                text: {
                  fill: colors.grey[100],
                },
              },
              ticks: {
                line: {
                  stroke: colors.grey[100],
                  strokeWidth: 1,
                },
                text: {
                  fill: colors.grey[100],
                },
              },
            },
            grid: {
              line: {
                stroke: colors.grey[100],
                strokeWidth: 1,
              },
            },
            tooltip: {
                container: {
                  color: colors.primary[500],
                },
              },
          }}
        />
      </Box>
    </Box>
  );
};

export default AreaBump;

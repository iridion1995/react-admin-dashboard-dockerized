import { Box, useTheme } from "@mui/material";
import { circlePackingData as data } from "../../data/mockData";
import Header from "../../components/Header";
import { ResponsiveCirclePacking } from '@nivo/circle-packing'
import { tokens } from "../../theme";

const CirclePacking = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <Box m="20px">
      <Header title="Circle Packing Chart" subtitle="Simple Circle Packing Chart" />
      <Box height="75vh">
      <ResponsiveCirclePacking
        data={data}
        margin={{ top: 20, right: 20, bottom: 20, left: 20 }}
        id="name"
        value="loc"
        colors={{ scheme: 'nivo' }}
        childColor={{
            from: 'color',
            modifiers: [
                [
                    'brighter',
                    0.4
                ]
            ]
        }}
        padding={4}
        enableLabels={true}
        labelsFilter={n=>2===n.node.depth}
        labelsSkipRadius={10}
        labelTextColor={{
            from: 'color',
            modifiers: [
                [
                    'darker',
                    2
                ]
            ]
        }}
        borderWidth={1}
        borderColor={{
            from: 'color',
            modifiers: [
                [
                    'darker',
                    0.5
                ]
            ]
        }}
        defs={[
            {
                id: 'lines',
                type: 'patternLines',
                background: 'none',
                color: 'inherit',
                rotation: -45,
                lineWidth: 5,
                spacing: 8
            }
        ]}
        fill={[
            {
                match: {
                    depth: 1
                },
                id: 'lines'
            }
        ]}
        theme={{
          textColor: colors.grey[100],
          backgroundColor: colors.grey[100],
          axis: {
            domain: {
              line: {
                stroke: colors.grey[100],
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

export default CirclePacking;

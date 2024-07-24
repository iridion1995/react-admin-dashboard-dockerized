import { Box, useTheme } from "@mui/material";
import Header from "../../components/Header";
import { ResponsiveFunnel } from '@nivo/funnel'
import { tokens } from "../../theme";
import { funnelMockData as data } from "../../data/mockData.js";


const Funnel = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);;

  return (
    <Box m="20px">
      <Header title="Funnel chart" subtitle="Simple funnel" />
      <Box height="75vh">
      <ResponsiveFunnel
        data={data}
        margin={{ top: 20, right: 20, bottom: 20, left: 20 }}
        valueFormat=">-.4s"
        colors={{ scheme: 'spectral' }}
        borderWidth={20}
        labelColor={{
            from: 'color',
            modifiers: [
                [
                    'darker',
                    3
                ]
            ]
        }}
        beforeSeparatorLength={100}
        beforeSeparatorOffset={20}
        afterSeparatorLength={100}
        afterSeparatorOffset={20}
        currentPartSizeExtension={10}
        currentBorderWidth={40}
        motionConfig="wobbly"
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

export default Funnel;

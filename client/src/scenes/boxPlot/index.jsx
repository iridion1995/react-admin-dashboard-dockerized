import { Box, useTheme } from "@mui/material";
import { boxPlotData as data } from "../../data/mockData";
import Header from "../../components/Header";
import { ResponsiveBoxPlot } from '@nivo/boxplot'
import { tokens } from "../../theme";

const BoxPlot = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <Box m="20px">
      <Header title="Box Plot Chart" subtitle="Simple Box Plot Chart" />
      <Box height="75vh">
      <ResponsiveBoxPlot
        data={data}
        margin={{ top: 60, right: 140, bottom: 60, left: 60 }}
        minValue={0}
        maxValue={10}
        subGroupBy="subgroup"
        padding={0.12}
        enableGridX={true}
        axisTop={{
            tickSize: 5,
            tickPadding: 5,
            tickRotation: 0,
            legend: '',
            legendOffset: 36,
            truncateTickAt: 0
        }}
        axisRight={{
            tickSize: 5,
            tickPadding: 5,
            tickRotation: 0,
            legend: '',
            legendOffset: 0,
            truncateTickAt: 0
        }}
        axisBottom={{
            tickSize: 5,
            tickPadding: 5,
            tickRotation: 0,
            legend: 'group',
            legendPosition: 'middle',
            legendOffset: 32,
            truncateTickAt: 0
        }}
        axisLeft={{
            tickSize: 5,
            tickPadding: 5,
            tickRotation: 0,
            legend: 'value',
            legendPosition: 'middle',
            legendOffset: -40,
            truncateTickAt: 0,

        }}
        colors={{ scheme: 'nivo' }}
        borderRadius={2}
        borderWidth={2}
        borderColor={{
            from: 'color',
            modifiers: [
                [
                    'darker',
                    0.3
                ]
            ]
        }}
        medianWidth={2}
        medianColor={{
            from: 'color',
            modifiers: [
                [
                    'darker',
                    0.3
                ]
            ]
        }}
        whiskerEndSize={0.6}
        whiskerColor={{
            from: 'color',
            modifiers: [
                [
                    'darker',
                    0.3
                ]
            ]
        }}
        motionConfig="stiff"
        legends={[
            {
                anchor: 'right',
                direction: 'column',
                justify: false,
                translateX: 100,
                translateY: 0,
                itemWidth: 60,
                itemHeight: 20,
                itemsSpacing: 3,
                itemTextColor: colors.grey[100],
                itemDirection: 'left-to-right',
                symbolSize: 20,
                symbolShape: 'square',
                effects: [
                    {
                        on: 'hover',
                        style: {
                            itemTextColor: '#000'
                        }
                    }
                ]
            }
        ]}
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

export default BoxPlot;

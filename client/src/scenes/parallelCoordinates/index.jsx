import { ResponsiveParallelCoordinates } from '@nivo/parallel-coordinates'
import { useTheme } from "@mui/material";
import { tokens } from "../../theme";
import {parallelCoordinatesMockData as data } from "../../data/mockData.js"

const ParallelCoordinates = () => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
  return (
    <ResponsiveParallelCoordinates
        data={data}
        variables={[
            {
                id: 'temp',
                label: 'temperature',
                value: 'temp',
                min: 'auto',
                max: 'auto',
                ticksPosition: 'before',
                legendPosition: 'start',
                legendOffset: 20
            },
            {
                id: 'cost',
                value: 'cost',
                min: 0,
                max: 'auto',
                ticksPosition: 'before',
                legendPosition: 'start',
                legendOffset: 20
            },
            {
                id: 'weight',
                value: 'weight',
                min: 'auto',
                max: 'auto',
                legendPosition: 'start',
                legendOffset: -20
            },
            {
                id: 'volume',
                value: 'volume',
                min: 0,
                max: 'auto',
                legendPosition: 'start',
                legendOffset: -20
            }
        ]}
        margin={{ top: 50, right: 120, bottom: 50, left: 60 }}
        lineWidth={3}
        legends={[
            {
                anchor: 'right',
                direction: 'column',
                justify: false,
                translateX: 100,
                translateY: 0,
                itemsSpacing: 2,
                itemWidth: 60,
                itemHeight: 20,
                itemDirection: 'left-to-right',
                itemOpacity: 0.85,
                symbolSize: 20,
                effects: [
                    {
                        on: 'hover',
                        style: {
                            itemOpacity: 1
                        }
                    }
                ]
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
  )
}

export default ParallelCoordinates;
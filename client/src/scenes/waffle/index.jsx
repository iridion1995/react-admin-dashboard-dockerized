import { ResponsiveWaffle } from '@nivo/waffle';
import { waffleMockData as data } from "../../data/mockData.js";
import { useTheme } from "@mui/material";
import { tokens } from "../../theme";

const Waffle = () => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);

  return (
    <ResponsiveWaffle
        data={data}
        total={100}
        rows={18}
        columns={14}
        padding={1}
        valueFormat=".2f"
        margin={{ top: 10, right: 10, bottom: 10, left: 120 }}
        colors={{ scheme: 'nivo' }}
        borderRadius={3}
        borderColor={{
            from: 'color',
            modifiers: [
                [
                    'darker',
                    0.3
                ]
            ]
        }}
        motionStagger={2}
        legends={[
            {
                anchor: 'top-left',
                direction: 'column',
                justify: false,
                translateX: -100,
                translateY: 0,
                itemsSpacing: 4,
                itemWidth: 100,
                itemHeight: 20,
                itemDirection: 'left-to-right',
                itemOpacity: 1,
                itemTextColor: '#777',
                symbolSize: 20,
                effects: [
                    {
                        on: 'hover',
                        style: {
                            itemTextColor: '#000',
                            itemBackground: '#f7fafb'
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

export default Waffle
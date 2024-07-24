import { ResponsiveScatterPlot } from '@nivo/scatterplot'
import { scatterPlotMockData as data } from "../../data/mockData.js";
import { useTheme } from "@mui/material";
import { tokens } from "../../theme";

const ScatterPlot = () => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);

    return (
        <ResponsiveScatterPlot
            data={data}
            margin={{ top: 60, right: 140, bottom: 70, left: 90 }}
            blendMode={theme.palette.mode === 'dark' ? "lighten" : "darken"}
            xScale={{ type: 'linear', min: 0, max: 'auto' }}
            xFormat=">-.2f"
            yScale={{ type: 'linear', min: 0, max: 'auto' }}
            yFormat=">-.2f"
            axisTop={null}
            axisRight={null}
            axisBottom={{
                orient: 'bottom',
                tickSize: 5,
                tickPadding: 5,
                tickRotation: 0,
                legend: 'weight',
                legendPosition: 'middle',
                legendOffset: 46,
                truncateTickAt: 0
            }}
            axisLeft={{
                orient: 'left',
                tickSize: 5,
                tickPadding: 5,
                tickRotation: 0,
                legend: 'size',
                legendPosition: 'middle',
                legendOffset: -60,
                truncateTickAt: 0
            }}
            legends={[
                {
                    anchor: 'bottom-right',
                    direction: 'column',
                    justify: false,
                    translateX: 130,
                    translateY: 0,
                    itemWidth: 100,
                    itemHeight: 12,
                    itemsSpacing: 5,
                    itemDirection: 'left-to-right',
                    symbolSize: 12,
                    symbolShape: 'circle',
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
export default ScatterPlot;
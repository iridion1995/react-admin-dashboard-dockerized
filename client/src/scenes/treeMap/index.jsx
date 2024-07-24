import { ResponsiveTreeMap } from '@nivo/treemap'
import { useTheme } from "@mui/material";
import { tokens } from "../../theme";
import {treeMapMockData as data } from "../../data/mockData.js"



const TreeMap = () => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);

    return (
        <ResponsiveTreeMap
        data={data}
        identity="name"
        value="loc"
        valueFormat=".02s"
        margin={{ top: 10, right: 10, bottom: 10, left: 10 }}
        labelSkipSize={12}
        labelTextColor={{
            from: 'color',
            modifiers: [
                [
                    'darker',
                    1.2
                ]
            ]
        }}
        parentLabelPosition="left"
        parentLabelTextColor={{
            from: 'color',
            modifiers: [
                [
                    'darker',
                    2
                ]
            ]
        }}
        borderColor={{
            from: 'color',
            modifiers: [
                [
                    'darker',
                    0.1
                ]
            ]
        }}
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
export default TreeMap;
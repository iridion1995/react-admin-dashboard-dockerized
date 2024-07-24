import { ResponsiveTree } from '@nivo/tree'
import { useTheme } from "@mui/material";
import { tokens } from "../../theme";
import {treeMockData as data } from "../../data/mockData.js"


const Tree = () => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);

    return (
        <ResponsiveTree
        data={data}
        identity="name"
        activeNodeSize={24}
        inactiveNodeSize={12}
        nodeColor={{ scheme: 'tableau10' }}
        fixNodeColorAtDepth={1}
        linkThickness={2}
        activeLinkThickness={8}
        inactiveLinkThickness={2}
        linkColor={{
            from: 'target.color',
            modifiers: [
                [
                    'opacity',
                    0.4
                ]
            ]
        }}
        margin={{ top: 90, right: 90, bottom: 90, left: 90 }}
        motionConfig="stiff"
        meshDetectionRadius={80}
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

export default Tree;
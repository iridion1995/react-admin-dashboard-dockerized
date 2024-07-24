import { ResponsiveMarimekko } from '@nivo/marimekko'
import { useTheme } from "@mui/material";
import { tokens } from "../../theme";
import { marimekkoMockData as data } from "../../data/mockData.js";


const Marimekko = () => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);

  return (
    <ResponsiveMarimekko
    data={data}
    id="statement"
    value="participation"
    dimensions={[
        {
            id: 'disagree strongly',
            value: 'stronglyDisagree'
        },
        {
            id: 'disagree',
            value: 'disagree'
        },
        {
            id: 'agree',
            value: 'agree'
        },
        {
            id: 'agree strongly',
            value: 'stronglyAgree'
        }
    ]}
    innerPadding={9}
    axisTop={null}
    axisRight={{
        orient: 'right',
        tickSize: 5,
        tickPadding: 5,
        tickRotation: 0,
        legend: '',
        legendOffset: 0,
        truncateTickAt: 0
    }}
    axisBottom={{
        orient: 'bottom',
        tickSize: 5,
        tickPadding: 5,
        tickRotation: 0,
        legend: 'participation',
        legendOffset: 36,
        legendPosition: 'middle',
        truncateTickAt: 0
    }}
    axisLeft={{
        orient: 'left',
        tickSize: 5,
        tickPadding: 5,
        tickRotation: 0,
        legend: 'opinions',
        legendOffset: -40,
        legendPosition: 'middle',
        truncateTickAt: 0
    }}
    margin={{ top: 40, right: 80, bottom: 100, left: 80 }}
    colors={{ scheme: 'spectral' }}
    borderWidth={1}
    borderColor={{
        from: 'color',
        modifiers: [
            [
                'darker',
                0.2
            ]
        ]
    }}
    defs={[
        {
            id: 'lines',
            type: 'patternLines',
            background: 'rgba(0, 0, 0, 0)',
            color: 'inherit',
            rotation: -45,
            lineWidth: 4,
            spacing: 8
        }
    ]}
    fill={[
        {
            match: {
                id: 'agree strongly'
            },
            id: 'lines'
        },
        {
            match: {
                id: 'disagree strongly'
            },
            id: 'lines'
        }
    ]}
    legends={[
        {
            anchor: 'bottom',
            direction: 'row',
            justify: false,
            translateX: 0,
            translateY: 80,
            itemsSpacing: 0,
            itemWidth: 140,
            itemHeight: 18,
            itemTextColor: '#999',
            itemDirection: 'right-to-left',
            itemOpacity: 1,
            symbolSize: 18,
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

export default Marimekko;
import { Box, useTheme } from "@mui/material";
import { bulletData as data } from "../../data/mockData";
import Header from "../../components/Header";
import { ResponsiveBullet } from '@nivo/bullet'
import { tokens } from "../../theme";

const Bullet = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <Box m="20px">
      <Header title="Bullet Chart" subtitle="Simple Bullet Chart" />
      <Box height="75vh">
      <ResponsiveBullet
        data={data}
        margin={{ top: 50, right: 90, bottom: 50, left: 90 }}
        spacing={46}
        titleAlign="start"
        titleOffsetX={-70}
        measureSize={0.2}
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

export default Bullet;

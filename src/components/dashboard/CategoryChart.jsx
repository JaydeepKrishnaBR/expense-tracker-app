import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import { Box, Typography } from "@mui/material";

const COLORS = ["#8884d8", "#82ca9d", "#ffc658", "#ff8042", "#00c49f"];

const CategoryChart = ({ data }) => {
  // Convert object → array
  const chartData = Object.entries(data || {}).map(
    ([key, value]) => ({
      name: key,
      value,
    })
  );

  return (
    <Box sx={{ width: "100%", height: 300 }}>
      <Typography variant="h6" mb={2}>
        Category Breakdown
      </Typography>

      <ResponsiveContainer>
        <PieChart>
          <Pie
            data={chartData}
            dataKey="value"
            nameKey="name"
            outerRadius={100}
            label
          >
            {chartData.map((entry, index) => (
              <Cell
                key={`cell-${index}`}
                fill={COLORS[index % COLORS.length]}
              />
            ))}
          </Pie>

          <Tooltip />
          <Legend />
        </PieChart>
      </ResponsiveContainer>
    </Box>
  );
};

export default CategoryChart;
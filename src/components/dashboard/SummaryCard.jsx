import { Card, CardContent, Typography } from "@mui/material";

const SummaryCard = ({ title, value }) => {
  return (
    <Card sx={{ minWidth: 200, flex: 1 }}>
      <CardContent>
        <Typography variant="subtitle2" color="text.secondary">
          {title}
        </Typography>

        <Typography variant="h5" sx={{ mt: 1 }}>
          ₹{value}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default SummaryCard;
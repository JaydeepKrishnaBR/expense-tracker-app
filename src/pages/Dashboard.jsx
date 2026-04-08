import { useEffect, useState } from "react";
import { Box, Typography } from "@mui/material";
import { useAuth } from "../context/AuthContext";
import { db } from "../services/firebase";
import { doc, getDoc } from "firebase/firestore";
import CategoryChart from "../components/dashboard/CategoryChart";

import SummaryCard from "../components/dashboard/SummaryCard";

const Dashboard = () => {
  const { user } = useAuth();
  const [summary, setSummary] = useState(null);

  useEffect(() => {
    const loadSummary = async () => {
      if (!user) return;

      const monthId = new Date().toISOString().slice(0, 7);

      const ref = doc(
        db,
        "users",
        user.uid,
        "monthlySummary",
        monthId
      );

      const snap = await getDoc(ref);

      if (snap.exists()) {
        console.log("📊 Dashboard summary:", snap.data());
        setSummary(snap.data());
      }
    };

    loadSummary();
  }, [user]);

  return (
    <>
    <Box>
      <Typography variant="h5" mb={3}>
        Dashboard
      </Typography>

      {summary ? (
        <Box display="flex" gap={2} flexWrap="wrap">
          <SummaryCard
            title="Total Expenses"
            value={summary.totalExpenses}
          />

          <SummaryCard
            title="Total Savings"
            value={summary.totalSavings}
          />

          <SummaryCard
            title="Income"
            value={summary.totalIncome}
          />

          <SummaryCard
            title="Planned Expenses"
            value={summary.plannedCount}
          />

          <SummaryCard
            title="Impulse Count"
            value={summary.impulseCount}
          />
        </Box>
      ) : (
        <Typography>No data available</Typography>
      )}
    </Box>
      <Box mt={5}>
  <CategoryChart data={summary.categoryBreakdown} />
</Box>

    </>
  );
};

export default Dashboard;
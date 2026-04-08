import { db } from "./firebase";
import { doc, setDoc, getDoc, Timestamp } from "firebase/firestore";

export const updateMonthlySummary = async (userId, expenseData) => {
  try {
    console.log("📊 Summary input:", expenseData);

    const date = new Date();
    const monthId = date.toISOString().slice(0, 7);

    console.log("📅 Month ID:", monthId);

    const summaryRef = doc(
      db,
      "users",
      userId,
      "monthlySummary",
      monthId
    );

    const snapshot = await getDoc(summaryRef);

    let summary = {
      totalExpenses: 0,
      totalIncome: 0,
      totalSavings: 0,
      plannedCount: 0,
      impulseCount: 0,
      emergencyCount: 0,
      categoryBreakdown: {},
    };

    if (snapshot.exists()) {
      summary = snapshot.data();
      console.log("📂 Existing summary:", summary);
    }

    // 🔥 CRITICAL CHECK
    if (!expenseData.amount) {
      console.error("❌ amount is missing!");
      return;
    }

    summary.totalExpenses += expenseData.amount;

    const category = expenseData.category;
    summary.categoryBreakdown[category] =
      (summary.categoryBreakdown[category] || 0) +
      expenseData.amount;

    if (expenseData.expenseType === "Planned") {
      summary.plannedCount += 1;
    } else if (expenseData.expenseType === "Impulse") {
      summary.impulseCount += 1;
    } else {
      summary.emergencyCount += 1;
    }

    summary.totalSavings =
      summary.totalIncome - summary.totalExpenses;

    summary.lastUpdated = Timestamp.now();

    await setDoc(summaryRef, summary);

    console.log("✅ Summary saved");
  } catch (err) {
    console.error("❌ Summary error:", err);
  }
};
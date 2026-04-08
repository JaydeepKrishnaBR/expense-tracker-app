import { db } from "./firebase";
import { collection, addDoc, Timestamp } from "firebase/firestore";
import { updateMonthlySummary } from "./summaryService";

export const addExpense = async (userId, expenseData) => {
  try {
    console.log("🟡 Adding expense:", expenseData);

    const ref = collection(db, "users", userId, "expenses");

    const docRef = await addDoc(ref, {
      ...expenseData,
      createdAt: Timestamp.now(),
    });

    console.log("✅ Expense added with ID:", docRef.id);

    // 🔥 VERY IMPORTANT DEBUG
    console.log("🟡 Updating summary...");

    await updateMonthlySummary(userId, expenseData);

    console.log("📊 Summary updated successfully");
  } catch (err) {
    console.error("❌ Error in addExpense:", err);
  }
};
import { useEffect, useState } from "react";
import { useAuth } from "../context/AuthContext";
import { db } from "../services/firebase";
import { doc, getDoc } from "firebase/firestore";

const Home = () => {
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
        setSummary(snap.data());
      }
    };

    loadSummary();
  }, [user]);

  return (
    <div>
      <h2>Home</h2>

      {summary ? (
        <>
          <p>Total Expenses: ₹{summary.totalExpenses}</p>
          <p>Total Savings: ₹{summary.totalSavings}</p>
          <p>Impulse Count: {summary.impulseCount}</p>
        </>
      ) : (
        <p>No data yet</p>
      )}
    </div>
  );
};

export default Home;
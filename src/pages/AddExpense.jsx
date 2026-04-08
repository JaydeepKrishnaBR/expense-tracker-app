import { useAuth } from "../context/AuthContext";
import { addExpense } from "../services/expenseService";

const AddExpense = () => {
  const { user } = useAuth();

  const handleAdd = async () => {
    const expense = {
      amount: 200,
      category: "Food",
      subCategory: "Cafe",
      expenseType: "Impulse",
    };

    await addExpense(user.uid, expense);
  };

  return (
    <div>
      <h2>Add Expense</h2>
      <button onClick={handleAdd}>Add Test Expense</button>
    </div>
  );
};

export default AddExpense;
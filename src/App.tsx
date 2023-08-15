import { useState } from "react";
import "./App.css";
import ExpenseList from "./expense-tracker/components";
import ExpenseFilter from "./expense-tracker/components/ExpenseFilter";
import ExpenseForm from "./expense-tracker/components/ExpenseForm";

function App() {
  const [selectedCategory, setSelectedCategory] = useState("");
  const [expenses, setExpenses] = useState([
    { id: 1, description: "expense 1", amount: 10.59, category: "Utilities" },
    { id: 2, description: "expense 2", amount: 10.59, category: "Utilities" },
    { id: 3, description: "expense 3", amount: 10.59, category: "Utilities" },
    { id: 4, description: "expense 4", amount: 10.59, category: "Utilities" },
  ]);

  const visibleExpenses = selectedCategory
    ? expenses.filter((expense) => expense.category === selectedCategory)
    : expenses;

  return (
    <>
      <div className="m-3">
        <ExpenseForm
          onSubmit={(data) =>
            setExpenses([...expenses, { ...data, id: expenses.length + 1 }])
          }
        />
      </div>
      <div className="m-3">
        <ExpenseFilter
          onSelectCategory={(category) => setSelectedCategory(category)}
        />
      </div>
      <div className="m-3">
        <ExpenseList
          expenses={visibleExpenses}
          onDelete={(id) =>
            setExpenses(expenses.filter((expense) => expense.id !== id))
          }
        />
      </div>
    </>
  );
}

export default App;

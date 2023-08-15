import categories from "../../categories";
interface IExpenseFilterProps {
  onSelectCategory: (category: string) => void;
}

function ExpenseFilter({ onSelectCategory }: IExpenseFilterProps) {
  return (
    <select
      className="form-select"
      onChange={(e) => onSelectCategory(e.target.value)}
    >
      <option value="">All categories</option>
      {categories.map((cat) => (
        <option key={cat} value={cat}>
          {cat}
        </option>
      ))}
    </select>
  );
}

export default ExpenseFilter;

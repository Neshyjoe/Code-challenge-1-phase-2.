import { useState } from "react";

export const ExpenseForm = ({ onAddExpense }) => {
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    category: "",
    amount: "",
    date: "",
  });

  function handleChange(e) {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    onAddExpense(formData);
    setFormData({
      name: "",
      description: "",
      category: "",
      amount: "",
      date: "",
    });
  }

  return (
    <div className="form-container">
      <h2>Add Expense</h2>
      <p>Enter your expense details below</p>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
          placeholder="Enter expense name"
        />
        <input
          type="text"
          name="description"
          value={formData.description}
          onChange={handleChange}
          placeholder="Enter expense description"
        />
        <input
          type="text"
          name="category"
          value={formData.category}
          onChange={handleChange}
          placeholder="Enter expense category"
        />
        <input
          type="number"
          name="amount"
          value={formData.amount}
          onChange={handleChange}
          required
          placeholder="Enter amount"
        />
        <input
          type="date"
          name="date"
          value={formData.date}
          onChange={handleChange}
          required
        />
        <button type="submit" className="submit-button">Submit</button>
      </form>
    </div>
  );
};

export default ExpenseForm;

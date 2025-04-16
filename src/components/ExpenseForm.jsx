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
        <label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            placeholder="Enter expense name"
          />
        </label>
        <br />
        <label>
         <input
            type="text"
            name="description"
            value={formData.description}
            onChange={handleChange}
            placeholder="Enter expense description"
          />
        </label>
        <br />
        <label>
          <input
            type="text"
            name="category"
            value={formData.category}
            onChange={handleChange}
            placeholder="Enter expense category"
          />
        </label>
        <br />
        <label>
          <input
            type="number"
            name="amount"
            value={formData.amount}
            onChange={handleChange}
            required
            placeholder="Enter amount"
          />
        </label>
        <br />
        <label>
          <input
            type="date"
            name="date"
            value={formData.date}
            onChange={handleChange}
            placeholder="Enter date"
          />
        </label>
        

  </form>
</div>
  );
}

export default ExpenseForm;
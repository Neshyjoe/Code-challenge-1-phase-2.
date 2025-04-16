import React from "react";


export const ExpensesTable = ({ expenses }) => {
    return (
      <div className="expenses-table-container">
        <h2>Expenses</h2>
        <table className="expenses-table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Description</th>
              <th>Category</th>
              <th>Amount</th>
              <th>Date</th>
            </tr>
          </thead>
          <tbody>
            {expenses.length === 0 ? (
              <tr>
                <td colSpan="5">No expenses recorded yet.</td>
              </tr>
            ) : (
              expenses.map((expense, index) => (
                <tr key={index}>
                  <td>{expense.name}</td>
                  <td>{expense.description}</td>
                  <td>{expense.category}</td>
                  <td>${parseFloat(expense.amount).toFixed(2)}</td>
                  <td>{expense.date}</td>
                  
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    );
  }

  export default ExpensesTable;